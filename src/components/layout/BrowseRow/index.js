import React from "react"
import data from './data'
import BrowseItem from '../BrowseItem'

const BrowseRow = ({ dataType, backgroundClass='' }) => {
  const results = data[dataType]
  const { subheadings, title } = results

  return (
    <div className={`row py-5 px-5 mx-0 ${backgroundClass}`}>
      <h3 className="section-label mb-4">{title}</h3>
      {subheadings.map(subheading => {
        const { altText, image, key, label, subtitle, value } = subheading

        return (
          <BrowseItem
            key={key}
            altText={altText}
            image={image}
            label={label}
            subtitle={subtitle}
            value={value}
          />
        )
      })}
    </div>
    )
  }

export default BrowseRow
