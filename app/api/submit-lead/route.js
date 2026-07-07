import { appendLeadToGoogleSheet } from '@/lib/google-sheets';

const REQUIRED_FIELDS = ['prenom', 'nom', 'telephone', 'codePostal', 'service'];

function validateLead(body) {
  if (!body || typeof body !== 'object') {
    return 'Invalid request body';
  }

  for (const field of REQUIRED_FIELDS) {
    if (!String(body[field] || '').trim()) {
      return `Missing required field: ${field}`;
    }
  }

  return null;
}

export async function POST(request) {
  try {
    const body = await request.json();
    const validationError = validateLead(body);

    if (validationError) {
      return Response.json({ ok: false, error: validationError }, { status: 400 });
    }

    const result = await appendLeadToGoogleSheet({
      prenom: String(body.prenom).trim(),
      nom: String(body.nom).trim(),
      telephone: String(body.telephone).trim(),
      email: String(body.email || '').trim(),
      codePostal: String(body.codePostal).trim(),
      service: String(body.service).trim(),
      message: String(body.message || '').trim(),
      sourcePage: String(body.sourcePage || request.headers.get('referer') || '').trim(),
    });

    if (result.skipped) {
      return Response.json(
        { ok: false, error: 'Google Sheets is not configured on the server' },
        { status: 503 }
      );
    }

    if (!result.ok) {
      return Response.json({ ok: false, error: 'Failed to save lead' }, { status: 502 });
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: 'Invalid request' }, { status: 400 });
  }
}
