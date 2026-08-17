# FigmaLab performance handoff

This file lists the performance work that still needs a source asset, a deployment decision, or marketing approval. The application code already uses responsive images, lazy loading, Server Components, and reduced client-side animation work.

## 1. Convert the production fonts to WOFF2

The current TTF/OTF files are valid but much larger than web-specific WOFF2 files. Font preloading has been disabled so these files no longer compete with the hero image during initial loading. Replace each configured file below with a Latin/Latin-Extended WOFF2 export and update `app/layout.tsx`.

| Current file                                    | Current size | Required replacement                                       |
| ----------------------------------------------- | -----------: | ---------------------------------------------------------- |
| `app/fonts/ArticulatCF-Normal.ttf`              |     133.8 KB | `ArticulatCF-Normal.woff2`, weight 400                     |
| `app/fonts/ArticulatCF-Medium.ttf`              |     133.5 KB | `ArticulatCF-Medium.woff2`, weight 500                     |
| `app/fonts/ArticulatCF-DemiBold.ttf`            |     134.6 KB | `ArticulatCF-DemiBold.woff2`, weight 600                   |
| `app/fonts/ArticulatCF-Bold.ttf`                |     135.4 KB | `ArticulatCF-Bold.woff2`, weight 700                       |
| `app/fonts/ArticulatCF-BoldOblique.ttf`         |     136.2 KB | `ArticulatCF-BoldOblique.woff2`, weight 700 italic         |
| `app/fonts/ArticulatCF-ExtraBold.ttf`           |     136.9 KB | `ArticulatCF-ExtraBold.woff2`, weight 800                  |
| `app/fonts/PPEditorialNew-Regular.otf`          |      56.9 KB | `PPEditorialNew-Regular.woff2`, weight 400                 |
| `app/fonts/PPEditorialNew-Ultralight.otf`       |      56.4 KB | `PPEditorialNew-Ultralight.woff2`, weight 300              |
| `app/fonts/PPEditorialNew-UltralightItalic.otf` |      56.3 KB | `PPEditorialNew-UltralightItalic.woff2`, weight 300 italic |

Requirements:

- Confirm that the font license permits web embedding and format conversion.
- Preserve Portuguese glyphs and punctuation; do not create an ASCII-only subset.
- Prefer one variable WOFF2 per family if the licensed font package provides an official variable build.
- After conversion, test headings at 360 px, 768 px, 1440 px, and 1920 px because font metrics can change line wrapping.
- Only preload the Articulat 400 and Editorial 300 faces if a production waterfall proves that preloading improves LCP. Do not preload every weight again.

The following font files currently exist in the repository but are not configured by the application. They can be removed after confirming that no future page needs them: `ArticulatCF-Heavy.ttf`, `ArticulatCF-HeavyOblique.ttf`, `ArticulatCF-ExtraBoldOblique.ttf`, `ArticulatCF-DemiBoldOblique.ttf`, `ArticulatCF-MediumOblique.ttf`, `ArticulatCF-NormalOblique.ttf`, `ArticulatCF-Light.ttf`, `ArticulatCF-LightOblique.ttf`, `ArticulatCF-Thin.ttf`, and `ArticulatCF-ExtraLight.ttf`.

## 2. Re-export the remaining large course artwork

Next.js now serves these files responsively and lazily, so their full source sizes are not sent directly to every visitor. Smaller source exports are still desirable because they reduce deployment size, image-optimizer CPU time, and cold-cache generation time.

| Source file                      | Current size | Requested export                              |
| -------------------------------- | -----------: | --------------------------------------------- |
| `public/images/carrossel-5.webp` |      3.19 MB | Keep 3838×685; WebP/AVIF; target under 700 KB |
| `public/images/carrossel-6.webp` |      2.95 MB | Keep 3838×685; WebP/AVIF; target under 700 KB |
| `public/images/carrossel-7.webp` |      2.78 MB | Keep 3838×685; WebP/AVIF; target under 700 KB |
| `public/images/carrossel-8.webp` |      2.70 MB | Keep 3838×685; WebP/AVIF; target under 700 KB |
| `public/images/modulo-2.webp`    |       890 KB | Preserve transparency; target under 300 KB    |
| `public/images/modulo-3.webp`    |       899 KB | Preserve transparency; target under 300 KB    |
| `public/images/modulo-4.webp`    |      1.01 MB | Preserve transparency; target under 300 KB    |
| `public/images/modulo-5.webp`    |       923 KB | Preserve transparency; target under 300 KB    |
| `public/images/modulo-6.webp`    |       981 KB | Preserve transparency; target under 300 KB    |

Do not flatten transparency on the module cards. Check small text inside the carousel artwork at 2× mobile zoom before accepting a more aggressive export.

Two code-safe optimized replacements were generated during this pass:

- `public/images/icon-figma-pink.webp` replaces the 1.30 MB embedded-PNG SVG at approximately 7.8 KB. Keep the original `public/icons/icon-figma-pink.svg` only until visual approval, then remove it.
- `public/images/section-bg-feedbacks-desktop-optimized.webp` replaces the 5.40 MB source at approximately 405 KB. Keep the original `public/images/section-bg-feedbacks-desktop.webp` only until visual approval, then remove it.

`public/images/section-bg-feedbacks-mobile.webp` is approximately 670 KB and currently has no code reference. Confirm it is obsolete before deleting it.

## 3. Decide how aggressively analytics may be deferred

The duplicate Meta `PageView` has been removed. Google Tag Manager and Meta Pixel still use `afterInteractive` because changing their timing can reduce attribution accuracy.

If maximum loading performance is more important than capturing very early visits:

1. Change GTM to `strategy="lazyOnload"` in `app/layout.tsx`.
2. Decide whether Meta Pixel should also use `lazyOnload` or load only after consent.
3. Test a CTA click immediately after first paint. A visitor must still reach Kiwify/WhatsApp even when tracking has not loaded.
4. Verify that the GTM container does not also install Meta Pixel; otherwise events may still be duplicated outside this repository.

This decision requires the marketing/analytics owner because it changes attribution behavior, not only implementation performance.

## 4. Production hosting checks

These checks require the deployed URL and CDN configuration:

- Verify long-lived immutable caching for `/_next/static/*`.
- Verify caching for `/_next/image` responses and confirm AVIF/WebP negotiation.
- Version any directly served `public/` asset before assigning a one-year immutable cache policy.
- Run at least three mobile Lighthouse tests on a cold cache and use the median result.
- Confirm Core Web Vitals from real users: LCP at most 2.5 s, INP at most 200 ms, and CLS at most 0.1 at p75.
- Inspect the production waterfall to confirm that no feedback, module, certificate, or gallery image loads before its section approaches the viewport.

## 5. Optional further JavaScript reduction

The remaining interactive package is Embla, used by the module and feedback carousels. It is now isolated to the two carousels and no longer shares a bundle with GSAP. Replacing Embla with native CSS scroll snap could save more JavaScript, but it should only be done with explicit acceptance of changes to looping/autoplay behavior and cross-browser testing.
