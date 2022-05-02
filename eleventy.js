module.exports = function (eleventyConfig) {

    // Výchozí výstupní složka: _site

    //Zkopírovat images/ do _site/images
    eleventyConfig.addPassthroughCopy("image");

    // Zkopírovat css/ to _site/css/
    eleventyConfig.addPassthroughCopy("css");
    
    return{

        // možné formáty šablon
        templateFormats: ["njk", "html", "md", "liquid"],
         // Jako šablonovací jazyk zvolíme Nunjucks
         markDownTemplateEngine: "njk",
         HTMLTemplateEngine: "njk",
         dataTemplateEngine: "njk",
    }
}