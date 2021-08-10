import * as React from "react"
import { Link } from "gatsby"
import { Index } from "lunr"

const SearchResults = ({ data, initialQuery = "" }) => {

  const { store } = data.LunrIndex
  const index = Index.load(data.LunrIndex.index)
  const searchString = `*${initialQuery}*`

  let results = []
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
