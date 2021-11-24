import React from "react"
import { Link } from "gatsby"

const BrowseItem = ({ altText, image, path, subtitle}) => {
  return (
      <div className="col-11 col-sm-6 col-md-3 px-0">
        <Link to={`/interviews?filter=${path}`} >
          <div className= "browse-item">
            <div className="mx-auto mb-4 browse-image">
              <img src={image} class="card-img-top img-fluid" alt={altText}/ >
            </div>
            <p className="text-center px-2">{subtitle}</p>
          </div>
        </Link>
      </div>
    )
  }
export default BrowseItem
