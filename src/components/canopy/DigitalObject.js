import React, { Component } from 'react';
import Viewer from "./Viewer"

class DigitalObject extends Component {
  constructor(props) {
    super(props);

    this.manifestRef = React.createRef();
  }

  render() {

    return (
      <Viewer ref={this.manifestRef}
              node={this.props.node} />
    )
  }
}

export default DigitalObject;
