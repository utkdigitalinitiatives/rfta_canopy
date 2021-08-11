import React, { Component } from 'react';

class NavigatorPanel extends Component {
  constructor(props) {
    super(props);
  }

  handleClick (el) {
    console.log(el)
  }

  renderSequence = (sequence, time) => {
    let component = this;
    return sequence.map(function(item) {
      // calculate if active from time val
      let classes = ''
      return (
        <a className={classes}
           onClick={component.handleClick(this)}
           href={`#t=${item.t.start}`}>
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
