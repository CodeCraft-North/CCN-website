# Image Guide - Complete Reference

## 🎯 Overview

This site uses the `@11ty/eleventy-img` plugin for automatic image optimization. Images are automatically converted to WebP + JPEG formats, generate responsive srcsets, and include lazy loading.

## 📁 Folder Structure

```
src/img/
├── blog/          # Blog post images
├── logos/         # Brand logos and favicons
└── [root]/        # All other images (hero images, icons, general images)
```

**Important:** Always add images to `src/img/`. The build process copies and optimises them to `dist/img/`.

**Simplified structure:** Only logos and blog images have dedicated folders. All other images go in the root `img/` folder to reduce maintenance overhead.

## 🔧 How It Works

### Configuration

The image shortcode is configured in `.eleventy.js`:

```4:21:.eleventy.js
async function imageShortcode(src, alt, widths = [400, 800, 1200], classNames = "") {
  let metadata = await Image(src, {
    widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/",
    urlPath: "/img/"
  });

  let imageAttributes = {
    alt: alt || "",
    loading: "lazy",
    decoding: "async",
    class: classNames,
  };

  return Image.generateHTML(metadata, imageAttributes);
}
```

### Build Process

1. **Source:** Place images in `src/img/`
2. **Build:** Run `npm run build`
3. **Output:** Optimised images generated in `dist/img/`
4. **Result:** Responsive `<picture>` elements with WebP + JPEG fallback

## 📋 Using the Image Shortcode

### Basic Syntax

```njk
{% image "./src/img/blog/example.jpg", "Description", [400, 800, 1200], "w-full rounded-lg" %}
```

### Parameters

1. **source** (required) - Path to image file
   - Example: `"./src/img/blog/example.jpg"`

2. **alt** (required) - Alt text for accessibility
   - Example: `"Description of image"`

3. **widths** (optional) - Array of widths or single width
   - Default: `[400, 800, 1200]`
   - Example: `[300, 600, 900]`
   - Example: `800` (single width)

4. **class** (optional) - CSS classes
   - Example: `"w-full rounded-lg"`

## 🎨 Usage Examples

### Blog Post Featured Image

```njk
<div class="aspect-video bg-neutral-200 overflow-hidden rounded-lg">
    {% image "./src/img/blog/seo-guide.jpg", "SEO fundamentals illustrated", 900, "w-full h-full object-cover" %}
</div>
```

### Hero Section Image

```njk
{% image "./src/img/hero/homepage-hero.jpg", "Welcome to CodeCraft North", 1200, "w-full h-full object-cover" %}
```

### Service Card Image

```njk
{% image "./src/img/services/essentials.jpg", "Essentials package", [400, 800], "rounded-lg" %}
```

### Small Thumbnail

```njk
{% image "./src/img/blog/thumb.jpg", "Post thumbnail", 400, "w-32 h-32 rounded object-cover" %}
```

### Large Feature Image

```njk
{% image "./src/img/blog/feature.jpg", "Featured illustration", [600, 1200], "w-full rounded-xl" %}
```

## ✨ Generated HTML

The shortcode automatically generates responsive HTML:

```html
<picture>
  <source type="image/webp" srcset="/img/example-400.webp 400w, /img/example-800.webp 800w, /img/example-1200.webp 1200w">
  <source type="image/jpeg" srcset="/img/example-400.jpeg 400w, /img/example-800.jpeg 800w, /img/example-1200.jpeg 1200w">
  <img 
    src="/img/example-400.jpeg" 
    alt="Description" 
    loading="lazy" 
    decoding="async"
    class="w-full rounded-lg"
  >
</picture>
```

## 🚫 When NOT to Use the Shortcode

Don't use for small icons or logos that are part of the UI:

```html
<!-- Correct: Direct reference for logos -->
<img src="/img/logos/header_dark_logo.webp" alt="Code Craft North Logo" width="120" height="40">
```

But do use for large images in content:

```njk
<!-- Correct: Use shortcode for content images -->
{% image "./src/img/blog/content-image.jpg", "Description", 800 %}
```

## 📐 Image Size Guidelines

| Use Case | Recommended Size | Format |
|----------|-----------------|--------|
| Hero images | 1200x800px | WebP or JPEG |
| Blog post images | 900x600px | WebP or JPEG |
| Logo | 400x200px | PNG or WebP |
| Service cards | 600x400px | WebP or JPEG |
| Profile photo | 400x400px | WebP or JPEG |

## 🛠️ Manual Optimization Tools

If you need to optimise images before adding them:

1. **Squoosh** (squoosh.app) - Free, browser-based
2. **TinyPNG** (tinypng.com) - Online compression
3. **ImageOptim** (Mac) - Desktop app

**Note:** The Eleventy Image plugin handles optimisation automatically during build, so manual optimisation is optional.

## ✅ Best Practices

1. **Use WebP format** when possible (better compression than JPEG)
2. **Keep original files** in `src/img/` (not in Git if large)
3. **Provide descriptive alt text** for all images
4. **Lazy loading enabled** automatically for all shortcode images
5. **Include width/height** for direct `<img>` tags to prevent CLS

### Proper Image Markup (Direct Tags)

```html
<img 
  src="/img/example.webp" 
  alt="Descriptive text for screen readers" 
  width="800" 
  height="600" 
  loading="lazy"
  decoding="async"
>
```

## 🔍 Notes

- **Optimization happens during build** - original images stay in `src/img/`
- **Output goes to `dist/img/`** - never edit these files
- **WebP + JPEG generated automatically** - browser chooses best format
- **Lazy loading enabled** - images load when needed
- **Responsive by default** - srcset for all screen sizes
- **`dist/img/` is gitignored** - only source images are version controlled

## 🚀 Quick Start

1. **Add image to source:**
   ```bash
   src/img/blog/my-article-image.jpg
   ```

2. **Use in template:**
   ```njk
   {% image "./src/img/blog/my-article-image.jpg", "Article illustration", 900, "w-full rounded-lg" %}
   ```

3. **Build the site:**
   ```bash
   npm run build
   ```

4. **Result:** Optimised images automatically generated in `dist/img/`

---

**See also:** `PROJECT_STRUCTURE.md` for complete project structure and image workflow.

