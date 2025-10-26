# Resources Page Refactoring - Complete ✅

## Overview

Completed comprehensive refactoring of `src/resources.njk` following design token principles. All 10 task areas addressed with full documentation.

---

## Deliverables

### 1. Token System Documentation ✅
**File:** `docs/TOKEN_SYSTEM.md`

**Contents:**
- Complete list of allowed color roles
- Before → After mapping table for all classes
- Dark mode token replacements
- Spacing and container standards
- Heading hierarchy structure
- Shadow and hover patterns
- Component extraction targets
- Accessibility checklist
- UK English and microcopy rules
- Eleventy data ordering recommendations
- Visual QA checklist

### 2. One-Page Mapping Table ✅

**Allowed Roles:**
| Category | Role | Usage |
|----------|------|-------|
| Brand | `brand-primary` | Primary action colour |
| Brand | `brand-secondary` | Gradient/secondary actions |
| Brand | `brand-accent` | Accent highlights |
| Brand | `brand-light` | Subtle backgrounds |
| Neutral | `neutral-50` | Light backgrounds |
| Neutral | `neutral-200` | Borders, subtle backgrounds |
| Neutral | `neutral-700` | Muted text backgrounds |
| Text | `text-primary` | Main text (dark/light) |
| Text | `text-secondary` | Secondary text |
| Background | `bg-primary` | Page background |
| Background | `bg-surface` | Card surfaces |
| Border | `border-muted` | Subtle borders |

### 3. Before → After Class Mappings ✅

| Before | After | File |
|--------|-------|------|
| `bg-white` | `bg-bg-primary` | resources.njk |
| `bg-gray-50` | `bg-neutral-50` | resources.njk |
| `bg-gray-800` | `bg-bg-surface` | resources.njk |
| `text-slate-900` | `text-text-primary` | resources.njk |
| `text-gray-700` | `text-text-secondary` | resources.njk |
| `border-gray-200` | `border-neutral-200` | resources.njk |
| `bg-gray-200` | `bg-neutral-200` | resources.njk |
| `bg-gray-700` | `bg-neutral-700` | resources.njk |
| `bg-blue-50` | `bg-brand-light` | resources.njk |
| `bg-linear-to-br` | `bg-gradient-to-br from-brand-primary to-brand-secondary` | resources.njk |
| `| reverse` | Removed (sort in .eleventy.js) | resources.njk |
| `Read more →` | `Read more` | resources.njk |

### 4. Dark Mode Elements Checklist ✅

| Element | Old Dark Mode | New Dark Mode | Status |
|---------|---------------|---------------|--------|
| Hero background | `dark:bg-gray-900` | Removed | ✅ |
| Hero text | `dark:text-white` | Removed | ✅ |
| Hero paragraph | `dark:text-gray-300` | Removed | ✅ |
| Topics section | `dark:bg-gray-800` | Removed | ✅ |
| Topics text | `dark:text-gray-300` | Removed | ✅ |
| Blog card | `dark:bg-gray-800` | Removed | ✅ |
| Blog card border | `dark:border-gray-700` | Removed | ✅ |
| Blog image bg | `dark:bg-gray-700` | Removed | ✅ |

**Result:** Dark mode now driven entirely through roles. No raw greys.

### 5. Spacing Scale and Containers ✅

**Spacing Scale:**
```css
8  (py-8, px-2)   - Tight
12 (py-12, px-3)  - Small sections
16 (py-16, px-4)  - Standard sections
20 (py-20, px-5)  - Large sections
24 (py-24, px-6)  - Hero sections
```

**Container Pattern:**
```html
<div class="max-w-6xl mx-auto px-6">
```

**Section Padding:**
- Hero: `py-24` (large hero)
- Topics: `py-16` (standard)
- Blog Grid: `py-16` (standard, was `section-padding`)

**Result:** Consistent vertical rhythm across all sections.

### 6. Heading Structure Outline ✅

```
H1: "Practical insights for growing your business online"
  └─ Paragraph: Description with body role

H2: "Latest Articles"
  └─ Paragraph: "Explore our most recent insights and how-tos."

  └─ H3: Card titles (one per blog post)
      └─ Paragraph: Excerpt
      └─ Metadata: Date + "Read more"
```

**Typography Hierarchy:**
- H1: `text-5xl md:text-6xl font-black`
- H2: `text-4xl md:text-5xl font-black`
- H3: `text-xl font-bold`
- Body: `text-lg` (lead) or `text-base` (default)

### 7. Shadows and Hover Patterns ✅

**Allowed Shadows:**
- Base: `shadow-lg`
- Hover: `hover:shadow-xl`

**Hover Pattern (cards only):**
```html
<div class="shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
```

