import React, { Component, createRef } from "react"
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"
import MediaQuery from 'react-responsive'
import * as Collapsible from '@radix-ui/react-collapsible';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'


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

  time(value) {
    this.setState({
      t: value
    })
  }

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

    const { id, items, structures } = this.props.node

    return (
      <div 
        ref={this.viewer}
        className="canopy-viewer d-flex align-items-center"
      >
        <Video 
          items={items}
          time={this.time.bind(this)}
          updateTime={this.state.updateTime}
        />
        <Navigator t={this.state.t}
                    transcripts={this.props.transcripts}
                    updateTime={this.updateTime.bind(this)}
                    structures={structures}
                    id={id}
                    node2={this.props.node2} 
        />
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
