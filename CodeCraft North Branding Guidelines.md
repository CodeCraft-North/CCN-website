# CodeCraft North branding guidelines

This document is the reference for how CodeCraft North (CCN) should look and feel in **web-based tools and online assets** (internal dashboards, calculators, landing pages, embeds, marketing microsites, and anything that sits alongside [codecraftnorth.co.uk](https://codecraftnorth.co.uk)). For the main marketing site, the canonical implementation lives in this repository: `tokens.json`, `src/css/input.css`, and shared layouts in `src/_layouts/`.

---

## Name and spelling

- **Preferred written name:** CodeCraft North (one word, camel case for “CodeCraft”).
- **Abbreviation:** CCN is acceptable in tight UI (badges, file names, internal tools) when the full name appears nearby or in the page title.
- **British English** for all user-facing copy, labels, errors, and documentation tied to CCN assets.

---

## Web design principles

1. **Clarity over decoration.** Plenty of whitespace, readable type, obvious hierarchy. Avoid noisy gradients and gimmicky motion unless they serve comprehension.
2. **Performance and accessibility by default.** Semantic HTML, visible focus states, sufficient colour contrast (aim for WCAG 2.1 AA). Prefer static or server-rendered UI for public-facing tools unless interactivity is essential.
3. **Light and dark aware.** The main site supports a user-chosen theme. New tools should either honour `prefers-color-scheme`, offer a simple theme toggle, or document a single approved mode if dual themes are out of scope.
4. **Consistent with the main site.** Reuse the palette, type stack, and radius/shadow language below so CCN properties feel like one brand.

---

## Colour palette (web)

Use these as the **source of truth** for CSS, design tools, and exports. Names align with `tokens.json` and Tailwind theme tokens in `src/css/input.css`.

### Brand

| Token / role | Hex | Use |
|--------------|-----|-----|
| Brand primary | `#2563eb` | Primary buttons, key links, icons on light backgrounds |
| Brand primary on dark | `#3b82f6` | Primary accents and links on dark backgrounds (improved contrast) |
| Brand light | `#e8f0ff` | Light mode tints, subtle highlights |
| Brand dark | `#1e3a8a` | Dark mode brand tint backgrounds |

### Backgrounds

| Role | Light | Dark |
|------|-------|------|
| Page / base | `#ffffff` | `#0f172a` |
| Section alternate | `#f5f7fa` | `#1e2533` |
| Card / muted panels | `#eef2f6` | `#1c2430` |
| Surface (cards on tinted sections) | `#ffffff` | `#1c2430` |

### Text

| Role | Light | Dark |
|------|-------|------|
| Primary | `#0f172a` | `#d1d9e0` |
| Secondary | `#475569` | `#aeb7c2` |
| Muted / tertiary | `#94a3b8` | (use secondary on dark) |
| Strong emphasis on dark | — | `#e6edf5` |

### Borders

| Role | Light | Dark |
|------|-------|------|
| Standard | `#d8dee6` | `#334155` |
| Light | `#c5ccd6` | `#475569` |

### Interaction

| Role | Light | Dark |
|------|-------|------|
| Hover (on primary actions) | `#1d4ed8` | `#3b82f6` |
| Focus ring | `#2563eb` | `#2563eb` (outline should remain visible on dark) |

**Do not** introduce extra accent colours (e.g. second primaries, rainbow gradients) for CCN-branded tools without a deliberate brand update. Neutrals and blue should carry the interface.

---

## Typography

- **Primary stack:** Inter, system-ui, sans-serif.
- **Weights in use on the main site:** 400 (body), 500 (links, emphasis), 600 (buttons, labels), 700 (headings).
- **Load Inter** from Google Fonts with `display=swap` if the tool is on the web, or subset/embed consistently with the main site to avoid FOUT clashes.
- **Body text:** comfortable line height (roughly 1.5–1.75 for paragraphs). **Headings:** bold, tight line height, clear step down from page title to subsections (one logical `<h1>` per view).

---

## Layout and spacing

- **Content width:** Prefer a max content width around **72rem** (`max-w-6xl` / 1152px) with horizontal padding (~1.5rem) so lines do not sprawl on large screens.
- **Section rhythm:** Vertical spacing in the region of **4–6rem** between major blocks on marketing-style pages; denser spacing is fine for data-heavy tools, but keep section breaks obvious.
- **Corners:** **0.5rem** (`rounded-lg`) for buttons, cards, and inputs unless a specific component library dictates otherwise.
- **Shadows:** Soft, low drama (subtle card elevation). Avoid heavy drop shadows or glassmorphism unless prototyping something explicitly non-brand.

---

## Components (reference behaviour)

Align buttons, cards, and links with the main site patterns:

- **Primary button:** Brand primary background, white text, rounded-lg, font-weight 600, clear hover darkening.
- **Secondary button:** White (or surface) background, brand-coloured border or text on light; on dark, surface background with brand border.
- **Links:** Underlined or clearly identifiable; use brand primary (light) / brand primary on dark (dark).
- **Focus:** Visible **2px** outline in focus colour with **2px** offset (see global focus rules in `input.css`).
- **Cards / panels:** Light background, light border, modest shadow; dark mode uses surface background and dark border tokens.

---

## Logo and favicon

Asset locations in this repo (paths are as served from the site root):

- **Default OG / social fallback:** `/img/logos/CCN-logo-transparent-blue.webp`
- **Favicon:** `/img/logos/favicon-transparent.png` (also used as apple-touch-icon on the main site)
- **Header variants:** light and dark logo pair for navigation (see `nav-logo--light` / `nav-logo--dark` in CSS)

**Usage rules:**

- Preserve clear space around the logo (roughly the height of the “C” in CodeCraft as a minimum margin where practical).
- Do not stretch, recolour arbitrarily, or add effects that obscure legibility.
- Prefer **WebP** (or SVG if available) for web; supply **alt** text such as “CodeCraft North” for inline logos.

---

## Imagery and illustration

- Illustrations on the main site are clean, flat, and professional. For new assets, favour **simple shapes**, **brand blues**, and **neutral greys**; avoid stock-photo clichés where custom SVG or branded illustration fits better.
- **Photography:** Natural light, authentic settings, consistent colour grading where multiple images appear together.
- Always include **descriptive alt text** and meaningful **width/height** (or aspect ratio) to limit layout shift.

---

## Voice in UI copy

- Direct, calm, and expert. Avoid agency fluff and unexplained jargon.
- **Errors:** State what went wrong, what the user can do next, and keep blame neutral.
- **Success:** Short confirmation; no excessive celebration copy for routine actions.

---

## Technical checklist for new web tools

- [ ] Colours taken from the tables above (or CSS variables mirroring `tokens.json`).
- [ ] Inter (or agreed fallback stack) for UI text.
- [ ] Focus visible for keyboard users; forms fully labelled.
- [ ] Contrast checked for primary text and interactive elements in both themes if applicable.
- [ ] Logo/favicon correct; page `<title>` includes “CodeCraft North” or “CCN” as agreed for that product.
- [ ] British spelling in user-facing strings.

---

## Maintenance

When the live site palette or typography changes, update **this file**, **`tokens.json`**, and **`src/css/input.css`** together so tools and the marketing site stay aligned.
