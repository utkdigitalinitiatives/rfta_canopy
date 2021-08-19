import React, { Component } from 'react';

class MetadataElement extends Component {
  constructor(props) {
    super(props);
  }

  parseElement () {
    return(
      <>
        {this.getLabel(this.props.element.label)}
        {this.getValues(this.props.element.value)}
      </>
    )
  }

  getLabel (label) {
    return <dt>{label[this.props.language][0]}</dt>
  }

  getValues(multiple_values) {
    return multiple_values[this.props.language].map(function(value) {
      return <dd><a href={`/?filter=Topic:${value}`}>{value}</a></dd>
    })
  }

  render() {

    return this.parseElement()
  }
}

export default MetadataElement;
