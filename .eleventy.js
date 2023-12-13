module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("shared.css");
  eleventyConfig.addPassthroughCopy("articles.css");
  eleventyConfig.addPassthroughCopy("home.css");
  eleventyConfig.addPassthroughCopy("alagard.woff2");
  eleventyConfig.addPassthroughCopy("Archivo-Light.woff2");
  eleventyConfig.addPassthroughCopy("geneva-9-1.woff2");
}