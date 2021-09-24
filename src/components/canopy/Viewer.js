import React, { Component, createRef, useRef } from "react"
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"
import MediaQuery from 'react-responsive'
import * as Collapsible from '@radix-ui/react-collapsible';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import * as Popover from "@radix-ui/react-popover"


class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      t: 0,
      updateTime: null,
      mobileNavigatorStatus: false,
      videoHeight: null
    }

    this.updateTime = this.updateTime.bind(this);
    this.viewer = createRef()
  }

  time(value) {{
    this.setState({
      t: value
    })
  }}

  updateTime (value) {
    this.setState({
      updateTime: value
    })
  }

  handleCollapsible = (status) => {
    this.props.mobileNavigatorStatus(status)
    if (status) {
      disableBodyScroll('body');
      this.setState({
        videoHeight: this.viewer.current.children[0].clientHeight
      })
    } else {
      enableBodyScroll('body');
      this.setState({
        videoHeight: null
      })
    }
  }

  handleMediaQuery = (status) => {
    // this.setState({
    //   defaultOpen: status,
    //   open: status
    // })
    return null
  }

  componentDidMount() {
  }

  render() {

    const {id, manifestId, items, structures} = this.props.node;

    return (
      <div ref={this.viewer}
           className="canopy-viewer">
        <Video items={items}
               time={this.time.bind(this)}
               updateTime={this.state.updateTime}
        />
        <MediaQuery maxWidth={800}>
          {(matches) => {
            if (matches) {
              return (
                <Collapsible.Root defaultOpen={false}
                                  onOpenChange={this.handleCollapsible}>
                  <Collapsible.Trigger  id="canopy-collapse-trigger-navigator"
                                        className="canopy-collapse-trigger">
                    <span>Show Video Navigator</span>
                    <svg viewBox="0 0 32 32">
                      <g transform="scale(1)">
                        <path d="M21.443,10.584l-.027-.027a1.9,1.9,0,0,0-2.688,0L16,13.285l-2.728-2.728a1.9,1.9,0,0,0-2.688,0l-.027.027a1.9,1.9,0,0,0,0,2.688L13.285,16l-2.728,2.728a1.9,1.9,0,0,0,0,2.688l.027.027a1.9,1.9,0,0,0,2.688,0L16,18.715l2.728,2.728a1.9,1.9,0,0,0,2.688,0l.027-.027a1.9,1.9,0,0,0,0-2.688L18.715,16l2.728-2.728A1.9,1.9,0,0,0,21.443,10.584Z" />
                      </g>
                    </svg>
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <Navigator t={this.state.t}
                               transcripts={this.props.transcripts}
                               updateTime={this.updateTime.bind(this)}
                               structures={structures}
                               videoHeight={this.state.videoHeight}
                    />
                  </Collapsible.Content>
                </Collapsible.Root>
              )
            } else {
              return (
                <Navigator t={this.state.t}
                           transcripts={this.props.transcripts}
                           updateTime={this.updateTime.bind(this)}
                           structures={structures}
                />
              )
            }
          }}
        </MediaQuery>
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
