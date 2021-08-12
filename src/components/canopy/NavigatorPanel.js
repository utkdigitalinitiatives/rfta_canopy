import React, { Component } from 'react';

class NavigatorPanel extends Component {
  constructor(props) {
    super(props);

    this.state ={
      activeIndex: 0
    }
  }

  handleClick = (event) => {
    this.props.updateTime(parseInt(event.currentTarget.dataset.time))
  }

  renderSequence = (sequence, time) => {
    let component = this;
    return sequence.map(function(item) {

      let classes = ''
      if (time >= item.t.start && time < item.t.end) {
        classes = 'active'
      }

      return (
        <a className={classes}
           href={`#t=${item.t.start}`}
           data-time={item.t.start}
           onClick={component.handleClick}>
          <strong>{item.t.label}</strong>
          <em>{item.label}</em>
        </a>
      )
    });
  }

  render() {

    const {data, time} = this.props

    return (
      <div className="canopy-sequence">
        {this.renderSequence(data.sequence, time)}
      </div>
    )
  }
}

export default NavigatorPanel;
