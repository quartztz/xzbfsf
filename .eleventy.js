module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/css/shared.css");
  eleventyConfig.addPassthroughCopy("assets/css/articles.css");
  eleventyConfig.addPassthroughCopy("assets/css/home.css");
  eleventyConfig.addPassthroughCopy("assets/fonts/alagard.woff2");
  eleventyConfig.addPassthroughCopy("assets/fonts/Archivo-Light.woff2");
  eleventyConfig.addPassthroughCopy("assets/fonts/geneva-9-1.woff2");
}