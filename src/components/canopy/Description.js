import React, { Component } from 'react';
import MetadataElement from "./MetadataElement"
import Rights from "./Rights"

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

  handleRights () {
    return <Rights rights={this.props.node.rights}/>
  }

  render() {

    return (
      <dl className="canopy-metadata">
        {this.handleMetadata()}
        {this.handleRequiredStatement()}
        {this.handleRights()}
      </dl>
    )
  }
}

export default Description;
