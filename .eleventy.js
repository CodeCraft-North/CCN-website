const { DateTime } = require("luxon");
const Image = require("@11ty/eleventy-img");

// Image shortcode for optimized images
async function imageShortcode(src, alt, widths = [400, 800, 1200], classNames = "") {
  let metadata = await Image(src, {
    widths,
    formats: ["webp", "jpeg"],
    outputDir: "./dist/img/",
    urlPath: "/img/"
  });

  // Get dimensions from the first format's first width for aspect ratio
  const firstFormat = Object.keys(metadata)[0];
  const firstWidth = metadata[firstFormat][0];
  
  let imageAttributes = {
    alt: alt || "",
    loading: "lazy",
    decoding: "async",
    class: classNames,
    width: firstWidth.width,
    height: firstWidth.height,
  };

  return Image.generateHTML(metadata, imageAttributes);
}

module.exports = function(eleventyConfig) {
  // Ignore README files (they contain example code that shouldn't be processed)
  eleventyConfig.ignores.add("**/README.md");
  
  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/img");
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/js");
  eleventyConfig.addPassthroughCopy("src/favicon.ico");

  // Add filters
  eleventyConfig.addFilter("readableDate", dateObj => {
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat("dd LLL yyyy");
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    if (!dateObj) {
      return DateTime.now().toFormat('yyyy-LL-dd');
    }
    return DateTime.fromJSDate(dateObj, {zone: 'utc'}).toFormat('yyyy-LL-dd');
  });

  // Sitemap filters for automatic priority and change frequency
  // Priority: 0.0-1.0 indicating relative importance on your site
  // Note: Search engines largely ignore priority but it helps with clarity
  eleventyConfig.addFilter("sitemapPriority", (url) => {
    if (url === "/") return "1.0"; // Homepage - highest priority
    if (url.startsWith("/services/")) return "0.8"; // Key landing pages
    if (url.match(/^\/(about|contact|locations)\//)) return "0.7"; // Important static pages
    if (url.startsWith("/resources/")) {
      return url === "/resources/" ? "0.7" : "0.6"; // Blog index: 0.7, posts: 0.6
    }
    if (url.match(/\/(privacy-policy|cookie-policy|terms-of-service)\//)) return "0.2"; // Legal pages - low priority
    return "0.7"; // Default for other pages
  });

  // Changefreq: hint about how often content changes (does not restrict updates)
  // When you update a page, lastmod reflects the change regardless of changefreq
  eleventyConfig.addFilter("sitemapChangefreq", (url) => {
    if (url === "/") return "weekly"; // Homepage may have dynamic content
    if (url.startsWith("/services/")) return "weekly"; // Service pages may be updated
    if (url.startsWith("/resources/")) return "weekly"; // Blog content updates regularly
    if (url.match(/\/(privacy-policy|cookie-policy|terms-of-service)\//)) return "yearly"; // Legal pages rarely change
    return "monthly"; // Default for static pages (about, contact, locations)
  });

  // Add shortcodes
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);

  // Add collections
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md")
      .sort((a, b) => b.date - a.date); // Newest first
  });

  // Sitemap collection - all pages except excluded ones
  eleventyConfig.addCollection("sitemap", function(collectionApi) {
    const excludedUrls = ["/404.html", "/robots.txt", "/thank-you/", "/sitemap.xml"];
    return collectionApi.getAll()
      .filter(page => {
        // Exclude pages that opt out
        if (page.data.eleventyExcludeFromCollections) return false;
        // Exclude specific URLs
        if (excludedUrls.includes(page.url)) return false;
        // Exclude layout and include files
        if (page.url && page.url.startsWith("/_")) return false;
        // Only include pages with valid URLs
        return page.url;
      })
      .sort((a, b) => {
        // Sort by URL for consistent output
        return a.url.localeCompare(b.url);
      });
  });

  // Set custom directories
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      layouts: "_layouts"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk"
  };
};
