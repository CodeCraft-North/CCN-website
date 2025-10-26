# Image Usage Examples

## 🎯 Using the Image Shortcode

The `@11ty/eleventy-img` plugin has been configured with a shortcode for easy image usage.

## Basic Usage

### Blog Posts

```njk
<!-- Simple blog post image -->
{% image "./src/img/blog/article-illustration.jpg", "SEO guide illustration", 900 %}

<!-- Blog image with custom classes -->
{% image "./src/img/blog/example.jpg", "Example description", 800, "w-full rounded-lg shadow-lg" %}
```

### Hero Images

```njk
<!-- Hero section image -->
{% image "./src/img/hero/homepage-hero.jpg", "Welcome to CodeCraft North", 1200, "w-full h-full object-cover" %}
```

### Service Cards

```njk
<!-- Image with specific widths -->
{% image "./src/img/services/essentials.jpg", "Essentials package", [400, 800], "rounded-lg" %}
```

## 📋 Parameters

The shortcode accepts 4 parameters:

```njk
{% image source, alt, widths, class %}
```

1. **source** (required) - Path to image file
   - Example: `"./src/img/blog/example.jpg"`

2. **alt** (required) - Alt text for accessibility
   - Example: `"Description of image"`

3. **widths** (optional) - Array of widths
   - Default: `[400, 800, 1200]`
   - Example: `[300, 600, 900]`
   - Example: `800` (single width)

4. **class** (optional) - CSS classes
   - Example: `"w-full rounded-lg"`

## 🎨 Examples by Use Case

### Blog Post Featured Image

```njk
<div class="aspect-video bg-neutral-200 overflow-hidden rounded-lg">
    {% image "./src/img/blog/seo-guide.jpg", "SEO fundamentals illustrated", 900, "w-full h-full object-cover" %}
</div>
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
  <source type="image/webp" srcset="/img/example-400.webp 400w, /img/example-800.webp 800w">
  <source type="image/jpeg" srcset="/img/example-400.jpeg 400w, /img/example-800.jpeg 800w">
  <img 
    src="/img/example-400.jpeg" 
    alt="Description" 
    loading="lazy" 
    decoding="async"
    class="w-full rounded-lg"
  >
</picture>
```

## 🔧 Notes

- **Optimization happens during build** - original images stay in src/img/
- **Output goes to dist/img/** - never edit these files
- **WebP + JPEG generated automatically** - browser chooses best format
- **Lazy loading enabled** - images load as needed
- **Responsive by default** - srcset for all screen sizes

## 🚫 When NOT to Use the Shortcode

Don't use for small icons or logos that are part of the UI:

```html
<!-- Correct: Direct reference for logos -->
<img src="/img/logos/header_dark_logo.webp" alt="Logo">
```

But do use for large images in content:

```njk
<!-- Correct: Use shortcode for content images -->
{% image "./src/img/blog/content-image.jpg", "Description", 800 %}
```

