import React, { Component, createRef } from "react"

class NavigatorPanel extends Component {
  constructor(props) {
    super(props);

    this.state ={
      activeIndex: null,
      nextIndex: null
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
        this.updateSequenceScroll(activeIndex)
      }
    }

    return activeIndex
  }

  updateSequenceScroll = (nextIndex) => {
    let selector = `#p${this.props.index}s${nextIndex}`
    let target = this.sequence.current.querySelector(selector);
    let diff = target.offsetTop - target.offsetParent.offsetTop
    this.sequence.current.scrollTop = diff
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

    const {data, time} = this.props

    return (
      <div ref={this.sequence}
           className="canopy-sequence">
        {this.renderSequence(data.sequence, time)}
      </div>
    )
  }
}

export default NavigatorPanel;
