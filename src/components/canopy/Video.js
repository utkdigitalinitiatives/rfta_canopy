import React, { Component } from 'react';
import Track from "./Track"

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: null,
      format: null,
      tracks: [],
      currentT: 0
    }
  }

  renderSource = (src, type) => {
    return (
      <source src={src}
              type={type}
      />
    )
  }

  renderTracks = (tracks) => {
    return tracks.map(function(data) {
      return <Track data={data} />
    });
  }

  parseItems = () => {
    let component = this;

    if (Array.isArray(this.props.items)) {
      const items = this.props.items[0].items[0].items;
      items.map(function(element) {
        if (element.motivation === 'painting') {
          component.setState({
            source: element.body[0].id,
            format: element.body[0].format
          });
        } else if (element.motivation === 'supplementing') {
          let tracks = component.state.tracks
          element.body.map(function(item) {
            let track = {}
            track.src = item.id
            track.label = item.label[item.language][0]
            track.srclang = item.language
            tracks.push(track)
          });
          component.setState({
            tracks: tracks
          });
        }
      });
    }
  }

  componentDidMount () {
    this.parseItems()
  }

  render() {

    let {source, format, tracks} = this.state

    if (source) {
      return (
        <video controls
               className="canopy-video"
               crossOrigin="anonymous">
          {this.renderSource(source, format)}
          {this.renderTracks(tracks)}
        </video>
      )

    } else {
      return null

    }

  }
}

export default Video;
