const fetch = require('node-fetch');
const lunr = require('lunr');
const { GraphQLJSONObject } = require('graphql-type-json');


/*
* Set root IIIF Collection conforming to specification
* at https://iiif.io/api/presentation/3.0/#51-collection
*/
const rootCollection = 'https://digital.lib.utk.edu/static/iiif/collections/sample.json';

/*
* Map nodes from IIIF Collection and Manifests
* https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes
*/
exports.sourceNodes = async ({actions, createNodeId, createContentDigest, graphql}) => {
  const { createNode } = actions

  const response = await fetch(rootCollection);
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
      id: createNodeId(`Manifests-${node.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'Manifests',
        content: JSON.stringify(node),
        contentDigest: createContentDigest(node)
      }
    })
  })
}

/*
* Create pages for each manifest with an associated node
* https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createPages
*/
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


/*
* Add custom lunr.js resolver of created index
* https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#createResolvers
*/
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

/*
* Build lunr.js index to be resolved
* https://lunrjs.com/docs/lunr.html
*/
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
