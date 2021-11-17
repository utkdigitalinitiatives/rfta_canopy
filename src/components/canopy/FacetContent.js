import React from 'react';
import FacetContentItem from "./FacetContentItem"
import { countBy } from 'lodash'
import { cleanString } from "../../utilities/string"

const FacetContent = ({ data, float, label }) => {

  const renderContentItems = (data, label) => {
    let results = []
    for (const edges of data.allManifests.edges) {
      for (const metadata of edges.node.metadata) {
        if (metadata.label.en[0] === label) {
          for (const value of metadata.value.en) {
            results.push(value)
          }
        }
      }
    }
    results.sort();
    return Object.keys(content).map((value, index) => {
      const id = cleanString(label) + '-' + index;
      return (
        <FacetContentItem
          value={value}
          count={content[value]}
          id={id}
        />
      )
    })
  }

  let className = "canopy-form-item-content"

  if (float) {
    className = className + ' canopy-float'
  }

  return (
    <div className={className}>
      {renderContentItems(data, label)}
    </div>
  )
}

export default FacetContent
