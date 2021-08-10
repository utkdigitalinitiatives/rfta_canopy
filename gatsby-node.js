const fetch = require('node-fetch');
const lunr = require('lunr');
const axios = require('axios');
const { GraphQLJSONObject } = require('graphql-type-json');


/*
* Set root IIIF Collection conforming to specification
* at https://iiif.io/api/presentation/3.0/#51-collection
*/
const rootCollection = 'https://digital.lib.utk.edu/assemble/collection/collections/rftatest';

/*
* Map nodes from IIIF Collection and Manifests
* https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/#sourceNodes
*/
exports.sourceNodes = async ({actions, createNodeId, createContentDigest, graphql}) => {
  const { createNode } = actions

  const response = await fetch(rootCollection);
  const json = await response.json()
  const { items = [] } = json;

  const manifests = await chunks(items, async (manifest) => {
      const { id } = manifest;
      return axios.get(id)
        .then(result => result.data)
    }, 25);

  manifests.forEach((node, index) => {
    node.manifestId = node.id
    // node.prettyUrl = node.label.en[0] //  make friendly URL David-Dotson-Jeff-Conyers-Sam-Roberts-2020-09-22
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
      component: require.resolve(`./src/templates/manifest.js`),
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

  const store = {}

  // build index from manifests
  const index = lunr(function() {

    this.ref(`id`)
    this.field(`label`, {boost: 20})
    this.field(`summary`)
    this.pipeline.remove(lunr.stemmer)

    for (const node of manifestNodes) {

      const id = node.id
      const label = node.label.en[0]

      let summary = ''
      if (node.summary.en) {
        summary = node.summary.en[0]
      }

      store[id] = {
        label: label,
        summary: summary
      }

      this.add({
        id: id,
        label: label,
        summary: summary
      })
    }
  })

  const json = { index: index.toJSON(), store }
  await cache.set(cacheKey, json)
  return json
}

/*
* Embedded axios based request handlers
*/
function all(items, fn) {
  const promises = items.map(item => fn(item));
  return Promise.all(promises);
}

function series(items, fn) {
  let result = [];
  return items.reduce((acc, item) => {
    acc = acc.then(() => {
      return fn(item).then(res => result.push(res));
    });
    return acc;
  }, Promise.resolve())
    .then(() => result);
}

function splitToChunks(items, chunkSize = 50) {
  const result = [];
  for (let i = 0; i < items.length; i+= chunkSize) {
    result.push(items.slice(i, i + chunkSize));
  }
  return result;
}

function chunks(items, fn, chunkSize = 50) {
  let result = [];
  const chunks = splitToChunks(items, chunkSize);
  return series(chunks, chunk => {
    return all(chunk, fn)
      .then(res => result = result.concat(res))
  })
    .then(() => result);
}
