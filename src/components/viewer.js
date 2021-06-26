import * as React from "react"
import Mirador from "./Mirador"
import PropTypes from "prop-types"

const Viewer = ({ manifestId }) => (
  <div>
    <div style={{position: "relative", width: "100%", height: "500px"}}>
      {console.log(manifestId)}
      <Mirador
        config={{
          id: 'mirador',
          window: {
            hideWindowTitle: false,
            sideBarOpen: true,
            defaultSidebarPanelWidth: 320,
            allowTopMenuButton: true,
            allowWindowSideBar: true,
            allowMaximize: false,
            allowClose: false,
            forceDrawAnnotations: true
          },
          windows: [{
            manifestId: manifestId
          }],
          workspaceControlPanel: {
            enabled: false,
          },
        }}
        plugins={[]}
      />

    </div>
    <div>[navigator]</div>
  </div>
)

Viewer.propTypes = {
  manifestId: PropTypes.string,
}

Viewer.defaultProps = {
  manifestId: ``,
}

export default Viewer
