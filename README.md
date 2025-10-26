# CodeCraft North Website

Private repository for the CodeCraft North business website. Built with Eleventy (11ty) and Tailwind CSS.

## 🚀 Tech Stack

- **Eleventy (11ty)** - Static site generator
- **Tailwind CSS v4** - Utility-first CSS framework (PostCSS-based)
- **Nunjucks** - Templating engine
- **Markdown** - Blog posts
- **Dark/Light Mode** - Manual toggle with semantic tokens
- **Luxon** - Date formatting

## 📁 Project Structure

```
├── .eleventy.js           # Eleventy configuration
├── postcss.config.cjs     # PostCSS configuration (Tailwind v4)
├── package.json           # Dependencies and scripts
├── .gitignore            # Git ignore rules
│
├── src/                   # Source files
│   ├── _includes/        # Reusable components
│   │   ├── header.njk    # Site header + navigation
│   │   └── footer.njk    # Site footer
│   ├── _layouts/         # Page layouts
│   │   ├── base.njk      # Base HTML template
│   │   └── blog-post.njk # Blog post template
│   │
│   ├── posts/            # Blog posts (markdown)
│   │   ├── posts.json    # Post defaults
│   │   └── *.md          # Individual blog posts
│   │
│   ├── services/         # Service pages
│   │   ├── essentials-website-subscription.njk
│   │   ├── growth-website-subscription.njk
│   │   ├── static-essentials-site.njk
│   │   └── full-cms-website.njk
│   │
│   ├── css/              # Stylesheets
│   │   └── input.css     # Tailwind input + custom components
│   ├── js/               # JavaScript
│   │   └── script.js     # Theme toggle, mobile menu
│   ├── img/              # Images and assets
│   │
│   ├── index.njk         # Homepage
│   ├── about.njk         # About page
│   ├── services.njk      # Services overview
│   ├── resources.njk     # Blog listing page
│   ├── contact.njk       # Contact page + form
│   ├── privacy-policy.njk
│   ├── cookie-policy.njk
│   └── terms-of-service.njk
│
├── dist/                 # Build output (gitignored)
└── docs/                 # Brand documentation
    ├── Colours.md
    ├── CodeCraft North Branding Guidelines.md
    └── copy.txt
```

## 🔧 Setup on a New Machine

