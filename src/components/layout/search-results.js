import * as React from "react"
import { Link } from "gatsby"
import { Index } from "lunr"
import { filterLabelsAndValues } from '../../utilities/helpers'

const SearchResults = ({ data, initialQuery = "" , filter }) => {
  const { store } = data.LunrIndex
  const index = Index.load(data.LunrIndex.index)
  const searchString = `*${initialQuery}*`
  let results = []

  try {
    results = index.search(`*${searchString}*`)
                   .map(({ ref }) => ({ ...store[ref] }))
  } catch (error) {
    console.log(`Unable to retrieve the interview data: ${error}`)
  }

  if (filter) {
    const current_filter = filterLabelsAndValues(filter)
    let filtered_results = []

    current_filter.map(({ label, value }) => {
      results.map(result => {
        result.metadata.forEach(element => {
          if (element.label.en[0] === label && element.value.en.includes(value)) {
            filtered_results.push(result)
          }
        })
      })
    })

    results = filtered_results
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
