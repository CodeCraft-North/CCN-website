# CodeCraft North Website

Private repository for the CodeCraft North business website. Built with Eleventy (11ty) and Tailwind CSS.

## 🚀 Tech Stack

- **Eleventy (11ty)** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **Nunjucks** - Templating engine
- **Markdown** - Blog posts
- **Dark/Light Mode** - Automatic theme switching
- **Luxon** - Date formatting

## 📁 Project Structure

```
├── .eleventy.js           # Eleventy configuration
├── tailwind.config.js     # Tailwind configuration
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

3. **Build the CSS:**
   ```bash
   npm run css:build
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
npm run css:build    # Build Tailwind CSS with watch mode
npm run css:prod     # Build optimized CSS for production
```

## 🎨 Brand Colors

Current color palette (defined in `tailwind.config.js`):

```javascript
colors: {
  'brand-primary': '#2563eb',     // Primary Blue
  'brand-secondary': '#4f46e5',   // Secondary Indigo
  'brand-accent': '#f97316',      // Accent Orange
}
```

See `docs/Colours.md` for full color specifications including light/dark mode variants.

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
   - Get a URL like `/blog/your-post-title/`
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
- **`tailwind.config.js`** - Tailwind theme customization
- **`package.json`** - Dependencies and npm scripts
- **`src/_layouts/base.njk`** - HTML wrapper for all pages
- **`src/_includes/header.njk`** - Navigation menu
- **`src/css/input.css`** - Custom CSS components and Tailwind

## 🎯 Site Pages

| Page | URL | File |
|------|-----|------|
| Homepage | `/` | `src/index.njk` |
| About | `/about/` | `src/about.njk` |
| Services | `/services/` | `src/services.njk` |
| Resources (Blog) | `/resources/` | `src/resources.njk` |
| Contact | `/contact/` | `src/contact.njk` |
| Individual Posts | `/blog/post-slug/` | `src/posts/*.md` |
| Legal Pages | `/privacy-policy/` etc. | `src/*.njk` |

## 📈 Performance

Site is optimized for speed:
- ✅ Static HTML generation (no server processing)
- ✅ Tailwind CSS purging (only used classes)
- ✅ Lightweight JavaScript (theme toggle, mobile menu)
- ✅ Fast hosting-ready (CDN-friendly)

## 🌙 Dark Mode

Automatic dark mode based on system preferences:
- Toggle button in header
- Preference saved to localStorage
- All pages support dark mode
- Uses Tailwind's `dark:` variants

## 📞 Support & Contact

**Business Email:** hello@codecraftnorth.co.uk  
**Location:** Wirral, UK

---

**Last Updated:** October 2025
