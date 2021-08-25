import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import Facet from "../canopy/Facet"

const SearchResults = ({ initialQuery = "" }) => {

  const [query, setQuery] = useState(initialQuery)
  const inputEl = useRef(null)

  const handleChange = e => {
    setQuery(e.target.value)
    const q = inputEl.current.value
    navigate(`/?q=${q}`)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const q = inputEl.current.value
    navigate(`/?q=${q}`)
  }

  return (
    <form className="canopy-form" role="search" onSubmit={handleSubmit}>
      <div className="canopy-form-item canopy-form-item-search">
        <label htmlFor="search-input">
          Search
        </label>
        <input
          ref={inputEl}
          id="search-input"
          type="search"
          value={query}
          placeholder="Search for Items"
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </div>
      <Facet label="Topic" dropdown={true} />
      <Facet label="Coverage" dropdown={true} />
      <Facet label="Form" dropdown={true} />
    </form>
  )
}

export default SearchResults
