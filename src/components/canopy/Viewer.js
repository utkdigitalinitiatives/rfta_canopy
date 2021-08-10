import React, { Component } from 'react';
import * as AspectRatio from "@radix-ui/react-aspect-ratio"
import Mirador from "./Mirador"
import * as Tabs from "@radix-ui/react-tabs"
import Structures from "./Structures"
import PropTypes from "prop-types"
import Navigator from "./Navigator"

class Viewer extends Component {
  constructor(props) {
    super(props);
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
