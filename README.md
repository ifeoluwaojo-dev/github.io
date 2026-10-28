# Ifeoluwa Ojo — portfolio redesign

A responsive, editorial portfolio built for **Ifeoluwa Kolawole Ojo** using the information in the updated Generalist CV (October 2026). The visual language is original, inspired by the playful editorial ambition of Oyin's portfolio—not a copy of its layout, images, source code, or animations.

**Intended existing site:** https://ifeoluwaojo-dev.github.io/github.io/

## What's inside

```
index.html                           Homepage + three-question interactive evaluation demo
work/
  ai-response-evaluation.html        Detailed, honest case study
  research-and-analysis.html         Academic research overview
  this-website.html                  Portfolio design/build explanation
assets/
  css/styles.css                     Styling, animations, responsive states
  js/main.js                         Menu, reveal, mini evaluation demo
  img/                               Original SVG artwork, favicon, sharing image
  docs/
    Ifeoluwa_Ojo_Generalist_CV.pdf   Existing October 2026 CV
    AI_Response_Evaluation_Portfolio.pdf  Existing 20-pair illustrative case study
.nojekyll
robots.txt
sitemap.xml
```

## Publish using your existing GitHub Pages repository

These files are ready for the **root** of the existing `ifeoluwaojo-dev/github.io` repo. **Do not upload the outer folder as a single folder; upload its contents to the repo root.** The links use relative paths so they work under `/github.io/`.

### If you use Git locally (recommended)

1. Clone your existing repository if you haven't already:

   ```bash
   git clone https://github.com/ifeoluwaojo-dev/github.io.git
   cd github.io
   ```

2. Back up your current `index.html` (if you'd like to preserve the original design).
3. Copy **all the contents** of this redesign folder into that local `github.io` directory, replacing the old `index.html` and adding the new `assets/` and `work/` folders. Keep the repo's `.git` folder and any `CNAME` file you already use.
4. Publish:

   ```bash
   git add -A
   git commit -m "Redesign personal portfolio for research and AI evaluation"
   git push origin main
   ```

5. Make sure GitHub → repository **Settings → Pages** is set to publish from your chosen main branch and root directory (unless a Pages workflow is already configured). The site address remains the same.

### If you use GitHub's website

Open your repository, then add/replace the new files while preserving this folder structure. The uploaded **root** must contain `index.html`, `assets/`, and `work/`. Commit the changes. Avoid accidentally putting `index.html` inside another `ifeoluwa-portfolio-redesign/` folder.

## Local preview

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/`. No Node.js, dependencies, package installation, or build command required. Webfonts are optional—local system-font fallbacks are included.

## Content integrity

- The AI response evaluation is **author-created hypothetical practice**, not recorded model outputs, client work, or measured AI performance.
- The academic research entries are presented as academic studies, with no invented commercial outcomes.
- Email: `ifeoluwaojo211@gmail.com`; GitHub: `ifeoluwaojo-dev`.
- The downloadable CV and evaluation PDF are the original provided files, not reformatted copies.

## Things to edit later

- Edit the contact email and short biography in `index.html` and in individual case-study pages.
- Edit the scenarios in `assets/js/main.js` under `const questions`.
- Replace PDFs in `assets/docs/` with newer versions when available.
- Keep `og:url` and `canonical` metadata consistent if you change the website URL.

The site has a skip link, semantic landmarks, accessible menu buttons and live feedback, visible keyboard focus, and a `prefers-reduced-motion` fallback.


## 2026 update — FORME. Home & Living

A fourth project card and a detailed e-commerce case study were added. Publish the separate `forme-home-living` repository first. Only then upload this complete portfolio folder contents (not the folder itself) to the existing `github.io` repository, replacing existing files when prompted. The new project links point to `https://ifeoluwaojo-dev.github.io/forme-home-living/`.

## 2026 update — MarineOps Fleet Management

Adds project number **05**, an illustrated MarineOps card and `work/marineops-fleet-management.html` case study with direct links to:

- Live application: https://marineops-self.vercel.app/
- Source code: https://github.com/ifeoluwaojo-dev/marineops

Upload **the contents of this ZIP** to the root of the existing `ifeoluwaojo-dev/github.io` repository. It preserves the existing AI evaluation, research, portfolio, and FORME case studies. The new public demo uses illustrative local browser data; Supabase is not yet enabled.
