import * as React from "react"

const SearchLimits = ({ q }) => {

return(
<div className="search-limits-section px-5">
  <h4>
    {q.length ? `Your Search Results for ${q}` : "Explore all resources"}
  </h4>
  {/* We will need to add a conditional here as well depending if the search is filtered: */}
  <h6>Filtering by:</h6>

</div>
)
}

export default SearchLimits