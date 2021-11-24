import React from 'react'
import MetadataElement from "./MetadataElement"
import Rights from "./Rights"

const Description = ({ node }) => {
  const { metadata, requiredStatement, rights } = node

  const handleMetadata = () => (
    metadata.map((element, index) => (
      <div className="metadata-group d-flex py-2" key={index}>
        <MetadataElement
          element={element}
          language='en'
        />
      </div>
    )
  ))

  const handleRequiredStatement = () => (
    <div className="metadata-group d-flex py-2">
      <MetadataElement
        element={requiredStatement}
        language='en'
      />
    </div>
  )

  const handleRights = () => (
    <div className="metadata-group d-flex pt-2">
      <Rights rights={rights} />
    </div>
  )

  return (
    <dl className="canopy-metadata px-3 px-sm-5 pt-3">
      {handleMetadata()}
      {handleRequiredStatement()}
      {handleRights()}
    </dl>
  )
}

export default Description
