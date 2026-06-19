# Deploy Charlotte Chinese Academy to Cloudflare Pages

This site is fully static (plain HTML/CSS/JS). Cloudflare just serves the files —
there is **no build step**. You have two ways to deploy.

---

## Option A — Direct Upload (fastest, live in ~5 minutes)

Best for getting online today. No GitHub needed.

1. Create a free account at https://dash.cloudflare.com (use the school's email).
2. In the left sidebar: **Workers & Pages** → **Create** → **Pages** tab →
   **Upload assets**.
3. Project name: `charlotte-chinese-academy` (this becomes
   `charlotte-chinese-academy.pages.dev`).
4. **Drag in the unzipped project folder** (the one containing `index.html`,
   `Home.dc.html`, `assets/`, etc.). Drop the *contents*, so `index.html` sits at
   the top level.
5. Click **Deploy site**. Done — your site is live at the `.pages.dev` URL.

To publish a change later: come back to the project → **Create new deployment** →
drag the updated folder in again.

### Build settings (if it ever asks)
- Framework preset: **None**
- Build command: **(leave blank)**
- Build output directory: **/**

---

## Option B — Connect GitHub (recommended if volunteers will edit news)

This is the path that lets you add Decap CMS later so volunteers post news
without touching code. Every time the repo changes, Cloudflare redeploys
automatically.

1. Put this project in a GitHub repository (I can help you do this).
2. In Cloudflare: **Workers & Pages** → **Create** → **Pages** →
   **Connect to Git**.
3. Pick the repository. Set:
   - Framework preset: **None**
   - Build command: **(blank)**
   - Build output directory: **/**
4. **Save and Deploy.** From now on, any change pushed to the repo goes live
   automatically.

---

## Custom domain (e.g. charlottechineseacademy.org)

1. In your Pages project: **Custom domains** → **Set up a custom domain**.
2. Enter the domain. If the domain is already managed in Cloudflare, it's one
   click. Otherwise Cloudflare shows you the DNS records (a CNAME) to add at your
   current registrar.
3. SSL/HTTPS is automatic and free.

---

## Notes about this site

- `index.html` automatically forwards visitors to `Home.dc.html` (the homepage).
- All page-to-page links are relative, so they work on any host with no changes.
- The **contact** and **volunteer** forms currently show a success message but do
  not send email yet. To make them deliver, connect a free form service
  (Formspree works on Cloudflare; ~5 minutes). Ask me and I'll wire it in.
- News/events are edited in `news-data.js` for now. To give volunteers a friendly
  admin panel, use Option B above + Decap CMS (ask me to set it up).
