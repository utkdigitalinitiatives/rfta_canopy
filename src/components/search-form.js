import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"

const SearchResults = ({ initialQuery = "" }) => {

  const [query, setQuery] = useState(initialQuery)
  const inputEl = useRef(null)

  const handleChange = e => {
    setQuery(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    const q = inputEl.current.value
    navigate(`/?q=${q}`)
  }

  return (
    <form className="canopy-search--form" role="search" onSubmit={handleSubmit}>
      <label htmlFor="search-input" style={{ display: "block" }}>
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
      <button type="submit">Go</button>
    </form>
  )
}

export default SearchResults
