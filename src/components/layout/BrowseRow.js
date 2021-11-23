import React from "react"
import BrowseItem from './BrowseItem';
import PlaceholderImage from "../../images/chimneytops2placeholder.png"

const BrowseRow = ({ data, backgroundClass }) => {

  const { subheadings, title } = data

  return (
    <div className={`row py-5 px-5 justify-content-center mx-0 ${backgroundClass}`}>
      <h3 className="section-label mb-4">{title}</h3>
      { subheadings.map(subheading => (
        <BrowseItem 
          altText={subheading.altText}
          image={subheading.image}
          image = {PlaceholderImage}
          path={subheading.path}
          subtitle={subheading.subtitle}
          key={subheading.key}
        />
      ))}
    </div>
    )
  }

export default BrowseRow




