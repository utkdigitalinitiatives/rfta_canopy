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
    const do_not_filter = ['Extent', 'Date', 'Description', 'Descripción', 'Título']
    return multiple_values[this.props.language].map(function(value) {
      if (do_not_filter.includes(the_label)) {
        return (
          <dd>
              {value}
          </dd>
        )
      }
      else {
        return (
          <dd>
            <Link to={`/?filter=${the_label}:${value}`}>
              {value}
            </Link>
          </dd>
        )
      }
    })
  }

  render() {

    return this.parseElement()
  }
}

export default MetadataElement;
