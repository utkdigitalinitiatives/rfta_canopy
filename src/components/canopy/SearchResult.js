import React from 'react'
import { Link } from "gatsby"

const SearchResult = ({ result }) => {
  const { label, slug, summary, thumbnail } = result
  const slugWithSlash = slug.endsWith('/') ? slug : `${slug}/`;

  return (
    <article key={slug}>
      <Link
        to={slugWithSlash}>
        <figure className='results-thumbnails'>
          <img src={thumbnail} alt={label} />
        </figure>
      </Link>
      <div>
        <Link
          to={slugWithSlash}>
          <header>{label || slug}</header>
        </Link>
        <p>{summary}</p>
      </div>
    </article>
  )
}

export default SearchResult
