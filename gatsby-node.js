const fetch = require('node-fetch');
const striptags = require('striptags');
const lunr = require('lunr');
const { GraphQLJSONObject } = require('graphql-type-json');

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
    node.manifestId = node.id
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
            manifestId
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
        node: edge.node,
        id: edge.node.id,
      },
    })
  })
}

exports.createResolvers = ({ cache, createResolvers }) => {
  createResolvers({
    Query: {
      LunrIndex: {
        type: GraphQLJSONObject,
        resolve: (source, args, context, info) => {
          const manifestNodes = context.nodeModel.getAllNodes({
            type: `Manifests`,
          })
          const type = info.schema.getType(`Manifest`)
          return createIndex(manifestNodes, type, cache)
        },
      },
    },
  })
}

const createIndex = async (manifestNodes, type, cache) => {
  const cacheKey = `IndexLunr`
  const cached = await cache.get(cacheKey)
  if (cached) {
    return cached
  }
  const documents = []
  const store = {}
  // iterate over all posts
  for (const node of manifestNodes) {
    const id = node.id
    const label = node.label.en[0]
    documents.push({
      id: id,
      label: label,
    })
    store[id] = {
      label
    }
  }

  const index = lunr(function() {
    this.ref("id")
    this.field("label")
    for (const doc of documents) {
      this.add(doc)
    }
  })

  const json = { index: index.toJSON(), store }
  await cache.set(cacheKey, json)
  return json
}
