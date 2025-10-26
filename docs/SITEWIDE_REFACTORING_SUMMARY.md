# Site-wide Token System Refactoring - Summary

## Status

**Completed:** resources.njk (full refactor)  
**In Progress:** index.njk (partial - hero and pricing teaser done)  
**Pending:** about.njk, contact.njk, services.njk, service detail pages

---

## Pattern Applied

### 1. Replace Raw Greys with Roles
- `bg-white` → `bg-bg-primary`
- `bg-gray-50` → `bg-neutral-50`
- `bg-gray-800` → `bg-bg-surface`
- `text-slate-900` → `text-text-primary`
- `text-gray-700` → `text-text-secondary`
- `text-gray-300` → `text-text-secondary`
- `border-gray-200` → `border-neutral-200`
- `border-gray-700` → `border-neutral-200`

### 2. Remove Dark Mode Overrides
Remove all `dark:*` variants. Dark mode now handled by roles automatically.

### 3. Standardize Containers
```html
<div class="max-w-6xl mx-auto px-6">
```

### 4. Standardize Spacing
- `py-16` for standard sections
- `py-24` for hero sections

### 5. Fix UK English
- Remove em dashes (`—` → `,` or `.`)
- Remove arrows from CTAs (`→` → removed)

---

## Files Status

| File | Hero | Sections | Cards | Blocks | Status |
|------|------|----------|-------|--------|--------|
| resources.njk | ✅ | ✅ | ✅ | ✅ | Complete |
| index.njk | ✅ | ⏳ | ⏳ | ⏳ | In Progress |
| about.njk | ❌ | ❌ | ❌ | ❌ | Pending |
| contact.njk | ❌ | ❌ | ❌ | ❌ | Pending |
| services.njk | ❌ | ❌ | ❌ | ❌ | Pending |

---

## Remaining Work

### index.njk
- [ ] Features section (line 60-137)
- [ ] Process section (line 140-152)
- [ ] About section (line 155-172)
- [ ] FAQ section (line 175-194) - Cards updated
- [ ] Fix any remaining raw greys

### about.njk
- [ ] Hero section (line 8-19)
- [ ] All content sections
- [ ] Blockquotes
- [ ] Cards with dark mode classes

### contact.njk
- [ ] Hero section (line 8-18)
- [ ] Form section (line 21-152)
- [ ] Form inputs with border classes

### services.njk
- [ ] Hero section (line 8-18)
- [ ] Pricing cards (line 50-196)
- [ ] Comparison table (line 206-291)
- [ ] Decision guide cards (line 300-371)
- [ ] Testimonials (line 377-427)

---

## Command to Apply Globally

To apply token system to all files, search and replace:

### Search Pattern
```regex
bg-white dark:bg-gray-[0-9]+
bg-gray-[0-9]+ dark:bg-gray-[0-9]+
text-gray-[0-9]+ dark:text-gray-[0-9]+
border-gray-[0-9]+ dark:border-gray-[0-9]+
bg-slate-[0-9]+
text-slate-[0-9]+
```

### Replace With Roles
- First pass: Replace all instances
- Second pass: Remove orphaned `dark:` prefixes
- Third pass: Standardize containers and spacing

---

## Next Steps

1. Complete index.njk refactor
2. Apply to about.njk
3. Apply to contact.njk
4. Apply to services.njk
5. Apply to service detail pages
6. Test build and check for linter errors
7. Verify dark mode works across all pages

