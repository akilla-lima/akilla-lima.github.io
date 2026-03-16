# Akilla Nathan — Portfoli

**Bilingual (EN/PT) professional portfolio for a Group Product Manager in Fintech & Payments.**  
Built for GitHub Pages. Zero dependencies, no build step required.

---

## 📁 File Structure

```
portfolio/
├── index.html   ← Full page (all sections)
├── style.css    ← Design system + responsive layout
├── script.js    ← i18n, WhatsApp links, animations
└── README.md    ← This file
```

---

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1 — Create the repository

1. Sign in at [github.com](https://github.com)
2. Click **+** → **New repository**
3. Name it: **`your-username.github.io`** ← replace with your actual GitHub username
4. Set visibility: **Public**
5. Click **Create repository**

> ✅ Naming the repo `your-username.github.io` makes the site available at that exact URL with no extra config.

---

### Step 2 — Upload the files

**Option A — Web upload (easiest):**
1. Open the repository page
2. Click **Add file → Upload files**
3. Drag the 3 files: `index.html`, `style.css`, `script.js`
4. Write a commit message → **Commit changes**

**Option B — Git CLI:**
```bash
git init
git add .
git commit -m "Launch: portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_USERNAME.github.io.git
git push -u origin main
```

---

### Step 3 — Enable GitHub Pages

1. Go to your repository
2. Click **Settings** (top tab)
3. Scroll to the **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**

Your site is live at: `https://your-username.github.io`

> It may take **1–2 minutes** for the first deploy to appear.

---

## 🌐 Custom Domain (Optional)

To use `akillanathan.dev` or similar:

1. Buy a domain from Namecheap, GoDaddy, etc.
2. Add DNS records at your registrar:

   **For a `www` subdomain:**
   ```
   CNAME  www  your-username.github.io
   ```

   **For apex domain (no www):**
   ```
   A  @  185.199.108.153
   A  @  185.199.109.153
   A  @  185.199.110.153
   A  @  185.199.111.153
   ```

3. In GitHub: **Settings → Pages → Custom domain** → enter your domain
4. Check **Enforce HTTPS**

---

## 🛠 Customization Guide

### Update personal data
All content lives in `index.html`. Search for:
- Hero name: `<h1 class="hero-name">`
- Experience cards: `.exp-item` blocks in `#experience`
- Projects: `.pj-card` blocks in `#projects`
- Contact links: `#contact` section

### Update translations
In `script.js`, edit the `T` object:
```js
const T = {
  en: { about_p1: "Your English text here", ... },
  pt: { about_p1: "Seu texto em português aqui", ... }
}
```
Every `data-i18n="key"` attribute in the HTML maps to a key in `T`.

### Update WhatsApp messages
Also in `script.js`:
```js
const WA_MESSAGES = {
  en: "Hello Akilla...",
  pt: "Olá Akilla..."
};
```

### Change colors
Edit CSS variables at the top of `style.css`:
```css
:root {
  --au:   #d4a843; /* Gold accent */
  --wa:   #25d366; /* WhatsApp green */
  --ink:  #080a0f; /* Background */
}
```

### Add a project
Copy any `.pj-card` block in `index.html`, then add translation keys to `T.en` and `T.pt` in `script.js`.

---

## ✨ Features

| Feature | Details |
|---|---|
| **Bilingual** | EN / PT-BR with `localStorage` persistence |
| **WhatsApp Button** | Floating + Hero + Contact, bilingual pre-filled messages |
| **GitHub Pages** | Static HTML/CSS/JS — no build step |
| **Responsive** | Mobile, tablet, desktop |
| **Cursor glow** | Ambient gold light follows mouse (desktop) |
| **Scroll reveal** | Intersection Observer fade-in animations |
| **Noise texture** | Subtle grain overlay for visual depth |
| **Animated lines** | Scanning horizontal light streaks in Hero |
| **Active nav** | Highlights section currently in view |
| **Smooth scroll** | Nav-height-aware anchor scrolling |
| **WA on scroll** | Float button fades in after first scroll |

---

## 💡 Portfolio Improvement Suggestions

1. **Add a headshot** — A professional photo in the About section increases recruiter trust significantly. Use a circular crop with a subtle border.

2. **Quantify impact** — Replace generic descriptions with metrics: *"Reduced onboarding time by 38%"*, *"Scaled PIX to 80K daily transactions"*. Numbers are remembered.

3. **Add Open Graph tags** — For rich LinkedIn/WhatsApp preview cards when sharing:
   ```html
   <meta property="og:image" content="https://your-site/preview.png" />
   ```

4. **Case study PDFs** — Link each project card to a 1-page PDF case study. Recruiters love something they can forward.

5. **Testimonials** — One quote from a CEO, VP, or colleague acts as social proof. Even a single sentence works.

6. **Blog / Writing section** — Link your 2–3 best LinkedIn articles. Demonstrates thought leadership in fintech.

7. **Favicon** — A `[AN]` monogram favicon makes the browser tab look polished. Create one at [favicon.io](https://favicon.io).

8. **Google Analytics (or Plausible)** — Track where visitors come from. Essential to know if your LinkedIn profile is converting.

9. **Dark/light toggle** — A light mode option broadens your audience. The CSS variable system makes this straightforward to add.

10. **WhatsApp CTA copy test** — Try *"Available for new roles"* vs *"Open to opportunities"* as the tooltip text to see what drives more clicks.

---

## 📄 License

Personal use. Free to adapt for your own portfolio.
