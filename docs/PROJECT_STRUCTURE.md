# Project Structure & Build System Guide

## 🏗️ Build System Overview

This project uses **Eleventy (11ty)** as a static site generator with the following stack:
- **Eleventy (11ty)** - Static site generator
- **Tailwind CSS v4** - Utility-first CSS framework (PostCSS-based)
- **Nunjucks** - Templating engine
- **@11ty/eleventy-img** - Image optimization plugin
- **Luxon** - Date formatting

## 📁 Complete Directory Structure

```
CCN_website/
│
├── src/                          # SOURCE FILES (where you edit)
│   ├── _includes/                # Reusable components
│   │   ├── header.njk           # Site header + navigation
│   │   └── footer.njk           # Site footer
│   │
│   ├── _layouts/                 # Page layouts
│   │   ├── base.njk             # Base HTML template
│   │   └── blog-post.njk        # Blog post template
│   │
│   ├── posts/                    # Blog posts (markdown)
│   │   ├── posts.json           # Post defaults
│   │   └── *.md                 # Individual blog posts
│   │
│   ├── services/                 # Service pages
│   │   ├── essentials-website-subscription.njk
│   │   ├── growth-website-subscription.njk
│   │   ├── static-essentials-site.njk
│   │   └── full-cms-website.njk
│   │
│   ├── css/                      # Stylesheets
│   │   └── input.css            # Tailwind input + custom components
│   │
│   ├── js/                       # JavaScript
│   │   └── script.js            # Theme toggle, mobile menu
│   │
│   ├── img/                      # ⭐ IMAGES GO HERE (source)
│   │   ├── blog/                # Blog post images
│   │   ├── logos/               # Brand logos and favicons
│   │   ├── *.webp, *.jpg, *.png # All other images (hero, icons, general)
│   │   └── *.svg                # SVG graphics
│   │
│   ├── index.njk                # Homepage
│   ├── about.njk                # About page
│   ├── services.njk             # Services overview
│   ├── resources.njk            # Blog listing page
│   ├── contact.njk              # Contact page
│   ├── privacy-policy.njk
│   ├── cookie-policy.njk
│   ├── terms-of-service.njk
│   ├── robots.txt.njk
│   └── sitemap.njk
│
├── dist/                         # BUILD OUTPUT (generated, gitignored)
│   ├── css/
│   │   └── styles.css           # Compiled Tailwind CSS
│   │
│   ├── js/
│   │   └── script.js            # Copied from src/js/
│   │
│   ├── img/                      # ⭐ OPTIMISED IMAGES GO HERE
│   │   ├── blog/                # Copied from src/img/blog/
│   │   ├── logos/               # Copied from src/img/logos/
│   │   ├── *.webp, *.jpg        # Optimised versions (generated)
│   │   └── *.svg                # Copied as-is
│   │
│   ├── about/
│   │   └── index.html
│   ├── blog/
│   │   └── [post-slug]/
│   │       └── index.html
│   ├── contact/
│   │   └── index.html
│   ├── services/
│   │   ├── index.html
│   │   └── [service-slug]/
│   │       └── index.html
│   ├── resources/
│   │   ├── index.html
│   │   └── [post-slug]/
│   │       └── index.html
│   ├── index.html
│   ├── robots.txt
│   └── sitemap.xml
│
├── docs/                         # Documentation
│   ├── PROJECT_STRUCTURE.md     # This file
│   ├── IMAGE_USAGE_EXAMPLES.md
│   ├── TOKEN_SYSTEM.md
│   └── ...
│
├── .eleventy.js                  # Eleventy configuration
├── postcss.config.cjs           # PostCSS/Tailwind configuration
├── package.json                  # Dependencies and scripts
└── tokens.json                   # Design tokens
```

## 🖼️ Image Handling System

### Where Images Go

#### Source Images (Where You Add Images)
**Location:** `src/img/`

All original images should be placed in `src/img/` with the following structure:
- `src/img/blog/` - Blog post images
- `src/img/hero/` - Hero section images
- `src/img/logos/` - Brand logos and favicons
- `src/img/icons/` - Icon files
- `src/img/` - General images (root level)

#### Build Output (Generated Images)
**Location:** `dist/img/`

When you build the site, images are processed in two ways:

1. **Passthrough Copy** - Images are copied directly from `src/img/` to `dist/img/` maintaining the same folder structure
2. **Optimised Images** - When using the `{% image %}` shortcode, Eleventy generates optimised versions:
   - Converts to WebP + JPEG formats
   - Creates multiple sizes (responsive srcsets)
   - Outputs to `dist/img/` with hashed filenames

### How Images Are Processed

#### Configuration (`.eleventy.js`)

```28:28:.eleventy.js
  eleventyConfig.addPassthroughCopy("src/img");
```

This copies all images from `src/img/` to `dist/img/` during build.

#### Image Shortcode

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

The shortcode:
- Takes source path from `src/img/`
- Generates optimised versions in `dist/img/`
- Creates responsive srcsets
- Adds lazy loading automatically

