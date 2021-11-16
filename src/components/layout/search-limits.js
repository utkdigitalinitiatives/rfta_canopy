import * as React from "react"

const SearchLimits = ({ q }) => {

return(
<div className="search-limits-section px-5">
  {q.length > 0 &&
    <h4>Your Search Results for "{q}"</h4>
  }
  {q.length == 0 &&
    <h4>Explore all resources</h4>
  }
  {/* We will need to add a conditional here as well depending if the search is filtered: */}
  <h6>Filtering by:</h6>

</div>
)
}

export default SearchLimits