import React from "react"
import { useLocation } from "@reach/router"
import CurrentFilter from "../canopy/CurrentFilter"
import { listIndividualFilters, urlParams } from "../../utilities/helpers"

const SearchLimits = ({ query }) => {
  const location = useLocation()
  const { filter } = urlParams(location.search)
  const filters = listIndividualFilters(filter)

  return (
    <div className="search-limits-section px-5">
      <h4 className= "text-center text-md-start">
        {query.length ? `Your Search Results for "${query}"` : "Explore all resources"}
        {query.length ?
          <div className="clear-results">
            <a href="/interviews">
              <button type="button" className="btn btn-success" aria-label="clear results">Clear Search Results</button>
            </a>
          </div>
          : ''
        }
      </h4>
        <div className="d-flex flex-column flex-md-row align-items-center">
        {filter && (
          <>
            <h6 className="me-2 my-4 my-md-0">{`Filtering by:`}</h6>
            <div className="filters-wrapper d-flex flex-wrap justify-content-center justify-content-md-start">
              {filters.map((filter, index) => <CurrentFilter filter={filter} key={index} />)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SearchLimits
