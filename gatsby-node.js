const entryTemplate = require.resolve(`./src/templates/entry.tsx`);

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  return graphql(`
    {
      allFile {
        nodes {
          name
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    return result.data.allFile.nodes.forEach((entry) => {
      createPage({
        path: entry.name,
        component: entryTemplate,
        context: {
          slug: entry.name,
        },
      });
    });
  });
};
