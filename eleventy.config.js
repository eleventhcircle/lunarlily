const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/graphics");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/rss.xml");
    eleventyConfig.addPassthroughCopy("src/fonts");

    eleventyConfig.addPlugin(pluginRss);

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
        },
    };
};