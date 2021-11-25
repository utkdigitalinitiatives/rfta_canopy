import * as React from "react"
import { Index } from "lunr"
import { filterLabelsAndValues } from '../../utilities/helpers'
import SearchResult from "../canopy/SearchResult"

const SearchResults = ({ data, initialQuery = "" , filter }) => {
  const { store } = data.LunrIndex
  const index = Index.load(data.LunrIndex.index)
  const searchString = `*${initialQuery}*`
  let results = []

  try {
    results = index.search(`*${searchString}*`)
                   .map(({ ref }) => ({ ...store[ref] }))
                   .sort((a, b) => {
                    if (a.label === b.label) return 0

                    return (a.label < b.label) ? -1 : 1
                  })
  } catch (error) {
    console.log(`Unable to retrieve the interview data: ${error}`)
  }

  const lookup_filter = ({ label, value }) => {
    let filtered_results = []
    results.map(result => {
      return result.metadata.forEach(element => {
        if (element.label.en[0] === label && element.value.en.includes(value)) {
          return filtered_results.push(result)
        }
      })
    })

    return filtered_results
  }

  if (filter) {
    const current_filter = filterLabelsAndValues(filter)

    current_filter.map(({ label, value }) => results = lookup_filter({ label, value }))
  }

  return (
    <div className="canopy-search-results">
      {results.length ? (
        results.map((result, index) => <SearchResult result={result} key={index} />)
      ) : (
        <div className="canopy-no-results">
          <span>No Results</span>
          { initialQuery.length ? (
            <p>
              We could not find results for "{initialQuery}".
            </p>
          ) : (
            <p>
              We could not find results for those combined filters.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

export default SearchResults
