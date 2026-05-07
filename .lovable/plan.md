## Plan: Apply new Kenooz logo across the site

The uploaded logo is gold Arabic + "KENOOZ" wordmark on a black background — perfect for the dark theme used site-wide.

### Steps

1. **Copy the uploaded logo into the project**
   - `user-uploads://Kenooz_Logo_002.png` → `src/assets/kenooz-logo.png` (used by Navbar + Footer)
   - Same file → `public/favicon.png` (browser tab icon)
   - Same file → `public/favicon.ico` location replacement (we'll point favicon link to the PNG; keep `.ico` reference working by overwriting `public/favicon.ico` with the PNG bytes too, or just rely on `favicon.png` already wired in `__root.tsx`)

2. **Header (Navbar)** — `src/components/layout/Navbar.tsx`
   - Currently uses two logos: `kenooz-logo-dark.png` (light mode) and `kenooz-logo-light.png` (dark mode).
   - Since the new logo has a black background, it only looks good on dark surfaces. The site defaults to dark theme. Two options:
     - **(A)** Use the new logo for both themes (simplest). On light mode the black square will be visible — acceptable since site is dark-first.
     - **(B)** Keep separate light/dark variants and only swap the dark one. Requires a transparent version for light mode (not provided).
   - Recommended: **Option A** — point both `<img>` tags to the new `kenooz-logo.png`.

3. **Footer** — `src/components/layout/CinematicFooter.tsx`
   - Locate logo usage and swap to the new asset. (Will read this file during implementation to find exact import.)

4. **Favicon** — `src/routes/__root.tsx`
   - Already references `/favicon.png` and `/favicon.ico`. Overwriting `public/favicon.png` with the new logo is enough; no code change needed unless we want to add 32×32 / 16×16 sizes.

### Open question

The new logo is on a **solid black background** (not transparent). On the light-mode version of the header, this will show as a black rectangle around the logo. Do you want me to:
- **A.** Use it as-is on both themes (black box visible in light mode), OR
- **B.** Generate a transparent-background version (gold logo only) so it blends on any background?

I'll go with **A** unless you say otherwise — let me know before I implement.