import * as React from "react"

const SearchLimits = ({ query }) => (
  <div className="search-limits-section px-5">
    <h4>
      {query.length ? `Your Search Results for "${query}"` : "Explore all resources"}
    </h4>
    {/* We will need to add a conditional here as well depending if the search is filtered: */}
    <h6>Filtering by:</h6>

  </div>
)

export default SearchLimits
