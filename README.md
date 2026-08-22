# Sealed Nectar Academy — Website

Standalone public website for Sealed Nectar Academy, Ota, Ogun State.
Built with Vite + React + Tailwind. Currently running on placeholder
content — not yet connected to Supabase.

## Design

Deep indigo + brass gold palette with a signature Adire-inspired
geometric motif (see `src/components/AdireDivider.jsx`), referencing
Ogun State's textile heritage. Fonts: Fraunces (display), Work Sans
(body), IBM Plex Mono (labels/eyebrows).

## Running this in GitHub Codespaces (mobile-friendly workflow)

1. Push this folder to a new GitHub repo (e.g. `sna-website`).
2. Open the repo → **Code → Codespaces → Create codespace on main**.
3. In the Codespaces terminal:
   ```
   npm install
   npm run dev
   ```
4. Codespaces will offer to open a forwarded port — that's your live preview.

## Deploying to Vercel

1. Import the GitHub repo into Vercel.
2. Framework preset: **Vite**.
3. If/when you connect Supabase, add environment variables in
   **Vercel → Project → Settings → Environment Variables**:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`

   Double check these names carefully — a corrupted key name
   (`VITE_SUPABASE_ANON_KEYVITE_`) broke the previous website deploy.

## Plugging into the SMS later

The SMS already reads from the same Supabase project
(`cpierrunqgjimbuaocxe.supabase.co`). Once this site is stable:
- Point this site's `.env` at that same project using `.env.example` as a guide.
- Add tables/queries as needed (e.g. `news_posts`, `staff`, `gallery`) and
  wire them into `src/pages/News.jsx`, `Staff.jsx`, `Gallery.jsx` via
  `src/supabaseClient.js`.
- Link the SMS portal login button in `Navbar.jsx` (already points to
  `sealed-nectar-sms.vercel.app`) — update if the SMS URL changes.

## Pages

Home · About · Admissions · Programs · Staff · News · Gallery · Contact

Search the codebase for `[Replace...]` / `[Add...]` placeholders —
these mark spots that need real school content and photos.
