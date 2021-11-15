import React from "react"

const BrowseItem = ({ altText, image, path, subtitle}) => {
  return (
      <div className="col-11 col-sm-6 col-md-3 px-0">
        <div className= "browse-item">
          <div className="mx-auto mb-4 browse-image"></div>
          <p className="text-center px-2">{subtitle}</p>
          </div>
      </div>
    )
  }
export default BrowseItem