**Invalid Utilities Removed:**
- ❌ `bg-linear-to-br` → `bg-gradient-to-br from-brand-primary to-brand-secondary`

### 8. Component Extraction Targets ✅

**A) Page Hero Pattern**
- Name: `page-hero`
- Usage: Hero sections with headline, description, optional CTAs
- A11y: One H1, semantic order, AA contrast

**B) Topic List with Ticks**
- Name: `topic-list`
- Usage: Feature lists with checkmark icons
- A11y: Icons hidden, keyboard navigable

**C) Blog Card Component**
- Name: `blog-card`
- Usage: Article listings with image, category, title, excerpt
- A11y: Images have alt, time has datetime, focus visible

### 9. Accessibility Checklist ✅

- [x] Headings: H1 → H2 → H3 hierarchy
- [x] Semantics: `<section>`, `<article>`, `<time>` used
- [x] Focus states: Orange 2px outline visible
- [x] Contrast: AA compliant (4.5:1) in both modes
- [x] Icons: `aria-hidden="true"` on decorative SVGs
- [x] Time: Valid `datetime` attribute

**Specific Fixes:**
- Added `aria-hidden="true"` to all 4 checkmark SVGs
- Verified focus-ring visibility in light and dark modes

### 10. UK English and Microcopy ✅

**Rules Applied:**
- ✅ Removed em dash: "brochure — it" → "brochure, it"
- ✅ Removed arrow: "Read more →" → "Read more"
- ✅ Date format: "10 Oct 2025" (via filter)

**Approved CTA Labels:**
- "Get started"
- "Learn more"
- "Read more"
- "Read article"
- "Explore topics"
- "View services"
- "Contact us"

### 11. Eleventy Data and Ordering ✅

**Changes Made:**
1. Updated `.eleventy.js` to sort posts in config (not template)
2. Removed `| reverse` from `resources.njk`

**Benefits:**
- Sort once, not on every page
- Consistent ordering across collections
- Better performance

**Code:**
```js
eleventyConfig.addCollection("posts", function(collectionApi) {
  return collectionApi.getFilteredByGlob("src/posts/*.md")
    .sort((a, b) => b.date - a.date); // Newest first
});
```

### 12. Visual QA Checklist ✅

**Breakpoints:** sm (640px), md (768px), lg (1024px)

- [x] Headings align to vertical rhythm
- [x] No elements exceed container width
- [x] Blog cards align on baseline grid
- [x] Images use consistent aspect ratios
- [x] Focus states visible in both modes
- [x] Contrast passes AA (4.5:1)
- [x] No keyboard traps

**QA Log:**
- Hero text: ✅
- Topics text: ✅
- Blog cards: ✅
- Category pills: ✅
- Focus outlines: ✅
- Container overflow: ✅

---

## Files Modified

### 1. src/resources.njk
**Changes:**
- Unified all colors to roles (removed raw greys)
- Fixed dark mode to use roles only
- Standardised spacing (py-16, py-24)
- Added `aria-hidden="true"` to icons
- Removed em dash and arrow from microcopy
- Removed `| reverse` (now sorted in config)
- Fixed invalid gradient utility

### 2. src/css/input.css
**Changes:**
- Added `bg-bg-surface` with dark mode
- Added `bg-neutral-50` with dark mode
- Added `bg-neutral-200` with dark mode
- Added `bg-neutral-700` with dark mode
- Added `bg-brand-light` with dark mode
- Added `border-neutral-200` with dark mode
- Added `border-muted` as synonym

### 3. .eleventy.js
**Changes:**
- Posts collection now sorted by date (newest first)
- Sorting done once in config, not per-template

---

## Principles Applied

1. ✅ **Roles as single source of truth** - No raw greys, all semantic roles
2. ✅ **Dark mode as token swap** - Same roles, different values
3. ✅ **Three global patterns** - Container, rhythm, card+hover
4. ✅ **Limited variants** - Two card styles max
5. ✅ **Normalisation pass** - All colors mapped to roles
6. ✅ **Performance discipline** - Removed duplicate utilities
7. ✅ **Content rules** - UK English, no em dashes, consistent CTAs

---

## Next Steps

1. **Apply patterns to other pages** (about.njk, services pages)
2. **Extract blog-card as reusable component** (if needed)
3. **Consider excerpt filter** for consistent truncation
4. **Update test.njk** with refactored patterns

---

## Validation

- ✅ No linter errors
- ✅ All tokens defined in CSS
- ✅ Dark mode works through roles
- ✅ Accessibility AA compliant
- ✅ UK English throughout
- ✅ Consistent spacing applied
- ✅ Heading hierarchy correct

**Status:** Complete and ready for production.

