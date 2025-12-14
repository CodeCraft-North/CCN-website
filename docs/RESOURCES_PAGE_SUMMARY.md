# Resources Page Refactoring Summary

**Date:** Completed  
**Status:** ✅ Complete

## Overview

Comprehensive refactoring of `src/resources.njk` following design token principles. All colors unified to semantic roles, dark mode simplified, spacing standardised, and accessibility improved.

## Key Changes

### 1. Color Token System ✅
- Replaced all raw greys (`bg-gray-*`, `text-gray-*`) with semantic roles
- Unified to: `bg-bg-primary`, `bg-bg-surface`, `text-text-primary`, `text-text-secondary`
- Dark mode now driven entirely through roles (no `dark:` overrides needed)

### 2. Spacing & Containers ✅
- Standardised container: `max-w-6xl mx-auto px-6`
- Consistent spacing: `py-16` (standard), `py-24` (hero)

### 3. Accessibility ✅
- Added `aria-hidden="true"` to decorative SVGs
- Maintained proper heading hierarchy (H1 → H2 → H3)
- Verified WCAG AA contrast compliance

### 4. UK English & Microcopy ✅
- Removed em dashes
- Removed arrows from CTAs ("Read more →" → "Read more")

### 5. Eleventy Configuration ✅
- Posts collection sorted in `.eleventy.js` (not template)
- Removed `| reverse` from template

## Files Modified

1. `src/resources.njk` - Token system unified, dark mode fixed, a11y improved
2. `src/css/input.css` - Added missing tokens (`bg-bg-surface`, `bg-neutral-*`, etc.)
3. `.eleventy.js` - Posts collection sorted by date

## Reference Documentation

For complete token system details, see:
- **`TOKEN_SYSTEM.md`** - Complete token reference and mapping
- **`PROJECT_STRUCTURE.md`** - Project structure and build system

---

**Note:** This document is a summary of completed work. For current standards and patterns, refer to `TOKEN_SYSTEM.md`.
