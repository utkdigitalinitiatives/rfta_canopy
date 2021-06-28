import * as React from "react"
import Mirador from "./Mirador"
import PropTypes from "prop-types"
import * as AspectRatio from '@radix-ui/react-aspect-ratio';

const Viewer = ({ id, manifestId }) => (
  <AspectRatio.Root ratio={100 / 38.2}>
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
  </AspectRatio.Root>
)

Viewer.propTypes = {
  manifestId: PropTypes.string,
}

Viewer.defaultProps = {
  manifestId: ``,
}

export default Viewer
