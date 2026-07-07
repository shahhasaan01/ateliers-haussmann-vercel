# Google Sheets — Form Lead Setup

Every quote form submission is sent to `/api/submit-lead`, which appends a row to your Google Sheet.

## Step 1 — Create the Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet: **Leads Ateliers Haussmann**
3. Rename the first tab to **Leads**
4. Add these headers in row 1:

| A | B | C | D | E | F | G | H | I |
|---|---|---|---|---|---|---|---|---|
| Date | Prénom | Nom | Téléphone | Email | Code postal | Service | Message | Page |

## Step 2 — Add the Apps Script webhook

1. In the sheet: **Extensions → Apps Script**
2. Delete any default code and paste the contents of `scripts/google-sheets-webapp.gs`
3. Change `WEBHOOK_SECRET` to a long random string (example: `ah_2026_k7mP9xQ2vL4nR8wT`)
4. Save the project (name it **Ateliers Haussmann Leads**)

## Step 3 — Deploy the web app

1. Click **Deploy → New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy** and authorize Google when prompted
6. Copy the **Web app URL** (ends with `/exec`)

## Step 4 — Add Vercel environment variables

In [Vercel Environment Variables](https://vercel.com/explore-pakistan/ateliers-haussmann-3d/settings/environment-variables):

| Variable | Value |
|----------|--------|
| `GOOGLE_SHEETS_WEBHOOK_URL` | Your Web app URL from step 3 |
| `GOOGLE_SHEETS_WEBHOOK_SECRET` | Same secret as in Apps Script |

Redeploy after saving.

## Step 5 — Test

1. Visit https://ateliers-haussmann-3d.vercel.app/climatisation
2. Submit a test lead
3. A new row should appear in your Google Sheet within a few seconds

## Troubleshooting

- **Form shows error:** `GOOGLE_SHEETS_WEBHOOK_URL` is missing on Vercel — add it and redeploy
- **401 Unauthorized:** `GOOGLE_SHEETS_WEBHOOK_SECRET` does not match the Apps Script secret
- **No row added:** Re-deploy the Apps Script web app after code changes
