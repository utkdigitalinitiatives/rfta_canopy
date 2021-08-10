import React, { Component } from 'react';
import Mirador from "./Mirador"
import PropTypes from "prop-types"
import Navigator from "./Navigator"

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      t: 0,
      active: false
    }
  }

  componentDidMount () {
    // add event listener for video
  }

  componentWillUnmount() {
    // remove event listener
  }

  render() {

    const {id, manifestId} = this.props.node;

    return (
      <div className="canopy-viewer">
        <Mirador
          config={{
            id: `canopy-mirador-${id}`,
            window: {
              hideWindowTitle: true,
              sideBarOpen: false,
              defaultSidebarPanelWidth: 320,
              allowTopMenuButton: true,
              allowWindowSideBar: true,
              allowMaximize: false,
              allowClose: false,
              forceDrawAnnotations: true,
              allowFullscreen: true,
            },
            windows: [{
              manifestId: manifestId,
            }],
            workspaceControlPanel: {
              enabled: false,
            },
          }}
          plugins={[]}
        />
        <Navigator />
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
