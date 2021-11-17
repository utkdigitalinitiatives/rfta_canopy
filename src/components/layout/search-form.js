import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

const SearchResults = ({ initialQuery = "" }) => {
  const [query, setQuery] = useState(initialQuery)
  const inputEl = useRef(null)

  const handleChange = e => setQuery(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const q = inputEl.current.value
    navigate(`/search?q=${q}`)
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
          placeholder="Search All Resources"
          onChange={handleChange}
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    </form>
  )
}

export default SearchResults
