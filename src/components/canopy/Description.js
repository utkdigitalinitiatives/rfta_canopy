import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
  }


  handleMetadata () {
    const metadata = this.props.node.metadata
    let description = this
    return (metadata.map(function(element){
      return (
        <>
          <dt>{description.getLabel(element.label)}</dt>
          {description.getValues(element.value.en)}
        </>
      )
    }
    ));
  }

  handleRequiredStatement () {
    return (
      <>
        <dt>{this.props.node.requiredStatement.label.en[0]}</dt>
        <dd>{this.props.node.requiredStatement.value.en[0]}</dd>
      </>
    )
  }

  getLabel (label) {
    return label.en[0]
  }

  getValues(multiple_values) {
    return multiple_values.map(function(value) {
      return <dd>{value}</dd>
    })
  }

  render() {

    return (
      <dl className="canopy-metadata">
        {this.handleMetadata()}
        {this.handleRequiredStatement()}
      </dl>
    )
  }
}

export default Description;
