import React from 'react'

const SearchResult = ({ result }) => {
  console.log(result)
  const { label, slug, summary, thumbnail } = result
  const slugWithSlash = slug.endsWith('/') ? slug : `${slug}/`;
  return (
    <article key={slug}>
      <a href={slugWithSlash} >
        <figure className='results-thumbnails'>
          <img src={thumbnail} alt={label} />
        </figure>
      </a>
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
