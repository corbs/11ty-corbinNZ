module.exports = function(eleventyConfig) {

    // Random limit filter exlcuding current page - usage: {% for item in collections.all | randomLimit(3, page.url) %} 
    eleventyConfig.addFilter("randomLimit", (arr, limit, currPage) => {
      // Filters out current page
      const pageArr = arr.filter((page) => page.url !== currPage);
      // Randomizes remaining items
      pageArr.sort(() => {
        return 0.5 - Math.random();
      });
      // Returns array items up to limit
      return pageArr.slice(0, limit);
    });

    // Create collections group featuredWebsite 
    // eleventyConfig.addCollection("featuredWebsite", function (collectionApi) {
    //    return collectionApi.getFilteredByTags("featured", "website");
    //  });

    
    // Input Directory : src Output directory: _site
    return {
        dir: { input: 'src', output: '_site' }
    }; 
};