# Image Optimization Setup - Complete ✅

## What's Been Done

### 1. Plugin Installed ✅
- Installed `@11ty/eleventy-img` package

### 2. Configuration Updated ✅
- Added image shortcode to `.eleventy.js`
- Configured to generate WebP + JPEG formats
- Set up responsive widths (400, 800, 1200px by default)
- Enabled lazy loading and async decoding

### 3. Folder Structure Created ✅
```
src/img/
├── logos/          # Brand logos (existing files copied here)
├── blog/           # Blog post images
├── hero/           # Hero section images  
└── icons/          # Icon images
```

### 4. Documentation Added ✅
- `docs/IMAGE_OPTIMIZATION_GUIDE.md` - Complete setup guide
- `docs/IMAGE_USAGE_EXAMPLES.md` - Usage examples
- `src/img/README.md` - Main images directory docs
- Each subfolder has its own README
- Updated main README.md with image section

### 5. Git Ignore Updated ✅
- Added `/dist/img/` to .gitignore (optimized images)

---

## How to Use

### Basic Usage in Templates

```njk
{% image "./src/img/blog/example.jpg", "Description", 800, "w-full rounded-lg" %}
```

### Parameters

1. **Source** - Path to image in src/img/
2. **Alt text** - Description for accessibility
3. **Widths** (optional) - Default: [400, 800, 1200]
4. **CSS classes** (optional) - Any Tailwind classes

### Example Output

The shortcode generates this HTML:

```html
<picture>
  <source type="image/webp" 
    srcset="/img/example-400.webp 400w, /img/example-800.webp 800w, /img/example-1200.webp 1200w">
  <img 
    src="/img/example-400.jpeg" 
    alt="Description"
    loading="lazy" 
    decoding="async"
    class="w-full rounded-lg"
  >
</picture>
```

---

## Adding Images

### 1. Place Image in Appropriate Folder

```bash
# Blog post image
src/img/blog/seo-guide-hero.jpg

# Hero section image
src/img/hero/homepage-hero.jpg
```

### 2. Reference in Template

```njk
{% image "./src/img/blog/seo-guide-hero.jpg", "SEO guide hero image", 900 %}
```

### 3. Build the Site

```bash
npm run build
```

Images will be automatically optimized and placed in `dist/img/`

---

## Benefits

✅ **Automatic optimization** - Images compressed during build  
✅ **WebP + JPEG fallback** - Best format available  
✅ **Responsive images** - srcset for all screen sizes  
✅ **Lazy loading** - Images load when needed  
✅ **Better performance** - Smaller file sizes  
✅ **SEO friendly** - Proper alt text required  

---

## Next Steps

1. Add your images to `src/img/` organized by purpose
2. Use the shortcode in your templates
3. Build the site to see optimized output
4. Test in browser to verify lazy loading works

See `docs/IMAGE_USAGE_EXAMPLES.md` for more examples!

