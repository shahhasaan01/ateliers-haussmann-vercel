function getWebhookConfig() {
  const webhookUrl = process.env.GOOGLE_SHEETS_WEBHOOK_URL;
  const webhookSecret = process.env.GOOGLE_SHEETS_WEBHOOK_SECRET || '';

  if (!webhookUrl) {
    return null;
  }

  return { webhookUrl, webhookSecret };
}

export async function appendLeadToGoogleSheet(lead) {
  const config = getWebhookConfig();

  if (!config) {
    return { ok: false, skipped: true, reason: 'GOOGLE_SHEETS_WEBHOOK_URL not configured' };
  }

  const response = await fetch(config.webhookUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      secret: config.webhookSecret,
      prenom: lead.prenom || '',
      nom: lead.nom || '',
      telephone: lead.telephone || '',
      email: lead.email || '',
      codePostal: lead.codePostal || '',
      service: lead.service || '',
      message: lead.message || '',
      sourcePage: lead.sourcePage || '',
      submittedAt: new Date().toISOString(),
    }),
  });

  let result = {};
  try {
    result = await response.json();
  } catch {
    result = { ok: response.ok };
  }

  if (!response.ok || result.ok === false) {
    return { ok: false, status: response.status, result };
  }

  return { ok: true, result };
}
