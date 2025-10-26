# Logos Directory

Brand logos and favicons for the site.

Current logos:
- CCN-logo-transparent-blue.webp - Main logo
- header_dark_logo.webp - Header logo
- CCN_favicon.webp - Favicon
- Various PNG favicons

## Usage

Logos are typically referenced directly (not through the image shortcode):

```html
<img src="/img/logos/CCN-logo-transparent-blue.webp" alt="CodeCraft North Logo">
```

For logos that need optimization, use the image shortcode:

```njk
{% image "./src/img/logos/logo.webp", "CodeCraft North Logo", 300 %}
```

