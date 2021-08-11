import React, { Component, createRef } from "react"
import Track from "./Track"

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: null,
      format: null,
      tracks: [],
      currentTime: 0
    }

    this.video = createRef()
  }

  renderSource = (src, type) => {
    return (
      <source src={src}
              type={type}
      />
    )
  }

  renderTracks = (tracks) => {
    return tracks.map(function(data, index) {
      return (
        <Track data={data}
               key={index}
        />
      )
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


  handlePlay = () => {
    let video = this.video.current
    video.ontimeupdate = (event) => {
      this.props.time(event.target.currentTime)
      this.setState({
        currentTime: event.target.currentTime
      })
    };
  }

  componentDidMount () {
    this.parseItems()
  }

  render() {

    let {source, format, tracks} = this.state

    if (source) {
      return (
        <video controls
               ref={this.video}
               onPlay={this.handlePlay}
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
