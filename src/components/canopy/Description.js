import React, { Component } from 'react';
import MetadataElement from "./MetadataElement"
import Rights from "./Rights"

class Description extends Component {

  handleMetadata () {
    const metadata = this.props.node.metadata
    return (metadata.map(function(element, index){
      return (
        <div className="metadata-group d-flex py-2" key={index}>
          <MetadataElement  element={element}
                            language='en'
          />
        </div>
      )
    }
    ));
  }

  handleRequiredStatement () {
    return (
      <div className="metadata-group d-flex py-2">
        <MetadataElement  element={this.props.node.requiredStatement}
                          language='en'
        />
      </div>
    )
  }

  handleRights () {
    return (
      <div className="metadata-group d-flex pt-2">
        <Rights rights={this.props.node.rights}/>
      </div>
    )
  }

  render() {

    return (
      <dl className="canopy-metadata px-5 pt-3">
        {this.handleMetadata()}
        {this.handleRequiredStatement()}
        {this.handleRights()}
      </dl>
    )
  }
}

export default Description;
