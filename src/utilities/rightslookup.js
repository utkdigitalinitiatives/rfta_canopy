function getRights(identifier, vocab) {
  const defined_rights = {
    "rights_statements": [
      {
        "InC": {
          "skos:prefLabel": "In Copyright",
          "skos:note": "Unless expressly stated otherwise, the organization that has made this Item available makes no warranties about the Item and cannot guarantee the accuracy of this Rights Statement. You are responsible for your own use. You may find additional information about the copyright status of the Item on the website of the organization that has made the Item available. You may need to obtain other permissions for your intended use. For example, other rights such as publicity, privacy or moral rights may limit how you may use the material."
        }
      }
    ]
  }
  return defined_rights[vocab][0][identifier]
}

module.exports = {
  getRights
};