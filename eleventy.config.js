module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("README.md");
    eleventyConfig.addPassthroughCopy("src/graphics");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("robots.txt");
    eleventyConfig.addPassthroughCopy("rss.xml");

    return {
      dir: {
        input: "src",
        output: "public",
        includes: "_includes",
      },
    };
  };