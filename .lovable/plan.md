## Goal
Jab bhi koi user website (kisi bhi URL) pe aaye, sabse pehle ek **fullscreen intro video** chale, jiske niche **"Enter Website"** button ho. Button click karte hi splash hat jaye aur asli website dikhe. Yeh har visit pe show hoga.

## Steps

1. **Video file rakhna**
   - Aap apni video `public/intro.mp4` pe upload karein (mujhe upload kar dein, main project mein daal dunga).
   - Fallback poster image bhi optional rakhi ja sakti hai.

2. **Naya component banayein** — `src/components/IntroSplash.tsx`
   - Fullscreen `fixed inset-0 z-[9999]` overlay, black background.
   - `<video>` tag with `autoPlay muted playsInline loop` (browsers autoplay tabhi allow karte hain jab muted ho).
   - Niche center mein gold "Enter Website" button (site ke design tokens — `bg-primary text-primary-foreground`, uppercase, tracking-wide, Playfair feel).
   - Subtle fade-in animation, button click pe fade-out then unmount.
   - Body scroll lock jab splash visible ho.

3. **Splash ko global mount karna** — `src/main.tsx` ya `SiteLayout.tsx`
   - `SiteLayout` ke andar top pe `<IntroSplash />` render karein taake har page (/, /about, /contact, etc.) pe pehle dikhe.
   - Local React state se control hoga (no localStorage — har visit pe show).

4. **Behavior details**
   - Video muted autoplay (browser policy).
   - "Enter Website" button par click → splash hide → website reveal.
   - Mobile + desktop responsive, video `object-cover` full screen.
   - Accessibility: button focusable, `aria-label="Enter website"`, ESC key bhi splash close kare.

5. **Verify**
   - Preview check karein har route pe splash aata hai.
   - Button click ke baad smooth transition.

## Technical notes
- Pure frontend change, no backend needed.
- Uses existing design tokens from `src/styles.css` (no hardcoded colors).
- Video file path: `/intro.mp4` (Vite serves `public/` at root).

## Open item
Mujhe aap video file (mp4) bhej dein — main usko `public/intro.mp4` pe rakh dunga. Tab tak placeholder ke liye black background + text rakh sakta hun.
