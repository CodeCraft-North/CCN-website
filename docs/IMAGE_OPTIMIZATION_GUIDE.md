# Image Optimization Guide for Eleventy

## 📁 Current Setup

Images are currently copied as static assets via `addPassthroughCopy` in `.eleventy.js`:

```javascript
eleventyConfig.addPassthroughCopy("src/img");
```

This is fine for small sites, but for better optimization, here are better approaches.

---

## 🎯 Recommended Folder Structure

```
src/
├── img/
│   ├── logos/           # Brand logos
│   ├── blog/            # Blog post images
│   ├── hero/            # Hero section images
│   ├── icons/           # Icon images (if not SVG)
│   └── misc/            # Other images
```

This keeps images organized by purpose.

---

## 🔧 Option 1: Manual Optimization (Current - Simple)

**Best for:** Small sites, low image count

### Workflow:
1. **Optimize images manually** before adding to `src/img/`
2. Use tools like:
   - **Squoosh** (squoosh.app) - Free, browser-based
   - **TinyPNG** (tinypng.com) - Online compression
   - **ImageOptim** (Mac) - Desktop app
3. Add to `src/img/` and reference in HTML

### Usage in templates:
```html
<img src="/img/logo.webp" alt="CodeCraft North Logo">
```

**Pros:** Simple, no build complexity  
**Cons:** Manual, must remember to optimize

---

## 🚀 Option 2: Eleventy Image Plugin (Recommended)

**Best for:** Automated optimization, responsive images

### Installation:
```bash
npm install --save-dev @11ty/eleventy-img
```

### Configuration (.eleventy.js):

```javascript
const Image = require("@11ty/eleventy-img");

module.exports = function(eleventyConfig) {
  // Image optimization
  eleventyConfig.addNunjucksAsyncShortcode("image", async function(src, alt, width, classNames = "") {
    let metadata = await Image(src, {
      widths: [300, 600, 900, 1200],
      formats: ["webp", "jpeg"],
      outputDir: "./dist/img/",
      urlPath: "/img/"
    });

    let imageAttributes = {
      alt,
      loading: "lazy",
      decoding: "async",
      class: classNames,
    };

    return Image.generateHTML(metadata, imageAttributes);
  });

  // ... rest of config
};
```

### Usage in templates:
```njk
{% image "./src/img/blog/post-image.jpg", "Post description", 900, "w-full rounded-lg" %}
```

**Outputs:** Responsive `<picture>` element with srcset and lazy loading

---

## 🎨 Option 3: Shortcode for Blog Post Images (Simplified)

If you prefer a simpler approach, add this to `.eleventy.js`:

```javascript
const Image = require("@11ty/eleventy-img");

async function imageShortcode(src, alt, widths = [300, 600, 900]) {
  let metadata = await Image(src, {
    widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/",
    urlPath: "/img/"
  });

  let imageAttributes = {
    alt,
    loading: "lazy",
    decoding: "async"
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  // ... rest of config
};
```

### Usage:
```njk
{{ image("./src/img/blog/web-design.jpg", "Web design illustration") }}
```

---

## 📋 My Recommendation for Your Site

### **Option 2: Eleventy Image Plugin**

Here's why:
- ✅ Automatic optimization during build
- ✅ Multiple formats (WebP + JPEG fallback)
- ✅ Responsive images with srcset
- ✅ Lazy loading built-in
- ✅ Clean, semantic HTML output

### Setup Steps:

1. **Install plugin:**
```bash
npm install --save-dev @11ty/eleventy-img
```

2. **Update .eleventy.js** (see config above)

3. **Organize your images:**
```
src/img/
├── logos/
│   ├── header-light.webp
│   └── header-dark.webp
├── blog/
│   ├── seo-guide-1.jpg
│   └── speed-matters.jpg
└── hero/
    └── homepage-hero.jpg
```

4. **Reference in templates:**
```html
<!-- In blog posts -->
{% image "./src/img/blog/seo-basics.jpg", "SEO guide illustration", 800 %}

<!-- In layouts -->
{% image "./src/img/logos/header-light.webp", "CodeCraft North Logo" %}
```

---

## 🖼️ Image Size Guidelines

### For Your Site:

| Use Case | Recommended Size | Format |
|----------|-----------------|--------|
| Hero images | 1200x800px | WebP or JPEG |
| Blog post images | 900x600px | WebP or JPEG |
| Logo | 400x200px | PNG or WebP |
| Service cards | 600x400px | WebP or JPEG |
| Profile photo | 400x400px | WebP or JPEG |

### Tools for Optimization:

1. **Squoosh** (squoosh.app)
   - Drag & drop
   - Compare quality/size
   - Export to WebP

2. **TinyPNG** (tinypng.com)
   - Online compression
   - Preserves transparency
   - Free (up to 20 images)

3. **Affinity Photo / Photoshop**
   - Batch export to WebP
   - Full control over compression

---

## 🎯 Best Practices

1. **Use WebP format** when possible (better compression than JPEG)
2. **Keep original files** in `src/img/` (not in Git if large)
3. **Optimize before committing** if not using plugin
4. **Provide descriptive alt text** for all images
5. **Use lazy loading** for below-the-fold images
6. **Include width/height** to prevent CLS (Cumulative Layout Shift)

### Proper image markup:
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

---

## 🚀 Quick Start

1. **Decide approach:**
   - Manual: Optimize images, add to `src/img/`
   - Plugin: Install @11ty/eleventy-img

2. **Add images:**
   - Place in `src/img/` organized by folder

3. **Reference in templates:**
   - Manual: `<img src="/img/logo.webp" alt="Logo">`
   - Plugin: `{% image "path", "alt", 800 %}`

4. **Test in browser:**
   - Check network tab for optimized images
   - Verify lazy loading works
   - Test dark mode (if using logos)

---

## 📝 Next Steps

Would you like me to:
1. ✅ Set up the Eleventy Image plugin
2. ✅ Create a organized folder structure
3. ✅ Add image shortcodes to .eleventy.js
4. ✅ Update templates to use the new image system

Let me know which option you prefer!

