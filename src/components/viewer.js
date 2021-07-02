import * as React from "react"
import Mirador from "./Mirador"
import PropTypes from "prop-types"
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Tabs from '@radix-ui/react-tabs';
import Structures from "./Structures"


const Viewer = ({ id, manifestId, node }) => (
  <>
    <div className="canopy-viewer">
      <div className="canopy-mirador">
        <AspectRatio.Root ratio={100 / 61.8}>
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
        </AspectRatio.Root>
      </div>
      <aside className="canopy-navigator">
        <Tabs.Root className="canopy-tabs" defaultValue="chapters">
          <Tabs.List className="canopy-tabs--list">
            <Tabs.Trigger value="chapters">Chapters</Tabs.Trigger>
            <Tabs.Trigger value="transcript">Transcript</Tabs.Trigger>
          </Tabs.List>
          <div className="canopy-tabs--content">
            <Tabs.Content value="chapters">
              <Structures node={node} />
            </Tabs.Content>
            <Tabs.Content value="transcript">[transcript/annotations]</Tabs.Content>
          </div>
        </Tabs.Root>
      </aside>
    </div>
  </>
)

Viewer.propTypes = {
  manifestId: PropTypes.string,
}

Viewer.defaultProps = {
  manifestId: ``,
}

export default Viewer
