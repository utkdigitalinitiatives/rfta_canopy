import React, { useState, useRef } from "react"
import { navigate } from "@reach/router"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { GoArrowDown } from "react-icons/go";

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
    <form className="canopy-search-form" role="search" onSubmit={handleSubmit}>
      <div className="canopy-control--item canopy-control--item-search">
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
      <div className="canopy-control--item canopy-control--item-dropdown">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <span>Subject</span>
            <GoArrowDown />
          </DropdownMenu.Trigger>
        </DropdownMenu.Root>
      </div>
      <div className="canopy-control--item canopy-control--item-dropdown">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <span>Location</span>
            <GoArrowDown />
          </DropdownMenu.Trigger>
        </DropdownMenu.Root>
      </div>
    </form>
  )
}

export default SearchResults
