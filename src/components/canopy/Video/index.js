import React, { useState, useRef, useEffect } from "react"
import { isSafari } from "react-device-detect"
import { Root } from '@radix-ui/react-aspect-ratio'
import Track from "../Track"
import accompanyingCanvas from './accompanyingCanvas'

const Video = ({ items, time, updatedTime }) => {
  const [source, setSource] = useState(null)
  const [format, setFormat] = useState(null)
  const [tracks, setTracks] = useState([])
  const [currentTime, setCurrentTime] = useState(0)
  const [updateTime, setUpdateTime] = useState(null)
  const [playing, setPlaying] = useState(false)
  const [image, setImage] = useState(null)
  const videoRef = useRef()
  const visualizerRef = useRef()
  const didMount = useRef(false)
  const className = `canopy-video ${playing ? `canopy-video-active` : ''}`

  useEffect(() => {
    if (didMount.current) {
      handleUpdate(updatedTime)
    }

    parseItems()
  }, [])

  const renderSource = (src, type) => (
    <source
      src={src}
      type={type}
    />
  )

  const renderTracks = tracks => (
    tracks.map((data, index) => (
      <Track
        data={data}
        key={index}
      />
    ))
  )

  const parseItems = () => {
    if (Array.isArray(items)) {
      const tempItems = items[0].items[0].items

      tempItems.forEach(element => {
        if (element.motivation === 'painting') {
          setSource(element.body[0].id)
          setFormat(element.body[0].format)
        } else if (element.motivation === 'supplementing') {
          element.body.map(item => {
            const track = {
              src: item.id,
              label: item.label[item.language][0],
              srclang: item.language,
            }

            setTracks(tracks => [...tracks, track])
          })
        }
      })

      if (accompanyingCanvas) {
        const src = accompanyingCanvas.items[0].items[0].body.id
        const alt = accompanyingCanvas.label.en[0]
        const image = { src, alt }

        setImage(image)
      }
    }
  }

  const handlePlay = () => {
    const video = videoRef.current

    video.ontimeupdate = event => {
      const tempCurrentTime = event.target.currentTime
      time(tempCurrentTime)

      setCurrentTime(tempCurrentTime)
      setPlaying(true)
    }

    if (!isSafari && format === 'audio/mpeg') {
      audioVisualizer(videoRef.current)
    }
  }

  const handlePause = () => {
    setTimeout(() => {
      if (videoRef.current.paused) {
        setPlaying(false)
      }
    }, 200)
  }

  const handleUpdate = time => {
    if (!time) return

    if (updateTime !== time) {
      videoRef.current.currentTime = time
      setUpdateTime(time)
    }
  }

  const audioVisualizer = (video) => {
    const context = new AudioContext()
    const src = context.createMediaElementSource(video)
    const canvas = visualizerRef.current
    const ctx = canvas.getContext("2d")
    let analyser = context.createAnalyser()
    const bufferLength = analyser.frequencyBinCount
    const dataArray = new Uint8Array(bufferLength)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    src.connect(analyser)
    analyser.connect(context.destination)
    analyser.fftSize = 256

    setInterval(() => {
      renderFrame(analyser, ctx, bufferLength, dataArray, canvas.width, canvas.height)
    }, 20)
  }

  const renderFrame = (analyser, ctx, bufferLength, dataArray, width, height) => {
    const barWidth = (width / bufferLength) * 2.6
    const x = 0
    let barHeight

    analyser.getByteFrequencyData(dataArray)

    ctx.fillStyle = "#000000"
    ctx.fillRect(0, 0, width, height)

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 4

      const r = 26 + (i * 4)
      const g = 114
      const b = 197
      const alpha = 1

      ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + alpha + ")"
      ctx.fillRect(x, height - barHeight, barWidth, barHeight)

      x += barWidth + 6
    }
  }

  const renderFigure = image => {
    if (!image) return

    return (
      <div className="canopy-accompanying-canvas">
        <Root ratio={1}>
          <figure>
            <img src={image.src} alt={image.alt} />
          </figure>
        </Root>
      </div>
    )
  }

  const renderAudioVisualizer = () => (
    <canvas
      id="canopy-audio-visualizer"
      ref={visualizerRef}
    >
    </canvas>
  )


  const renderBackground = (format, image) => {
    if (format !== 'audio/mpeg') return

    return (
      <div className="canopy-video-background">
        {renderFigure(image)}
        {renderAudioVisualizer()}
      </div>
    )
  }

  if (!source) return null

  return (
      <div className={className}>
        <Root ratio={16/9}>
          <video
            controls
            ref={videoRef}
            onPlay={handlePlay}
            onPause={handlePause}
            crossOrigin="anonymous"
            controlsList="nodownload"
          >
            <track kind="captions" />
            {renderSource(source, format)}
            {renderTracks(tracks)}
          </video>
          {renderBackground(format, image)}
        </Root>
      </div>
  )
}

export default Video
