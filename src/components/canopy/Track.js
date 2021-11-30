import React from 'react'

const Track = ({ data }) => {
  const { label, src, srclang } = data

  return (
    <track
      src={src}
      label={label}
      srcLang={srclang}
    />
  )
}

export default Track
