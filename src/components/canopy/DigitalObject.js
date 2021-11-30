import React, { useEffect, useState } from 'react'
import Viewer from "./Viewer"
import { fromVtt } from "subtitles-parser-vtt"
import DigitalObjectHeader from "./DigitalObjectHeader"

const DigitalObject = ({ node, url }) => {
  const { id, label, manifestId, transcripts } = node
  const [results, setResults] = useState([])
  const [mobileNavigatorStatus, setMobileNavigatorStatus] = useState(false)

  useEffect(() => {
    transcripts.map(transcript => fetchVTT(transcript))
  }, [])

  const fetchVTT = body => {
    fetch(body.id, {
      headers : {
        'Content-Type': 'text/plain',
        'Accept': 'application/json'
      }
    })
      .then(response => response.text())
      .then(data => {
        const transcript = {
          iiif: body,
          text: fromVtt(data),
        }

        setResults([transcript])
      })
      .catch(err => console.error(url, err.toString()))

    return null
  }

  if (results.length) {
    return (
      <article className="canopy-manifest" data-mobile-navigator={mobileNavigatorStatus}>
        <DigitalObjectHeader
          title={label.en[0]}
          manifest={manifestId}
        />
        <Viewer
          id={id}
          mobileNavigatorStatus={value => setMobileNavigatorStatus(value)}
          node={node}
          transcripts={results}
        />
      </article>
    )
  } else {
    return (
      <div className="py-5 mx-auto text-center loading">
        <h4>Loading Interview<span className="one">.</span><span className="two">.</span><span className="three">.</span></h4>
      </div>
    )
  }
}

export default DigitalObject
