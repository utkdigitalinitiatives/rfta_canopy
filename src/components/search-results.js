import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "./layout"
import { Index } from "lunr"
import IndexPage from "../pages"

const SearchResults = ({data, initialQuery = "" }) => {

  const { store } = data.LunrIndex
  const index = Index.load(data.LunrIndex.index)
  const searchString = `*${initialQuery}*`

  let results = []
  try {
    results = index.search(`*${searchString}*`).map(({ ref }) => {
      return {
        slug: ref,
        ...store[ref],
      }
    })
  } catch (error) {
    console.log(error)
  }

  return (
    <div>
      {results.length ? (
        results.map(result => {
          return (
            <article key={result.slug}>
              <h2>
                <Link to={result.slug}>{result.label || result.slug}</Link>
              </h2>
              <p>{result.excerpt}</p>
            </article>
          )
        })
      ) : (
        <p>Nothing found.</p>
      )}
    </div>
  )
}

export default SearchResults