### Using Images in Templates

#### Method 1: Image Shortcode (Recommended for Content Images)

```njk
{% image "./src/img/blog/example.jpg", "Description", [400, 800, 1200], "w-full rounded-lg" %}
```

**What happens:**
- Original: `src/img/blog/example.jpg`
- Generated: `dist/img/example-400.webp`, `dist/img/example-800.webp`, etc.
- URL in HTML: `/img/example-400.webp`

#### Method 2: Direct Reference (For Logos/Icons)

```html
<img src="/img/header_dark_logo.webp" alt="Code Craft North" width="120" height="40">
```

**What happens:**
- Original: `src/img/header_dark_logo.webp`
- Copied to: `dist/img/header_dark_logo.webp`
- URL in HTML: `/img/header_dark_logo.webp`

### Image Workflow

1. **Add Image to Source**
   - Place image in appropriate folder: `src/img/blog/`, `src/img/hero/`, etc.
   - Use descriptive filenames: `seo-guide-illustration.jpg`

2. **Use in Template**
   - For content images: Use `{% image %}` shortcode
   - For logos/icons: Use direct `<img>` tag with `/img/` path

3. **Build Process**
   - Run `npm run build` or `npm run dev`
   - Eleventy copies images from `src/img/` to `dist/img/`
   - Shortcode images are optimised and generated in `dist/img/`

4. **Output**
   - All images accessible at `/img/` in the built site
   - Optimised images have responsive srcsets
   - Original source images remain in `src/img/`

## 🔄 Build Process Flow

### Source → Build → Output

```
┌─────────────────┐
│   src/          │  ← You edit here
│   ├── img/      │
│   ├── css/      │
│   ├── js/       │
│   └── *.njk     │
└────────┬────────┘
         │
         │ npm run build
         │
         ▼
┌─────────────────┐
│  Eleventy       │
│  Processing     │
│  ├── Templates  │
│  ├── Images     │
│  └── CSS        │
└────────┬────────┘
         │
         ▼
┌─────────────────┐
│   dist/         │  ← Generated output
│   ├── img/      │  ← Optimised images
│   ├── css/      │  ← Compiled CSS
│   ├── js/       │  ← Copied JS
│   └── *.html    │  ← Generated HTML
└─────────────────┘
```

### Build Commands

- `npm run build` - Build site for production
- `npm run dev` - Build and serve with hot reload
- `npm run css:build` - Compile CSS with watch mode
- `npm run css:prod` - Compile optimised CSS

## 📍 File Paths Reference

### Source Files
- **Pages:** `src/*.njk`
- **Blog Posts:** `src/posts/*.md`
- **Service Pages:** `src/services/*.njk`
- **Images:** `src/img/**/*`
- **CSS:** `src/css/input.css`
- **JavaScript:** `src/js/script.js`
- **Layouts:** `src/_layouts/*.njk`
- **Includes:** `src/_includes/*.njk`

### Output Files
- **HTML:** `dist/**/index.html`
- **Images:** `dist/img/**/*`
- **CSS:** `dist/css/styles.css`
- **JavaScript:** `dist/js/script.js`
- **Sitemap:** `dist/sitemap.xml`
- **Robots:** `dist/robots.txt`

### URL Paths (in Browser)
- **Homepage:** `/`
- **About:** `/about/`
- **Services:** `/services/`
- **Blog Listing:** `/resources/`
- **Blog Post:** `/resources/[post-slug]/`
- **Contact:** `/contact/`
- **Images:** `/img/[filename]`
- **CSS:** `/css/styles.css`
- **JS:** `/js/script.js`

## 🎯 Key Configuration Files

### `.eleventy.js`
- Defines input/output directories
- Configures image shortcode
- Sets up passthrough copies
- Defines collections (blog posts)
- Adds filters and shortcodes

### `postcss.config.cjs`
- Configures Tailwind CSS v4
- Sets up PostCSS processing

### `package.json`
- Lists all dependencies
- Defines build scripts
- Project metadata

## ⚠️ Important Notes

1. **Never edit files in `dist/`** - They are generated and will be overwritten
2. **Always add images to `src/img/`** - Not directly to `dist/img/`
3. **Use the image shortcode for content images** - Gets automatic optimisation
4. **Direct references work for logos/icons** - But they won't be optimised
5. **Build before deploying** - `dist/` folder is what gets deployed
6. **`dist/` is gitignored** - Only source files are version controlled

## 🔍 Finding Files

### Where to add a new blog post image?
→ `src/img/blog/your-image.jpg`

### Where to add a hero image?
→ `src/img/your-hero.jpg` (root folder)

### Where to add a logo?
→ `src/img/logos/your-logo.webp`

### Where to add other images?
→ `src/img/your-image.jpg` (root folder - no subfolder needed)

### Where does the built CSS go?
→ `dist/css/styles.css` (compiled from `src/css/input.css`)

### Where do generated HTML files go?
→ `dist/[page-slug]/index.html`

---

**Last Updated:** January 2025

