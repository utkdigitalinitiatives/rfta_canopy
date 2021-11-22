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
      <h4>
        {query.length ? `Your Search Results for "${query}"` : "Explore all resources"}
      </h4>
      {filter && (
        <>
          <h6>{`Filtering by:`}</h6>
          {filters.map((filter, index) => <CurrentFilter filter={filter} key={index} />)}
        </>
      )}
    </div>
  )
}

export default SearchLimits
