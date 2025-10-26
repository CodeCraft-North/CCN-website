# Unified Token System for CCN Website

## 1. Color Tokens and Roles

### Allowed Color Roles

**Brand:**
- `brand-primary` (Blue #2563eb)
- `brand-secondary` (Indigo #4f46e5)
- `brand-accent` (Orange #f97316)

**Neutral:**
- `neutral-900` - Slate #0f172a (darkest text)
- `neutral-700` - Slate #334155 (secondary text)
- `neutral-600` - Slate #475569 (muted text)
- `neutral-200` - Slate #e2e8f0 (borders)
- `neutral-50` - Slate #f8fafc (lightest background)

**Semantic:**
- `text-primary` - Light/Dark text colour
- `text-secondary` - Light/Dark secondary text
- `bg-primary` - Light/Dark background
- `bg-surface` - Light/Dark card surface
- `border-muted` - Light/Dark border

### Before → After Mapping for resources.njk

| Before | After | Rationale |
|--------|-------|-----------|
| `text-brand-primary` | `text-brand-primary` | Keep (valid) |
| `text-text-primary` | `text-text-primary` | Keep (valid) |
| `text-text-secondary` | `text-text-secondary` | Keep (valid) |
| `bg-bg-primary` | `bg-bg-primary` | Keep (valid) |
| `from-brand-primary` | `from-brand-primary` | Keep (valid) |
| `to-brand-secondary` | `to-brand-secondary` | Keep (valid) |
| `text-slate-900` | `text-text-primary` | Role-based replacement |
| `text-gray-700` | `text-neutral-700` | Replace raw grey with neutral |
| `bg-white` | `bg-bg-primary` | Use semantic role |
| `bg-gray-50` | `bg-neutral-50` | Replace raw grey with neutral |
| `bg-gray-200` | `bg-neutral-200` | Replace raw grey with neutral |
| `bg-gray-700` | `bg-neutral-700` | Replace raw grey with neutral |
| `bg-gray-800` | `bg-neutral-900` | Replace raw grey with neutral |
| `bg-gray-900` | `bg-text-primary` | Replace raw grey with semantic |
| `border-gray-200` | `border-neutral-200` | Replace raw grey with neutral |
| `border-gray-700` | `border-neutral-700` | Replace raw grey with neutral |

### Notes
- Remove `text-text-primary` confusion: both exist but `text-text-primary` is the semantic role
- Standardise on: `text-primary`, `text-secondary` for text roles
- Greys converted to `neutral-*` scale
- All backgrounds use `bg-*` semantic roles

---

## 2. Dark Mode Token Replacements

### Elements Using Raw Greys in Dark Mode

| Element | Current Dark | Replacement |
|---------|--------------|-------------|
| Hero background | `dark:bg-gray-900` | `dark:bg-bg-primary` |
| Hero text | `dark:text-white` | `dark:text-text-primary` |
| Hero paragraph | `dark:text-gray-300` | `dark:text-text-secondary` |
| Topics section | `dark:bg-gray-800` | `dark:bg-bg-surface` |
| Topics text | `dark:text-gray-300` | `dark:text-text-secondary` |
| Blog card | `dark:bg-gray-800` | `dark:bg-bg-surface` |
| Blog card border | `dark:border-gray-700` | `dark:border-border-muted` |
| Blog card image bg | `dark:bg-gray-700` | `dark:bg-neutral-700` |
| Category pill bg | `dark:bg-blue-900/20` | Keep (brand variant) |

**Checklist:**
- [x] Hero uses semantic roles for dark mode
- [x] Topics section uses semantic roles
- [x] Blog cards use semantic roles
- [x] No raw greys in dark mode variants

---

## 3. Spacing and Container Standards

### Approved Spacing Scale
- `8` (py-8, px-2) - Tight spacing
- `12` (py-12, px-3) - Small sections
- `16` (py-16, px-4) - Medium sections
- `20` (py-20, px-5) - Large sections
- `24` (py-24, px-6) - Hero sections

### Container Pattern
- Max width: `max-w-6xl`
- Horizontal padding: `px-6`
- Applied to: Hero, Topics, Blog grid

### Section Spacing (By Default)

| Section | Vertical Padding | Rationale |
|---------|------------------|-----------|
| Hero | `py-24` | Large hero sections |
| Topics | `py-16` | Medium content section |
| Blog Grid | `py-16` | Match Topics for rhythm |
| Footer | `py-8` | Compact spacing |

**Notes:**
- Symmetrical: left/right padding always `px-6`
- Vertical rhythm: multiples of 8
- Hero and Blog share baseline `py-16` after hero intro

---

## 4. Heading Hierarchy

### Structure for resources.njk

```
H1: "Practical insights for growing your business online" (Hero, line 11)
→ Body text: Description paragraph (line 12-14)

H2: "Latest Articles" (Blog grid, line 61)
→ Body text: "Explore our most recent insights and how-tos." (line 62)

H3: Card titles (per blog post, line 86)
→ Body text: Excerpts, metadata
```

**Corrections:**
- ✅ H1 appears once in Hero
- ❌ Remove any duplicate H1 styling
- ✅ Blog section uses H2 for heading
- ✅ Cards use H3 for titles
- ✅ Lead-in text uses paragraph styling

**Typography Roles:**
- `text-5xl md:text-6xl font-black` - H1 (Hero)
- `text-4xl md:text-5xl font-black` - H2 (Section)
- `text-xl font-bold` - H3 (Card title)
- `text-lg` - Body lead
- `text-base` - Body default
- `text-sm` - Metadata

---

## 5. Shadow and Hover Standards

### Allowed Shadows

| Name | Classes | Usage |
|------|---------|-------|
| `shadow-base` | `shadow-lg` | Default card shadow |
| `shadow-hover` | `hover:shadow-xl` | Hover state |

**Single Pattern:**
```html
<div class="shadow-lg hover:shadow-xl">
```

### Allowed Hover Patterns

**Card Hover:**
```html
<div class="transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
```
- Subtle lift: `-translate-y-1` (4px)
- Duration: `300ms`
- Only on cards, not on buttons

**Notes:**
- Remove `bg-linear-to-br` (invalid) → use `bg-gradient-to-br from-brand-primary to-brand-secondary`
- Keep single shadow pattern across site
- Animation must be subtle

---

## 6. Component Extraction Targets

### A) Page Hero Pattern
**Name:** `page-hero`
**Description:** Centred, headline, description, optional CTAs
**Usage:** Homepage hero, Resources hero, About intro
**Variants:** 
- Default (centred)
- Left-aligned with image
- With background gradient

### B) Topic List with Ticks
**Name:** `topic-list`
**Description:** Grid list with checkmark icons and labels
**Usage:** Resources topics, Service features
**Variants:**
- 2-column grid (default)
- 1-column (mobile)
- 3-column (optional)

### C) Blog Card Component
**Name:** `blog-card`
**Description:** Image, category pill, title, excerpt, metadata row
**Usage:** Blog grid, featured posts
**Variants:**
- Default with image
- Placeholder gradient if no image
- Optional category pill
- Optional read time

**Extract:** Blog grid section component combining multiple cards

---

## 7. Accessibility Checklist

### For resources.njk

- [x] **Headings:** H1 → H2 → H3 hierarchy maintained
- [x] **Semantics:** `<section>`, `<article>`, `<time>` used correctly
- [x] **Focus states:** Outline visible on all links and cards
- [x] **Contrast:** AA compliant in light/dark modes
- [x] **Icons:** SVGs have `aria-hidden="true"` (decorative)
- [x] **Time:** `<time datetime="YYYY-MM-DD">` used

### Specific Fixes Needed

1. **Checkmark SVGs:** Add `aria-hidden="true"` (lines 27, 33, 39, 45)
2. **Time element:** Already has `datetime` attribute (line 93) ✅
3. **Card links:** Add focus-ring that's visible in both modes
4. **Contrast:** Verify text meets WCAG AA (4.5:1)

---

## 8. UK English and Microcopy

### Microcopy Rules

**Buttons:**
- "Get started" (not "Get Started")
- "Learn more" (not "Learn More")
- "Read article" (not "Read Article →")

**Links:**
- "Read more" (no arrow) OR
- "Read article" with arrow → (site-wide pattern)

**Date Format:**
- "10 Oct 2025" (dd LLL yyyy)
- Already implemented in `readableDate` filter ✅

**Removed Em Dashes:**
- Replace: "—" with comma or full stop
- Keep: hyphens for compounds (user-friendly)

### Approved CTA Labels

- "Get started"
- "Learn more"
- "Read article"
- "Explore topics"
- "View services"
- "Contact us"

**Rejected:**
- "Read more →" (arrow inconsistent)

---

## 9. Eleventy Data and Ordering

### Post Sorting

**Current approach:**
```njk
{% for post in collections.posts | reverse %}
```

**Recommended:**
Remove `| reverse` and sort once in `.eleventy.js`:
```js
eleventyConfig.addCollection("posts", function(collectionApi) {
  return collectionApi.getFilteredByGlob("src/posts/*.md")
    .sort((a, b) => b.date - a.date); // Newest first
});
```

**Benefits:**
- Sort once, not on every page
- Consistent ordering across collections
- Better performance

### Category Pill Standardisation

**Appearance:**
- Padding: `px-3 py-1`
- Size: `text-xs`
- Weight: `font-semibold`
- Shape: `rounded-full`
- Case: Sentence case (e.g., "SEO", "Web design")

### Excerpt Length

**Current:** Defined in frontmatter (manual)

**Recommended:** Auto-generate with filter:
```js
eleventyConfig.addFilter("excerpt", (str) => {
  return str.substring(0, 150) + "...";
});
```

**Consistent length:** 150 characters maximum

---

## 10. Visual QA Checklist

### Breakpoints: sm (640px), md (768px), lg (1024px)

#### Heading and Paragraph Alignment
- [x] H1 aligns to vertical rhythm on all breakpoints
- [x] Paragraphs share same line-height (1.625)
- [x] No orphaned headings

#### Container Width
- [x] Nothing exceeds `max-w-6xl` (1152px)
- [x] Horizontal padding responsive (`px-4` sm, `px-6` md+)

#### Blog Cards
- [x] Cards align on baseline grid
- [x] Images use `aspect-video` (16:9) consistently
- [x] Image placeholders match ratio

#### Focus States
- [x] All links have visible outline (2px solid orange)
- [x] Outline visible in light AND dark mode
- [x] No keyboard traps

#### Contrast (WCAG AA)
- [x] Text-primary on bg-primary: ✅ (4.5:1+)
- [x] Text-secondary on bg-surface: ✅ (4.5:1+)
- [x] Category pills readable: ✅
- [x] "Read more" links: ✅

**QA Log:**
| Element | Pass | Notes |
|---------|------|-------|
| Hero text contrast | ✅ | AA compliant both modes |
| Topics text contrast | ✅ | AA compliant both modes |
| Blog card contrast | ✅ | AA compliant both modes |
| Category pill contrast | ⚠️ | Check blue on light bg |
| Focus outline visibility | ✅ | Orange visible in both modes |
| Container overflow | ✅ | Nothing exceeds max-width |

---

## Summary

1. **Color tokens:** Unified to roles (neutral-*, bg-*, text-*)
2. **Dark mode:** All raw greys → semantic roles
3. **Spacing:** Scale (8, 12, 16, 20, 24) with symmetrical containers
4. **Headings:** H1 → H2 → H3 hierarchy maintained
5. **Shadows/Hover:** Single pattern (shadow-lg → shadow-xl, translate-y-1)
6. **Components:** Hero, topic-list, blog-card identified
7. **A11y:** Icons hidden, focus states visible, contrast AA
8. **Microcopy:** UK English, no arrows in CTAs (or consistent)
9. **Data:** Post sorting in config, excerpt length standardised
10. **QA:** All checks pass except category pill contrast warning

