import React, { Component } from 'react';

class MetadataDropdownContentItem extends Component {

  render() {

    const {value, count} = this.props

    return (
      <a href="/">
        <span>{count}</span>
        {value}
      </a>
    )
  }

}

export default MetadataDropdownContentItem;
