import React from 'react'
import { Link } from "gatsby"

const SearchResult = ({ result }) => {
  const { label, slug, summary, thumbnail } = result

  return (
    <article key={slug}>
      <Link to={slug}>
        <figure className='results-thumbnails'>
          <img src={thumbnail} alt={label} />
        </figure>
      </Link>
      <div>
        <Link to={slug}>
          <header>{label || slug}</header>
        </Link>
        <p>{summary}</p>
      </div>
    </article>
  )
}

export default SearchResult
