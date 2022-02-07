import React from 'react'
import { Link as GatsbyLink } from "gatsby"

const SearchResult = ({ result }) => {
  const { label, slug, summary, thumbnail } = result
  console.log(slug);
  let slugWithSlash = slug.endsWith('/') ? slug : `${slug}/`;
  return (
    <article key={slug}>
      <GatsbyLink to={slugWithSlash}>
        <figure className='results-thumbnails'>
          <img src={thumbnail} alt={label} />
        </figure>
      </GatsbyLink>
      <div>
        <a
          href={slugWithSlash}>
          <header>{label || slug}</header>
        </a>
        <p>{summary}</p>
      </div>
    </article>
  )
}

export default SearchResult
