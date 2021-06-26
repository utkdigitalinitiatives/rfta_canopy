import * as React from "react"
import Mirador from "./Mirador"

const Viewer = () => (
  <div>
    <div style={{position: "relative", width: "100%", height: "500px"}}>
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
          windows: [],
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

export default Viewer
