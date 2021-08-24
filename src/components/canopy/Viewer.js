import React, { Component, createRef, useRef } from "react"
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"
import MediaQuery from 'react-responsive'
import * as Collapsible from '@radix-ui/react-collapsible';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';


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
                    <span>Show Active Context</span>
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
