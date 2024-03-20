const markdownIt = require("markdown-it");
const markdownItAnc = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/static");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  /* dev server config */
  eleventyConfig.setServerOptions({
    watch: ["src/css/", "src/*/*.md/"],
  });
  /* passtrough */
  eleventyConfig.addPassthroughCopy("src/static/");
  eleventyConfig.addPassthroughCopy("src/css/");
  eleventyConfig.addPassthroughCopy("src/robots.txt");
  /* markdown config */
  const md = markdownIt({
    html: true,
  });
  md.use(markdownItAnc, {
    tabIndex: false,
  });
  /* shortcodes */
  eleventyConfig.addShortcode("figure", function (image, caption) {
    return `<figure><img src="${image}" alt="${caption}"><figcaption>${caption}</figcaption></figure>`;
  });
  /* plugins */
  eleventyConfig.setLibrary("md", md);
  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
    },
    templateFormats: ["md", "njk", "js"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
