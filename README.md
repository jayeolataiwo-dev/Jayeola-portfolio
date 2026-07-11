# Jayeola Taiwo Elizabeth — Portfolio

## Before you deploy
Your photos, CV, and contact form are all already in place and connected —
there's nothing left to configure. You can go straight to deploying below.

## Deploying to GitHub Pages
1. Create a new repository on GitHub (or use an existing one).
2. Upload this whole folder's contents to the repo — either by dragging the
   files into the GitHub web UI, or via git:
   ```
   git init
   git add .
   git commit -m "Deploy portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
   git push -u origin main
   ```
3. In the repo, go to **Settings → Pages**.
4. Under "Build and deployment", set the source branch to `main` and the
   folder to `/ (root)`, then save.
5. GitHub will give you a live URL within a minute or two, usually:
   `https://YOUR-USERNAME.github.io/YOUR-REPO/`

That's it — no build step, no server, it's a static site.

## What was fixed in this pass
- CV download linked to a broken local file path → now links to a real file
  in the project (`assets/`) with a proper `download` attribute
- Invalid `<image>` tag → corrected to `<img>`
- An extra stray closing `</div>` in the testimonials section
- Duplicate `id="star"` on multiple elements → changed to a `class`, since
  IDs must be unique per page
- `scale3d(1.02)` in the Skills hover effect was invalid CSS (needs 3 values)
  and silently did nothing → fixed
- Contact form had no backend → wired up to Formspree (see setup step above),
  with real success/error feedback instead of pretending to send
- Logo link pointed to `#Home` but the section's id is lowercase `home` →
  fixed the mismatch so the logo actually scrolls to the top
- Duplicate `placeholder` attribute on the message textarea
- Low-contrast text/icon colors (dark cream text on the mid-tone accent
  background, header nav, buttons, footer icons) → introduced two darker
  shades of the same palette (`--main-dark`, `--dark-text`) so everything
  now passes WCAG AA contrast, without changing the overall look
- Responsive gaps: images had no `max-width` cap on large screens, the
  testimonials grid jumped straight from 3 columns to 1 with nothing for
  tablets, and nothing was tuned for very small phones (<400px) — all added
