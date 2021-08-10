import React, { Component, useRef } from 'react';
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
    // #canopy-mirador-0cfbc150-4b71-53d0-8150-c5854e9925be video

    // const id = `canopy-mirador-${this.props.node.id}`
    // const selector = `#${id} video`;
    // const video = window.querySelector('video');
    //
    // console.log(video);

    // video.addEventListener('timeupdate', (event) => {
    //   console.log('The currentTime attribute has been updated. Again.');
    // });
  }

  componentWillUnmount() {
    // remove event listener
    // #canopy-mirador-0cfbc150-4b71-53d0-8150-c5854e9925be video
  }

  render() {

    const {id, manifestId, items, structures} = this.props.node;

    return (
      <div className="canopy-viewer">
        <Mirador
          config={{
            id: `canopy-mirador-${id}`,
            window: {
              hideWindowTitle: true,
              sideBarOpen: false,
              defaultSidebarPanelWidth: 320,
              allowWindowSideBar: true,
              allowMaximize: false,
              allowFullscreen: true,
              allowClose: false,
              allowTopMenuButton: false,
              forceDrawAnnotations: true
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
