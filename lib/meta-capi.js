import { createHash } from 'crypto';

const META_API_VERSION = 'v21.0';

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function hashEmail(email) {
  if (!email) return undefined;
  return sha256(email.trim().toLowerCase());
}

function hashPhone(phone) {
  if (!phone) return undefined;
  let digits = phone.replace(/\D/g, '');
  if (digits.startsWith('0')) digits = `33${digits.slice(1)}`;
  return sha256(digits);
}

function hashName(name) {
  if (!name) return undefined;
  return sha256(name.trim().toLowerCase());
}

function hashZip(codePostal) {
  if (!codePostal) return undefined;
  return sha256(codePostal.trim().toLowerCase().replace(/\s/g, ''));
}

function buildUserData({ prenom, nom, email, telephone, codePostal, clientUserAgent, clientIp, fbp, fbc }) {
  const userData = {};

  const em = hashEmail(email);
  const ph = hashPhone(telephone);
  const fn = hashName(prenom);
  const ln = hashName(nom);
  const zp = hashZip(codePostal);

  if (em) userData.em = [em];
  if (ph) userData.ph = [ph];
  if (fn) userData.fn = [fn];
  if (ln) userData.ln = [ln];
  if (zp) userData.zp = [zp];
  if (clientUserAgent) userData.client_user_agent = clientUserAgent;
  if (clientIp) userData.client_ip_address = clientIp;
  if (fbp) userData.fbp = fbp;
  if (fbc) userData.fbc = fbc;

  return userData;
}

function buildEvent({ eventName, eventId, eventTime, eventSourceUrl, userData, customData }) {
  return {
    event_name: eventName,
    event_time: eventTime,
    event_id: eventId,
    action_source: 'website',
    event_source_url: eventSourceUrl,
    user_data: userData,
    ...(customData ? { custom_data: customData } : {}),
  };
}

export async function sendMetaConversionEvents({
  eventId,
  prenom,
  nom,
  email,
  telephone,
  codePostal,
  service,
  eventSourceUrl,
  clientUserAgent,
  clientIp,
  fbp,
  fbc,
}) {
  const accessToken = process.env.META_CAPI_ACCESS_TOKEN;
  const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID || '979753618221841';

  if (!accessToken) {
    return { ok: false, skipped: true, reason: 'META_CAPI_ACCESS_TOKEN not configured' };
  }

  const eventTime = Math.floor(Date.now() / 1000);
  const userData = buildUserData({
    prenom,
    nom,
    email,
    telephone,
    codePostal,
    clientUserAgent,
    clientIp,
    fbp,
    fbc,
  });

  const customData = service ? { content_name: service } : undefined;

  const events = [
    buildEvent({
      eventName: 'Lead',
      eventId,
      eventTime,
      eventSourceUrl,
      userData,
      customData,
    }),
    buildEvent({
      eventName: 'SubmitApplication',
      eventId: `${eventId}-submit`,
      eventTime,
      eventSourceUrl,
      userData,
      customData,
    }),
  ];

  const payload = { data: events };

  const testEventCode = process.env.META_TEST_EVENT_CODE;
  if (testEventCode) {
    payload.test_event_code = testEventCode;
  }

  const url = `https://graph.facebook.com/${META_API_VERSION}/${pixelId}/events?access_token=${accessToken}`;

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  const result = await response.json();

  if (!response.ok) {
    return { ok: false, status: response.status, result };
  }

  return { ok: true, result };
}
