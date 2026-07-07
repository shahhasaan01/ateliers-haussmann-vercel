import { sendMetaConversionEvents } from '@/lib/meta-capi';

export async function POST(request) {
  try {
    const body = await request.json();

    const clientIp =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      '';

    const result = await sendMetaConversionEvents({
      eventId: body.eventId,
      prenom: body.prenom,
      nom: body.nom,
      email: body.email,
      telephone: body.telephone,
      codePostal: body.codePostal,
      service: body.service,
      eventSourceUrl: body.eventSourceUrl,
      clientUserAgent: request.headers.get('user-agent') || '',
      clientIp,
      fbp: body.fbp,
      fbc: body.fbc,
    });

    if (result.skipped) {
      return Response.json({ ok: true, skipped: true });
    }

    if (!result.ok) {
      return Response.json({ ok: false, error: result.result }, { status: 502 });
    }

    return Response.json({ ok: true, events_received: result.result?.events_received });
  } catch {
    return Response.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
