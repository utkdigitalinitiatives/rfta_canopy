exports.createPages = ({ actions }) => {
  const { createPage } = actions
  const collection = [
    {
      label: "thing",
      id: "this",
    },
    {
      label: "thing2",
      id: "that",
    },
  ]
  collection.forEach(manifest => {
    createPage({
      path: `/${manifest.label}`,
      component: require.resolve(`./src/templates/object.js`),
      context: { manifest },
    })
  })
}
