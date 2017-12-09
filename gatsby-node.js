const path = require('path');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators;

  const templates = {
    info: path.resolve(`src/templates/info-page.js`),
    home: path.resolve(`src/templates/home-page.js`),
    article: path.resolve(`src/templates/article-page.js`),
  };

  return graphql(`{
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      limit: 1000
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          html
          id
          frontmatter {
            date
            path
            title
            template
          }
        }
      }
    }
  }`)
    .then(result => {
      if (result.errors) {
        return Promise.reject(result.errors);
      }

      result.data.allMarkdownRemark.edges
        .forEach(({ node }) => {
          // console.log('>>> ', node.frontmatter);
          createPage({
            path: node.frontmatter.path,
            component: templates[node.frontmatter.template] || templates.info,
            context: {} // additional data can be passed via context
          });
        });
    });
}