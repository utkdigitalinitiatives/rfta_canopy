import React, { Component, useRef } from 'react';
import PropTypes from "prop-types"
import Navigator from "./Navigator"
import Video from "./Video"
import MediaQuery from 'react-responsive'
import * as Collapsible from '@radix-ui/react-collapsible';

class Viewer extends Component {
  constructor(props) {
    super(props);

    this.state ={
      t: 0,
      updateTime: null
    }

    this.updateTime = this.updateTime.bind(this);
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
    console.log(status)
  }

  handleMediaQuery = (status) => {
    // this.setState({
    //   defaultOpen: status,
    //   open: status
    // })
    return null
  }

  render() {

    const {id, manifestId, items, structures} = this.props.node;

    return (
      <div className="canopy-viewer">
        <Video items={items}
               time={this.time.bind(this)}
               updateTime={this.state.updateTime}
        />
        <MediaQuery maxWidth={800}>
          {(matches) => {
            if (matches) {
              return (
                <Collapsible.Root defaultOpen={false}>
                  <Collapsible.Trigger>
                    Expand
                  </Collapsible.Trigger>
                  <Collapsible.Content>
                    <Navigator t={this.state.t}
                               transcripts={this.props.transcripts}
                               updateTime={this.updateTime.bind(this)}
                               structures={structures}
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
