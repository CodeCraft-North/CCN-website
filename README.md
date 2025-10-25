# Code Craft North - Eleventy + Tailwind CSS

A modern, fast, and SEO-optimized website built with Eleventy and Tailwind CSS.

## 🚀 Features

- **Static Site Generation** with Eleventy
- **Tailwind CSS** for utility-first styling
- **Dark/Light Mode** toggle
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, structured data ready
- **Fast Loading** - Optimized for performance
- **Blog Ready** - Easy to add blog posts

## 📁 Project Structure

```
src/
├── _includes/          # Reusable templates
│   ├── header.njk     # Site header
│   └── footer.njk     # Site footer
├── _layouts/          # Page layouts
│   └── base.njk       # Base layout template
├── css/               # Stylesheets
│   └── input.css      # Tailwind input file
├── js/                # JavaScript files
│   └── script.js      # Main JavaScript
├── img/               # Images and assets
├── posts/             # Blog posts (future)
└── index.njk          # Homepage
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build CSS:**
   ```bash
   npm run css:build
   ```

3. **Start development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:8080`

## 📝 Available Scripts

- `npm run dev` - Start development server with live reload
- `npm run build` - Build the site for production
- `npm run serve` - Build and serve the site
- `npm run css:build` - Build CSS with watch mode
- `npm run css:prod` - Build optimized CSS for production

## 🎨 Customization

### Colors
Edit `tailwind.config.js` to modify the color palette:

```javascript
colors: {
  'brand-primary': '#4FC4CF',    // Teal
  'brand-secondary': '#994FF3',  // Purple
  'brand-tertiary': '#FF8A65',   // Orange
  // ... more colors
}
```

### Content
- **Homepage:** Edit `src/index.njk`
- **Header/Footer:** Edit files in `src/_includes/`
- **Layout:** Edit `src/_layouts/base.njk`

### Styling
- **Components:** Add to `src/css/input.css` in the `@layer components` section
- **Utilities:** Add to `src/css/input.css` in the `@layer utilities` section

## 📝 Adding Blog Posts

1. Create a new file in `src/posts/` with `.md` extension
2. Add front matter:

```markdown
---
title: "Your Blog Post Title"
date: 2025-01-XX
description: "Post description for SEO"
---

Your blog post content here...
```

## 🚀 Deployment

### Netlify (Recommended)
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Deploy!

### Vercel
1. Connect your repository to Vercel
2. Vercel will auto-detect Eleventy
3. Deploy!

### GitHub Pages
1. Build the site: `npm run build`
2. Push the `dist` folder to your repository
3. Enable GitHub Pages

## 🔧 Configuration

### Eleventy Config
Edit `.eleventy.js` to customize:
- Input/output directories
- Template formats
- Collections
- Filters

### Tailwind Config
Edit `tailwind.config.js` to customize:
- Colors
- Fonts
- Spacing
- Breakpoints
- Plugins

## 📈 Performance

This site is optimized for performance:
- **Static generation** - No server-side processing
- **Optimized CSS** - Only used classes included
- **Minified assets** - Production builds are optimized
- **Fast loading** - Typically <1 second load times

## 🎯 SEO Features

- Semantic HTML structure
- Meta tags and Open Graph
- Twitter Card support
- Structured data ready
- Fast loading (Core Web Vitals optimized)
- Mobile-first responsive design

## 📞 Support

For questions or support, contact:
- Email: hello@codecraftnorth.co.uk
- Website: https://codecraftnorth.co.uk

## 📄 License

MIT License - feel free to use this as a starting point for your own projects!
