import React, { Component, useRef } from 'react';
import Mirador from "./Mirador"
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      t: 0
    }
  }

  time(value) {{
    this.setState({
      t: value
    })
  }}

  render() {

    const {id, manifestId, items, structures} = this.props.node;

    return (
      <div className="canopy-viewer">
        <Video items={items}
               time={this.time.bind(this)}
        />
        <Navigator items={items}
                   t={this.state.t}
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
