import React, { Component } from 'react';
import { Link } from "gatsby"
import IIIFBadge from "./IIIFBadge"

class DigitalObjectHeader extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {title} = this.props

    return (
      <header>
        <h1>{title}</h1>
        <div>
          <IIIFBadge />
        </div>
      </header>
    )
  }
}

export default DigitalObjectHeader;
