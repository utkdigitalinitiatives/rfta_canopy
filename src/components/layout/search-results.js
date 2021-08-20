import * as React from "react"
import { graphql, Link } from "gatsby"
import { Index } from "lunr"
import { Filter } from "../../utilities/iiif"
import Manifest from "../../templates/manifest"

const SearchResults = ({ data, initialQuery = "" , filter}) => {

  const { store } = data.LunrIndex
  const index = Index.load(data.LunrIndex.index)
  const searchString = `*${initialQuery}*`

  let results = []
  let filtered_results = []
  try {
    results = index.search(`*${searchString}*`).map(({ ref }) => {
      return {
        slug: ref,
        ...store[ref]
      }
    })
  } catch (error) {
    console.log(error)
  }

  console.log(results)

  if (filter != "") {
    let current_filter = new Filter(filter)
    current_filter.parameters.map(function(thing){
      lookup_filter(thing)
      // console.log(filtered_results)
      removeUnfilteredResults()
    })
  }

  function lookup_filter (filter) {
    results.map(function(result){
      let found = false
      result.metadata.map(function(element) {
       if (element.label.en[0] == filter.label && element.value.en.includes(filter.value)) {
         console.log(result.slug)
         filtered_results.push(result)
         found = true
       }
      })
      if (found == false) {
        // results.pop(result)
      }
    })
  }

  function removeUnfilteredResults () {
    results.map(function(result) {
      if (filtered_results.includes(result) == false) {
        console.log(result.label)
        results.pop(result)
      }
    })
  }


  // console.log(parseFilter(filter).value)

  return (
    <div className="canopy-search-results">
      {results.length ? (
        results.map(result => {
          return (
            <article key={result.slug}>
              <Link to={result.slug}>
                <figure>
                  <span></span>
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
        <p>No results for <strong>{initialQuery}</strong> found.</p>
      )}
    </div>
  )
}

export default SearchResults
