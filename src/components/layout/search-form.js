import React, { useState, useRef } from "react"
import { useLocation } from "@reach/router"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { searchBy, urlParams } from "../../utilities/helpers"

const SearchResults = ({ initialQuery = "" }) => {
  const [inquiry, setInquiry] = useState(initialQuery)
  const location = useLocation()
  const inputEl = useRef(null)

  const handleChange = e => setInquiry(e.target.value)

  const handleSubmit = e => {
    e.preventDefault()
    const { filter } = urlParams(location.search)

    searchBy(inquiry, filter)
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
          value={inquiry}
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
