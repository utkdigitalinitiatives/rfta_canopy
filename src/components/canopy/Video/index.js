import React, { Component, createRef } from "react"
import { isSafari } from "react-device-detect"
import * as AspectRatio from '@radix-ui/react-aspect-ratio'
import Track from "../Track"
import accompanyingCanvas from './accompanyingCanvas'
class Video extends Component {
  constructor(props) {
    super(props)

    this.state = {
      source: null,
      format: null,
      tracks: [],
      currentTime: 0,
      updateTime: null,
      updated: true,
      playing: false,
      image: null
    }

    this.video = createRef()
    this.visualizer = createRef()
  }

  componentDidMount () {
    this.parseItems()
  }

  componentDidUpdate () {
    this.handleUpdate(this.props.updateTime)
  }

  renderSource = (src, type) => {
    return (
      <source
        src={src}
        type={type}
      />
    )
  }

  renderTracks = (tracks) => {
    return tracks.map(function(data, index) {
      console.log(index);
      return (
        <Track
          data={data}
          key={index}
        />
      )
    });
  }

  parseItems = () => {
    let component = this;

    if (Array.isArray(this.props.items)) {

      const items = this.props.items[0].items[0].items;
      const annotations = this.props.items[0].annotations[0].items;

      items.forEach(function(element) {
        if (element.motivation === 'painting') {
          component.setState({
            source: element.body.id,
            format: element.body.format
          });
        }
      });

      annotations.forEach(function(element) {
        let tracks = component.state.tracks
        let track = {}
        track.src = element.body.id
        console.log(element.body.id);
        var label_for_dom = ''
        if (element.body.label.en !== null) {
          label_for_dom = element.body.label.en[0]
        }
        else if (element.body.label.es !== null) {
          label_for_dom = element.body.label.es[0]
        }
        track.label = label_for_dom
        track.srclang = element.body.language
        tracks.push(track)
        component.setState({
          tracks: tracks
        });
      });

      if (accompanyingCanvas) {
        const src = accompanyingCanvas.items[0].items[0].body.id
        const alt = accompanyingCanvas.label.en[0]
        component.setState({
          image: {
            src,
            alt,
          }
        });
      }
    }
  }

  handlePlay = () => {
    let video = this.video.current
    video.ontimeupdate = (event) => {
      this.props.time(event.target.currentTime)
      this.setState({
        currentTime: event.target.currentTime,
        playing: true
      })
    };
    if (!isSafari && this.state.format === 'audio/mpeg') {
      this.audioVisualizer(this.video.current);
    }
  }

  handlePause = () => {
    let component = this
    setTimeout(function() {
      if (component.video.current.paused) {
        component.setState({
          playing: false
        })
      }
    }, 200);
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

    ctx.fillStyle = "#000000";
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

  renderFigure = (image) => {
    if (image) {
      return (
        <div className="canopy-accompanying-canvas">
            <figure>
              <img src={image.src} alt={image.alt} />
            </figure>
        </div>
      )
    }
  }

  renderAudioVisualizer = () => {
    return (
      <canvas
        id="canopy-audio-visualizer"
        ref={this.visualizer}>
      </canvas>
    )
  }

  renderBackground = (format, image) => {
    if (format === 'audio/mpeg') {
      return (
        <div className="canopy-video-background">
          {this.renderFigure(image)}
          {this.renderAudioVisualizer()}
        </div>
      )
    }
  }

  render() {

    let {source, format, tracks, playing, image} = this.state

    let className = `canopy-video`
    if (playing) {
      className = `canopy-video canopy-video-active`
    }

    if (source) {
      return (
          <div className={className}>
            <AspectRatio.Root ratio={16/9}>
              <video
                controls
                ref={this.video}
                onPlay={this.handlePlay}
                onPause={this.handlePause}
                crossOrigin="anonymous"
                controlsList="nodownload"
              >
                {this.renderSource(source, format)}
                {this.renderTracks(tracks)}
              </video>
              {this.renderBackground(format, image)}
            </AspectRatio.Root>
          </div>
      )

    } else {
      return null
    }
  }
}

export default Video
