import React, { Component } from 'react';
import MetadataElement from "./MetadataElement"

class Description extends Component {
  constructor(props) {
    super(props);
  }


  handleMetadata () {
    const metadata = this.props.node.metadata
    return (metadata.map(function(element){
      return (
        <MetadataElement element={element}
                         language='en'
        />
      )
    }
    ));
  }

  handleRequiredStatement () {
    return (
        <MetadataElement element={this.props.node.requiredStatement}
                         language='en'
        />
    )
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
