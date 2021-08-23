import React, { Component } from 'react';
import * as Checkbox from '@radix-ui/react-checkbox';

class FacetContentItem extends Component {

  render() {

    const {value, count, id} = this.props

    return (
      <span className="canopy-facet-item">
        <Checkbox.Root aria-labelledby={id}>
          <Checkbox.Indicator />
        </Checkbox.Root>
        <label id={id}>
          <em>{count}</em>
          <strong>{value}</strong>
        </label>
      </span>
    )
  }

}

export default FacetContentItem;
