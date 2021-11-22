import React from "react"
import BrowseItem from './BrowseItem';

const BrowseRow = ({ data, backgroundClass }) => {

  const { subheadings, title } = data

  return (
    <div className={`row py-5 px-5 justify-content-center mx-0 ${backgroundClass}`}>
      <h3 className="section-label mb-4">{title}</h3>
      { subheadings.map(subheading => (
        <BrowseItem 
          altText={subheading.altText}
          image={subheading.image}
          path={subheading.path}
          subtitle={subheading.subtitle}
        />
      ))}
    </div>
    )
  }

export default BrowseRow




