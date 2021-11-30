import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"

const Viewer = ({ node, transcripts, node2 }) => {
  const { id, items, structures } = node
  const [time, setTime] = useState(0)
  const [updatedTime, setUpdatedTime] = useState(null)
  const viewer = useRef()

  return (
    <div
      ref={viewer}
      className="canopy-viewer d-flex align-items-center"
    >
      <Video
        items={items}
        time={e => setTime(e)}
        updatedTime={updatedTime}
      />
      <Navigator
        t={time}
        transcripts={transcripts}
        updateTime={e => setUpdatedTime(e)}
        structures={structures}
        id={id}
        node2={node2}
      />
    </div>
  )
}

Viewer.propTypes = {
  manifestId: PropTypes.string,
}

Viewer.defaultProps = {
  manifestId: ``,
}

export default Viewer;
