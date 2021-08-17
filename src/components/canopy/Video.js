import React, { Component, createRef } from "react"
import Track from "./Track"
import { isSafari } from "react-device-detect";

class Video extends Component {
  constructor(props) {
    super(props);

    this.state = {
      source: null,
      format: null,
      tracks: [],
      currentTime: 0,
      updateTime: null,
      updated: true
    }

    this.video = createRef()
    this.visualizer = createRef()
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
    if (!isSafari && this.state.format === 'audio/mpeg') {
      this.audioVisualizer(this.video.current);
    }
  }

  handleUpdate = (t) => {
    if (t) {
      if (this.state.updateTime !== t) {
        this.video.current.currentTime = t
        this.setState({
          updateTime: t
        })
      }
    }
  }

  audioVisualizer = (video) => {
    const context = new AudioContext();
    const src = context.createMediaElementSource(video);
    let analyser = context.createAnalyser();

    const canvas = this.visualizer.current;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext("2d");

    src.connect(analyser);
    analyser.connect(context.destination);

    analyser.fftSize = 256;

    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    let component = this;
    setInterval(function(){
      component.renderFrame(analyser, ctx, bufferLength, dataArray, canvas.width, canvas.height);
    }, 20);
  };

  renderFrame(analyser, ctx, bufferLength, dataArray, width, height) {

    let barWidth = (width / bufferLength) * 2.6;
    let barHeight;
    let x = 0;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = "#313E48";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 4;

      const r = 26 + (i * 4);
      const g = 114;
      const b = 197;
      const alpha = 1

      ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + alpha + ")";
      ctx.fillRect(x, height - barHeight, barWidth, barHeight);

      x += barWidth + 6;
    }
  }

  renderAudioVisualizer = () => {
    return (
      <canvas id="canopy-audio-visualizer"
              ref={this.visualizer}>
      </canvas>
    )
  }

  componentDidMount () {
    this.parseItems()
  }

  componentDidUpdate () {
    this.handleUpdate(this.props.updateTime);
  }

  render() {

    let {source, format, tracks} = this.state

    if (source) {
      return (
        <div className="canopy-video">
          <video controls
                 ref={this.video}
                 onPlay={this.handlePlay}
                 crossOrigin="anonymous">
            {this.renderSource(source, format)}
            {this.renderTracks(tracks)}
          </video>
          {this.renderAudioVisualizer(format)}
        </div>
      )

    } else {
      return null

    }

  }
}

export default Video;
