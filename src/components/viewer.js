import * as React from "react"
import Mirador from "./Mirador"
import PropTypes from "prop-types"
import * as AspectRatio from '@radix-ui/react-aspect-ratio';
import * as Tabs from '@radix-ui/react-tabs';


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
        <Tabs.Root className="canopy-tabs" defaultValue="chapters">
          <Tabs.List className="canopy-tabs--list">
            <Tabs.Trigger value="chapters">Chapters</Tabs.Trigger>
            <Tabs.Trigger value="transcript">Transcript</Tabs.Trigger>
          </Tabs.List>
          <div className="canopy-tabs--content">
            <Tabs.Content value="chapters">Duis nec laoreet sem. Mauris sit amet enim a sapien dapibus condimentum sed id quam. Vestibulum consequat, lacus id volutpat consequat, dolor purus commodo ipsum, eu ullamcorper ligula erat in nunc. Sed consequat dui pulvinar, varius nibh sit amet, tempor ipsum. </Tabs.Content>
            <Tabs.Content value="transcript">Maecenas malesuada varius sapien. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec in consequat ligula. In suscipit tristique sagittis. Nulla at ex molestie, placerat nulla at, tincidunt nulla. Donec quis sodales lorem. Vestibulum imperdiet ut tortor vitae maximus. Nunc facilisis odio ex, sed consequat mi ornare vel. Proin a libero laoreet urna suscipit aliquet sed a felis. </Tabs.Content>
          </div>
        </Tabs.Root>
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
