import React from 'react'
import getRights from "../../utilities/rightslookup"

const Rights = ({ rightsURI }) => {
  const checkRightsSet = uri => {
    if (uri) return uri

    return "http://rightsstatements.org/vocab/CNE/1.0/"
  }

  const rights = checkRightsSet(rightsURI)

  const getIconUri = () => {
    const rights_identifier = rights.split('/')[4]

    if (rights.includes('creativecommons')) {
      const object_rights = getRights(rights_identifier, 'creative_commons')

      return (
        <>
          <figure className="rights-statement">
            <a href={rights}>
              <img
                src={`https://mirrors.creativecommons.org/presskit/buttons/88x31/svg/${rights_identifier}.svg`}
                alt={rights_identifier}
              />
            </a>
          </figure>
          <p>
            <a href={rights}>{object_rights["title"]}</a>
          </p>
        </>
      )
    }
    else {
      const object_rights = getRights(rights_identifier, 'rights_statements')

      return (
        <>
          <figure className="rights-statement">
            <a href={rights}>
              <img src={`https://rightsstatements.org/files/buttons/${rights_identifier}.dark-white-interior-blue-type.svg`} alt={object_rights["skos:prefLabel"]} />
            </a>
          </figure>
          <p>
            <a href={rights}>{object_rights["skos:prefLabel"]}</a>: {object_rights["definition"]}
          </p>
        </>
      )
    }
  }

  return (
    <>
      <dt>Rights:</dt>
      <dd>{getIconUri()}</dd>
    </>
  )
}

export default Rights
