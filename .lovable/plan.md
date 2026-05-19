# Plan: Fix hero image, intro video delay, and navigation re-trigger bug

## Issues found

### 1. Navigation always returns to intro/home (root cause)
`IntroSplash` is rendered inside `SiteLayout`, and **every page wraps itself in its own `<SiteLayout>`** (Index, About, Brands, Contact, Manufacturing, PrivateLabel, Products, Stubs). React Router unmounts the old page and mounts the new one on every route change → `SiteLayout` remounts → `IntroSplash` resets `visible = true` → user sees the intro video again on every single nav click. This is the bug being reported.

### 2. Intro video starts late
The `<video>` tag has no `preload` hint and no `poster`. The browser waits for metadata before painting, so users see a black screen for ~0.5–1s before playback begins.

### 3. Hero image
Replace the current hero with the new uploaded Kenooz bottle image (gold bottle on dark shelf background).

## Changes

### A) Mount IntroSplash once, globally (fixes nav bug)
- Remove `<IntroSplash />` from `src/components/layout/SiteLayout.tsx`.
- Mount it once in `src/main.tsx`, outside `<Routes>`, so it lives above the router and is NOT remounted on navigation.
- Use a module-level `hasShownIntro` flag so the splash plays once per page load. Refreshing the tab (a real "visit") still re-shows it; clicking nav links does not.

### B) Make the video start faster
In `IntroSplash.tsx`:
- Add `preload="auto"` and `poster` (a dark placeholder) so the first paint isn't black.
- Add `onCanPlay` handler that calls `videoRef.current.play()` defensively.
- Keep `muted autoPlay playsInline loop` (required for mobile autoplay).

### C) Replace hero image
- Copy `user-uploads://image-15.png` → `src/assets/hero-kenooz-new.jpg`.
- Update `src/components/home/Hero.tsx` import to use the new image.
- Keep existing layout, headline, CTA buttons unchanged.

## Files touched
- `src/main.tsx` — mount `<IntroSplash />` once at root
- `src/components/layout/SiteLayout.tsx` — remove `<IntroSplash />`
- `src/components/IntroSplash.tsx` — module-level shown flag, faster video start
- `src/components/home/Hero.tsx` — new hero image import
- `src/assets/hero-kenooz-new.jpg` — new asset (copied from upload)

## Verification
- Click each nav link (Home, About, Brands, Products, Contact) → splash does NOT replay, page navigates normally.
- Refresh the tab → splash plays once.
- Hero section shows the new bottle image on `/`.
- Test on 390×844 mobile viewport.
