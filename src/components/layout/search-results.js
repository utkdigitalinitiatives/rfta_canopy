import * as React from "react"
import { Link } from "gatsby"
import { Index } from "lunr"
import { Filter } from "../../utilities/iiif"

const SearchResults = ({ data, initialQuery = "" , filter}) => {

  const { store } = data.LunrIndex
  const index = Index.load(data.LunrIndex.index)
  const searchString = `*${initialQuery}*`
  let results = []
  try {
    results = index.search(`*${searchString}*`).map(({ ref }) => {
      return {
        ...store[ref]
      }
    })
  } catch (error) {
    console.log(error)
  }

  if (filter !== "") {
    let current_filter = new Filter(filter)
    current_filter.parameters.map(function(thing){
      return results = lookup_filter(thing)
    })
  }

  function lookup_filter (filter) {
    let filtered_results = []
    results.map(function(result){
      return result.metadata.forEach(function(element) {
        if (element.label.en[0] === filter.label && element.value.en.includes(filter.value)) {
          return filtered_results.push(result)
        }
      })
    })
    return filtered_results
  }


  return (
    <div className="canopy-search-results">
      {results.length ? (
        results.map(result => {
          return (
            <article key={result.slug}>
              <Link to={result.slug}>
                <figure className='results-thumbnails'>
                  <img src={result.thumbnail} alt={result.label} />
                </figure>
              </Link>
              <div>
                <Link to={result.slug}>
                  <header>{result.label || result.slug}</header>
                </Link>
                <p>{result.summary}</p>
              </div>
            </article>
          )
        })
      ) : (
        <div className="canopy-no-results">
          <span>No Results</span>
          <p>
            We could not find results for <strong>{initialQuery}</strong>.
          </p>
        </div>
      )}
    </div>
  )
}

export default SearchResults
