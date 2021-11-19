import React from "react"
import { useLocation } from "@reach/router"
import CurrentFilter from "../canopy/CurrentFilter"
import { urlParams } from "../../utilities/helpers"

const SearchLimits = ({ query }) => {
  const location = useLocation()
  const { filter } = urlParams(location.search)
  const filters = filter.split(',')

  return (
    <div className="search-limits-section px-5">
      <h4>
        {query.length ? `Your Search Results for "${query}"` : "Explore all resources"}
      </h4>
        <div className="d-flex align-items-center">
        {filter && (
          <>
            <h6 className="me-2">{`Filtering by:`}</h6>
            <div className="filters-wrapper d-flex flex-wrap">
              {filters.map((filter, index) => <CurrentFilter filter={filter} key={index} />)}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default SearchLimits
