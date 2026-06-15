const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy("src/graphics");
    eleventyConfig.addPassthroughCopy("src/styles");
    eleventyConfig.addPassthroughCopy("src/scripts");
    eleventyConfig.addPassthroughCopy("src/robots.txt");
    eleventyConfig.addPassthroughCopy("src/fonts");
    eleventyConfig.addPassthroughCopy("src/journal/images");

    eleventyConfig.addPlugin(pluginRss);

    eleventyConfig.addCollection("tagslist", function(collectionApi) {
        let tagslist = new Set();
        let journalposts = collectionApi.getFilteredByTag("journals");
        journalposts.forEach(j => {
            let jtags = j.data.journaltags;
            jtags.forEach(t => tagslist.add(t));
        });
        return Array.from(tagslist);
    });

    return {
        dir: {
            input: "src",
            output: "public",
            includes: "_includes",
        },
    };
};