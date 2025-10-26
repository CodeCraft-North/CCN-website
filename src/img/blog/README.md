# Blog Images Directory

Images for blog posts.

## Adding Blog Images

1. Place images here with descriptive filenames:
   - `seo-guide-1.jpg`
   - `website-speed-illustration.jpg`

2. Use in blog posts:

```njk
{% image "./src/img/blog/post-image.jpg", "Description of what the image shows", 900, "w-full rounded-lg" %}
```

## Image Guidelines

- **Size:** 900x600px recommended for blog images
- **Format:** WebP or JPEG
- **Optimization:** Images are automatically optimized during build
- **Alt text:** Always provide descriptive alt text for SEO and accessibility

## Best Practices

- Use descriptive filenames
- Keep file size reasonable (compress before adding)
- Provide good alt text that describes the image
- Use appropriate aspect ratios (16:9 works well)

