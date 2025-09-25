module.exports = function (eleventyConfig) {
  // Pass-through copy for images
  eleventyConfig.addPassthroughCopy({ "src/images": "images" });

  // Collections: all posts
  eleventyConfig.addCollection("posts", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/posts/**/*.{md,markdown}");
  });

  // Filter posts by lang
  eleventyConfig.addFilter("byLang", (items, lang) => {
    return items.filter(p => (p.data.lang || "uk") === lang);
  });

  // Short filter to prefix paths if needed
  eleventyConfig.addFilter("withPrefix", (path, prefix) => {
    const p = prefix || "/";
    if (!p || p === "/") return path;
    // Avoid double prefix
    return path.startsWith(p) ? path : (p + path.replace(/^\//, ""));
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md"],
    pathPrefix: process.env.PATH_PREFIX || "/"
  };
};
