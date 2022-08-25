module.exports = function(eleventyConfig) {

  // Limit filter - usage: {% for item in collections.all | limit(3) %}
    eleventyConfig.addFilter("limit", function (arr, limit) {
      return arr.slice(0, limit);
    });

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
    eleventyConfig.addCollection("featuredWebsite", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "website");
      });

    // Create collections group featuredBebsite 
    eleventyConfig.addCollection("featuredBranding", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "branding");
      });

    // Create collections group featuredLayout 
    eleventyConfig.addCollection("featuredLayout", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "layout");
      });

    // Create collections group featuredAdvertising
    eleventyConfig.addCollection("featuredAdvertising", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "advertising");
      });

    // Create collections group featuredVideo
    eleventyConfig.addCollection("featuredVideo", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "video");
      });

    // Create collections group featuredMotionGraphics
    eleventyConfig.addCollection("featuredMotionGraphics", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "motion graphics");
      });

    // Create collections group featuredPackaging
    eleventyConfig.addCollection("featuredPackaging", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "packaging");
      });

    // Create collections group featuredIllustration
    eleventyConfig.addCollection("featuredIllustration", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "illustration");
      });

    // Create collections group featuredEvents
    eleventyConfig.addCollection("featuredEvents", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "events");
      });

    // Create collections group featuredArtwork
    eleventyConfig.addCollection("featuredArtwork", function (collectionApi) {
        return collectionApi.getFilteredByTags("featured", "artwork");
      });


    // Input Directory : src Output directory: _site
    return {
        dir: { input: 'src', output: '_site' }
    }; 
};