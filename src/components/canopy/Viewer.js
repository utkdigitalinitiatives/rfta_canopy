import React, { Component, useRef } from 'react';
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      t: 0,
      updateTime: null
    }

    this.updateTime = this.updateTime.bind(this);
  }

  time(value) {{
    this.setState({
      t: value
    })
  }}

  updateTime (value) {
    this.setState({
      updateTime: value
    })
  }

  render() {

    const {id, manifestId, items, structures} = this.props.node;

    return (
        <div className="canopy-viewer">
          <Video items={items}
                 time={this.time.bind(this)}
                 updateTime={this.state.updateTime}
          />
          <Navigator t={this.state.t}
                     transcripts={this.props.transcripts}
                     updateTime={this.updateTime.bind(this)}
                     structures={structures} />
        </div>
    )
  }
}

Viewer.propTypes = {
  manifestId: PropTypes.string,
}

Viewer.defaultProps = {
  manifestId: ``,
}


export default Viewer;
