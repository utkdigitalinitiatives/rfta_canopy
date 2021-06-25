const fetch = require('node-fetch');
const _ = require('lodash');

const NODE_TYPE = 'Manifests';

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  const { createNode } = actions

  const response = await fetch('https://digital.lib.utk.edu/static/iiif/collections/sample.json');
  const json = await response.json()

  const { items = [] } = json;

  const manifests = await Promise.all(items.map(async result => {
    const { id } = result;
    const manifestResponse = await fetch(id);
    return await manifestResponse.json();
  }));

  manifests.forEach((node, index) => {
    createNode({
      ...node,
      id: createNodeId(`${NODE_TYPE}-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: NODE_TYPE,
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    })
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allManifests {
        edges {
          node {
            id
            label {
              en
            }
          }
        }
      }
    }
  `)

  const { allManifests } = result.data

  allManifests.edges.forEach(edge => {
    createPage({
      path: `/${edge.node.id}`,
      component: require.resolve(`./src/templates/object.js`),
      context: {
        node: edge.node
      },
    })
  })
}
