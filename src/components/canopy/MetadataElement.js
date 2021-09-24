import React, { Component } from 'react';
import { Link } from "gatsby"

class MetadataElement extends Component {
  constructor(props) {
    super(props);
  }

  parseElement () {
    return(
      <>
        <dt>{this.getLabel(this.props.element.label)}</dt>
        {this.getValues(this.props.element.value)}
      </>
    )
  }

  getLabel (label) {
    return label[this.props.language][0]
  }

  getValues(multiple_values) {
    const the_label = this.getLabel(this.props.element.label)
    return multiple_values[this.props.language].map(function(value) {
      return (
        <dd>
          <Link to={`/?filter=${the_label}:${value}`}>
            <header>{value}</header>
          </Link>
        </dd>
      )
    })
  }

  render() {

    return this.parseElement()
  }
}

export default MetadataElement;
