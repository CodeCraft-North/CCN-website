# Images Directory

Organize your images by purpose for better maintainability.

## 📁 Folder Structure

- **`logos/`** - Brand logos and favicons
- **`blog/`** - Blog post images  
- **`hero/`** - Hero section images
- **`icons/`** - Icon images (if not using SVG)

## 🎯 Adding Images

1. Place optimized images in the appropriate folder
2. Use the `image` shortcode in templates:

```njk
{% image "./src/img/blog/example.jpg", "Description", 800, "w-full rounded-lg" %}
```

Parameters:
1. `src` - Path to image file
2. `alt` - Alt text for accessibility  
3. `widths` - Array of widths [optional, default: 400, 800, 1200]
4. `class` - CSS classes [optional]

## ✅ Benefits

- ✅ Automatic WebP + JPEG fallback
- ✅ Responsive srcset for all screen sizes
- ✅ Lazy loading built-in
- ✅ Optimized during build process

