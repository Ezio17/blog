const axios = require('axios');

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    const collection = addCollection('Post');

    const {
      data: { data },
    } = await axios.get('https://admin.snaga-solutions.online/api/posts?populate=*');

    for (post of data) {
      collection.addNode({
        id: post.id,
        attributes: post.attributes,
      });
    }
  });

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  });
};
