import * as React from "react"
import Mirador from "./Mirador"
import PropTypes from "prop-types"

const Viewer = ({ id, manifestId }) => (
  <div className="canopy-viewer">
    <div className="canopy-mirador">
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
    </div>
    <aside className="canopy-navigator">
      [navigator]
    </aside>
  </div>
)

Viewer.propTypes = {
  manifestId: PropTypes.string,
}

Viewer.defaultProps = {
  manifestId: ``,
}

export default Viewer
