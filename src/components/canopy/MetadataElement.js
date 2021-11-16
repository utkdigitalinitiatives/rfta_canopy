import React, { Component } from 'react';
import { Link } from "gatsby"

class MetadataElement extends Component {

  parseElement () {
    return(
      <>
        <dt>{this.getLabel(this.props.element.label)}:</dt>
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
    let valueArray = multiple_values[this.props.language]
    let lastItemInArray = valueArray[valueArray.length - 1]
    return multiple_values[this.props.language].map(function(value, index) {
      if (do_not_filter.includes(the_label)) {
        return (
          <dd key={index}>
              {value}
          </dd>
        )
      }
      else if (valueArray.length > 1 && value !== lastItemInArray) {
        return (
          <dd key={index}>
            <Link to={`/?filter=${the_label}:${value}`}>
              {value},&nbsp;
            </Link>
          </dd>
        )
      }
      else {
        return (
          <dd key={index}>
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