### Prerequisites
- **Node.js** v16 or higher ([download](https://nodejs.org/))
- **npm** (comes with Node.js)
- **Git** ([download](https://git-scm.com/))

### First-Time Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/CCN_website.git
   cd CCN_website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This installs Eleventy, Tailwind CSS, and all other dependencies listed in `package.json`.

3. **Build the CSS (required for first run):**
   ```bash
   npm run css:prod
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

5. **Open in browser:**
   Navigate to `http://localhost:8080`

That's it! The site should be running locally.

## 📝 Available NPM Scripts

```bash
npm run dev          # Start dev server with hot reload (port 8080)
npm run build        # Build site for production (outputs to dist/)
npm run serve        # Build and serve production version
npm run css:build    # Compile Tailwind CSS with watch mode (run in separate terminal)
npm run css:prod     # Compile optimized Tailwind CSS for production
```

**Important:** In Tailwind v4, CSS compilation is separate from HTML build. When developing:
1. Run `npm run css:build` in one terminal (watches for CSS changes)
2. Run `npm run dev` in another terminal (watches for HTML changes)

## 🎨 Brand Colors

Current color palette (defined in `src/css/input.css` using Tailwind v4 `@theme` directive):

```css
--color-brand-primary: #2563eb;     // Primary Blue
--color-brand-secondary: #4f46e5;   // Secondary Indigo
--color-brand-accent: #f97316;      // Accent Orange
```

See `docs/Colours.md` for full color specifications including light/dark mode variants.

**Custom Utilities:**
- `.bg-bg-primary` - Page background (white/slate)
- `.bg-bg-surface` - Card/surface background
- `.bg-bg-section` - Section background
- `.text-text-primary` - Primary text color
- `.text-text-secondary` - Secondary text color
- `.border-neutral-*` - Neutral border colors
- `.bg-neutral-*` - Neutral background colors

See `docs/TOKEN_SYSTEM.md` for the complete semantic token system.

## 🎯 Using Icons

This site uses **Heroicons** (created by the Tailwind CSS team) for all icons. These are reliable, well-tested SVG icons that work perfectly with Tailwind.

### How to Add Icons

1. **Browse icons:** Visit [heroicons.com](https://heroicons.com/)
2. **Copy the SVG:** Click any icon and copy the SVG code
3. **Paste into your template:** Use the outline style (not solid)

### Icon Format

Always use this format for consistency:

```html
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <!-- path data from Heroicons -->
</svg>
```

**Key points:**
- Include `xmlns="http://www.w3.org/2000/svg"` attribute
- Use `stroke="currentColor"` to inherit text color
- Use Tailwind classes for sizing (`w-6 h-6`, `w-8 h-8`, etc.)
- Keep `stroke-width="1.5"` for visual consistency

### Example

```html
<!-- Lightning bolt icon from Heroicons -->
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
</svg>
```

## 🖼️ Using Images

This site uses the `@11ty/eleventy-img` plugin for automatic image optimization.

### Quick Usage

```njk
{% image "./src/img/blog/example.jpg", "Description", 800, "w-full rounded-lg" %}
```

### What It Does

- ✅ Converts to WebP + JPEG automatically
- ✅ Generates responsive srcsets for all screen sizes
- ✅ Lazy loads images by default
- ✅ Optimizes during build

### Folder Structure

- `src/img/blog/` - Blog post images
- `src/img/logos/` - Brand logos
- `src/img/hero/` - Hero section images

See `docs/IMAGE_USAGE_EXAMPLES.md` for complete examples.

## ✍️ Adding New Blog Posts

1. Create a new markdown file in `src/posts/`:
   ```bash
   src/posts/my-new-post.md
   ```

2. Add front matter:
   ```markdown
   ---
   title: "Your Post Title"
   date: 2025-01-20
   category: "Category Name"
   excerpt: "Brief description for the card"
   readTime: "5 min read"
   ---

   Your markdown content here...
   ```

3. The post will automatically:
   - Appear on `/resources/`
   - Get a URL like `/resources/your-post-title/`
   - Use the blog post template

## 🔄 Making Updates

### Regular Workflow

1. **Pull latest changes:**
   ```bash
   git pull origin main
   ```

2. **Make your changes** to files in `src/`

3. **Test locally:**
   ```bash
   npm run dev
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Description of changes"
   git push origin main
   ```

### Quick Content Updates

- **Copy changes:** Edit files in `src/` (`.njk` pages)
- **Blog posts:** Add/edit files in `src/posts/`
- **Styles:** Modify `src/css/input.css` for custom components
- **Images:** Add to `src/img/`

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized version in the `dist/` folder with:
- Minified HTML
- Optimized CSS (unused classes removed)
- Compressed assets

### Deploy to Hosting

The `dist/` folder contains everything needed. Upload to:
- **Netlify** (recommended - auto-deploys from GitHub)
- **Vercel** (auto-detects Eleventy)
- **Cloudflare Pages**
- Any static hosting provider

## 📧 Contact Form Setup

The contact form (`src/contact.njk`) is ready but needs backend integration:

1. Set up Cloudflare Pages Functions (recommended)
2. Create `/functions/api/contact.js` endpoint
3. Form will automatically connect to `/api/contact`

Currently shows a fallback message with email link.

## 🔐 Environment Variables

If you need environment variables (for APIs, etc.):

1. Create `.env` file in root (gitignored)
2. Add variables:
   ```
   API_KEY=your_key_here
   ```
3. Access in Eleventy config if needed

## 📂 Key Files

- **`.eleventy.js`** - Eleventy configuration (collections, filters, directories)
- **`postcss.config.cjs`** - PostCSS/Tailwind v4 configuration
- **`package.json`** - Dependencies and npm scripts
- **`src/_layouts/base.njk`** - HTML wrapper for all pages
- **`src/_includes/header.njk`** - Navigation menu
- **`src/css/input.css`** - Custom CSS components and Tailwind tokens

## 🎯 Site Pages

| Page | URL | File |
|------|-----|------|
| Homepage | `/` | `src/index.njk` |
| About | `/about/` | `src/about.njk` |
| Services | `/services/` | `src/services.njk` |
| Resources (Blog) | `/resources/` | `src/resources.njk` |
| Contact | `/contact/` | `src/contact.njk` |
| Individual Posts | `/resources/post-slug/` | `src/posts/*.md` |
| Legal Pages | `/privacy-policy/` etc. | `src/*.njk` |

## 📈 Performance

Site is optimized for speed:
- ✅ Static HTML generation (no server processing)
- ✅ Tailwind CSS purging (only used classes)
- ✅ Lightweight JavaScript (theme toggle, mobile menu)
- ✅ Fast hosting-ready (CDN-friendly)

## 🌙 Dark Mode

Manual dark mode toggle:
- Toggle button in header
- Preference saved to localStorage
- All pages support dark mode
- Uses semantic token system (roles auto-adjust for light/dark)

## 📞 Support & Contact

**Business Email:** hello@codecraftnorth.co.uk  
**Location:** Wirral, UK

---

**Last Updated:** October 2025
