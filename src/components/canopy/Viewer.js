import React, { useState, useRef } from "react"
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"

const Viewer = ({ node, transcripts }) => {
  const { id, items, structures } = node
  const viewer = useRef()
  const [time, setTime] = useState(0)
  const [updateTime, setUpdateTime] = useState(null)

  return (
    <div
      ref={viewer}
      className="canopy-viewer d-flex align-items-center"
    >
      <Video
        items={items}
        time={e => setTime(e)}
        updateTime={updateTime}
      />
      <Navigator
        id={id}
        time={time}
        transcripts={transcripts}
        updateTime={e => setUpdateTime(e)}
        structures={structures}
        node={node}
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

export default Viewer
