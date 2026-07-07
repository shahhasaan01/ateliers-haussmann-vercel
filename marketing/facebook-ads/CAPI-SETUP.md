# Meta Conversions API — Setup

## 1. Generate access token (Meta Events Manager)

1. Open **Events Manager** → your pixel → **Conversions API**
2. Select **Configure with Dataset Quality API (Recommended)**
3. Click **Generate an access token**
4. Copy the token immediately (Meta does not store it)

## 2. Add Vercel environment variables

| Variable | Value | Notes |
|----------|--------|--------|
| `META_CAPI_ACCESS_TOKEN` | Your token | Server-only — never use `NEXT_PUBLIC_` |
| `META_PIXEL_ID` | `979753618221841` | Optional (defaults to pixel ID in code) |
| `META_TEST_EVENT_CODE` | Test code from Meta | Optional — for testing only |

Redeploy after adding variables.

## 3. Events sent on quote form submit

| Meta event | Maps to dashboard |
|------------|-------------------|
| `Lead` | Prospect Sent |
| `SubmitApplication` | Request Submission |

Both fire from:
- **Browser** (Meta Pixel) — with `eventID` for deduplication
- **Server** (Conversions API) — same `event_id`

## 4. Test events

1. In Events Manager → **Test events**, copy your **Test event code**
2. Add `META_TEST_EVENT_CODE` in Vercel
3. Submit a test form on https://ateliers-haussmann-3d.vercel.app/climatisation
4. Confirm **Lead** and **SubmitApplication** appear in Test events
5. Remove `META_TEST_EVENT_CODE` before going live

## 5. API endpoint

`POST /api/meta-conversion` — called automatically by `QuoteForm` after successful Formspree submit.

Payload includes hashed email, phone, name, postal code (SHA-256 per Meta requirements).
