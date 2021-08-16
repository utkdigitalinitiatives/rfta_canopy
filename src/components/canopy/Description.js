import React, { Component } from 'react';

class Description extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount () {
    console.log(this.props)
  }

  handleMetadata () {
    return this.props.node.label.en[0]
  }

  handleRequiredStatement () {
    return (<div>
      <dt>{this.props.node.requiredStatement.label.en[0]}</dt>
      <dd>{this.props.node.requiredStatement.value.en[0]}</dd>
    </div>)
  }

  getLabel (label) {
    return label.en[0]
  }

  getValues(multiple_values) {
    return multiple_values.map()
  }

  render() {

    return (
      <div>
        {this.handleMetadata()}
        {this.handleRequiredStatement()}
      </div>
    )
  }
}

export default Description;
