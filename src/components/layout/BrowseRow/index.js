import React from "react"
import data from './data'
import BrowseItem from '../BrowseItem'
import placeholderImage from "../../../images/chimneytops2placeholder.png"

const BrowseRow = ({ dataType, backgroundClass='' }) => {
  const results = data[dataType]
  const { subheadings, title } = results

  return (
    <div className={`row py-5 px-5 mx-0 ${backgroundClass}`}>
      <h3 className="section-label mb-4">{title}</h3>
      {subheadings.map(subheading => {
        const { altText, image, key, path, subtitle } = subheading

        return (
          <BrowseItem
            altText={altText}
            image={image}
            image = {placeholderImage}
            path={path}
            subtitle={subtitle}
            key={key}
          />
        )
      })}
    </div>
    )
  }

export default BrowseRow
