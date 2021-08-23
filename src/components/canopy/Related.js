import React, { Component } from 'react';
import DigitalObject from "./DigitalObject"
import Layout from "../layout/layout"

class Related extends Component {
  constructor(props) {
    super(props);
  }

  relatedItem = (item) => {
    return (
      <figure>
        <div>

        </div>
        <figcaption>{item}</figcaption>
      </figure>
    )
  }

  relatedItems = (items) => {
    return items.map ((item) => {
      return <li className="canopy-related-item">{this.relatedItem(item)}</li>
    })
  }

  relatedRow = (label) => {
    return (
      <div className="canopy-related-row">
        <span>{label}</span>
        <ul>
          {this.relatedItems(["Item A", "Item B", "Item C", "Item D"])}
        </ul>
      </div>
    )
  }

  render() {

    return (
      <div className="canopy-related">
        <h2>Related Items</h2>
        {this.relatedRow('Evacuation of civilians')}
        {this.relatedRow('Pi Beta Phi Elementary School')}
        {this.relatedRow('More Video Interviews')}
      </div>
    )
  }
}

export default Related;
