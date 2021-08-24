import React, { Component, createRef } from "react"

class NavigatorPanel extends Component {
  constructor(props) {
    super(props);

    this.state ={
      activeIndex: null
    }

    this.sequence = createRef()
  }

  handleClick = (event) => {
    this.props.updateTime(parseInt(event.currentTarget.dataset.time))
  }

  renderSequence = (sequence, time) => {
    let component = this;
    return sequence.map(function(item, index) {

      let classes = ''
      if (index === component.state.activeIndex) {
        classes = 'active'
      }

      return (
        <a className={classes}
           id={`p${component.props.index}s${index}`}
           href={`#t=${item.t.start}`}
           data-time={item.t.start}
           onClick={component.handleClick}>
          <strong>{item.t.label}</strong>
          <em>{item.label}</em>
        </a>
      )
    });
  }

  getActiveIndex = () => {
    let activeIndex = null;
    const {data, time} = this.props
    const results = data.sequence.map(function(item, index) {
      if (time >= item.t.start + 0.001 && time < item.t.end) {
        return index
      }
    });

    const result = results.filter(function(val) {
      return val !== undefined;
    });

    if (result.length > 0) {
      activeIndex = result[0]
      if (activeIndex !== this.state.activeIndex) {
        this.updateSequenceScroll(activeIndex, this.sequence.current)
      }
    }

    return activeIndex
  }

  updateSequenceScroll = (activeIndex, sequenceElement) => {
    let selector = `#p${this.props.index}s${activeIndex}`
    let activeItem = sequenceElement.querySelector(selector)
    if (activeItem.offsetParent) {
      let top = activeItem.offsetTop - activeItem.offsetParent.offsetTop
      if (this.props.videoHeight) {
        top = top + this.props.videoHeight + 36
      }
      sequenceElement.scrollTo({
        top: top,
        left: 0,
        behavior: 'smooth'
      });
    }
  }


  componentDidMount() {
    this.interval = setInterval(() => {
      let activeIndex = this.getActiveIndex()
      this.setState({
        activeIndex
      })
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    const {data, time, videoHeight} = this.props

    let style = {height: `100%`}
    if (videoHeight) {
      style = {height: `calc(100% - ${videoHeight}px - 36px) `}
    }

    return (
      <div ref={this.sequence}
           style={style}
           className="canopy-sequence">
        {this.renderSequence(data.sequence, time)}
      </div>
    )
  }
}

export default NavigatorPanel;
