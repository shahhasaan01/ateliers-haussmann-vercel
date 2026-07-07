/**
 * Ateliers Haussmann — Google Sheets form webhook
 *
 * Setup:
 * 1. Create a Google Sheet named "Leads Ateliers Haussmann"
 * 2. Row 1 headers: Date | Prénom | Nom | Téléphone | Email | Code postal | Service | Message | Page
 * 3. Extensions → Apps Script → paste this file
 * 4. Set WEBHOOK_SECRET below (same value as GOOGLE_SHEETS_WEBHOOK_SECRET in Vercel)
 * 5. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 6. Copy the Web App URL into Vercel as GOOGLE_SHEETS_WEBHOOK_URL
 */

const WEBHOOK_SECRET = 'change-me-to-a-long-random-string';

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents);

    if (!WEBHOOK_SECRET || payload.secret !== WEBHOOK_SECRET) {
      return jsonResponse({ ok: false, error: 'Unauthorized' }, 401);
    }

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Leads')
      || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    sheet.appendRow([
      payload.submittedAt || new Date().toISOString(),
      payload.prenom || '',
      payload.nom || '',
      payload.telephone || '',
      payload.email || '',
      payload.codePostal || '',
      payload.service || '',
      payload.message || '',
      payload.sourcePage || '',
    ]);

    return jsonResponse({ ok: true });
  } catch (err) {
    return jsonResponse({ ok: false, error: String(err) }, 500);
  }
}

function jsonResponse(data, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);

  if (statusCode) {
    // Apps Script web apps always return HTTP 200, but the JSON signals errors.
    return output;
  }

  return output;
}
