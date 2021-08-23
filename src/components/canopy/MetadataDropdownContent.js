import React, { Component } from 'react';
import { countBy } from 'lodash';
import MetadataDropdownContentItem from "./MetadataDropdownContentItem"
import { cleanString } from "../../utilities/string"

class MetadataDropdownContent extends Component {

  renderContentItems = (data, label) => {
    let values = []
    for (const result of data.allManifests.edges) {
      for (const elemMatch of result.node.metadata) {
        if (elemMatch.label.en[0] === label) {
          for (const string of elemMatch.value.en) {
            values.push(string)
          }
        }
      }
    }
    values.sort();
    const content = countBy(values)
    return Object.keys(content).map((value, index) => {
      const id = cleanString(label) + '-' + index;
      return (
        <MetadataDropdownContentItem value={value}
                                     count={content[value]}
                                     id={id}
                                     key={index} />
      )
    })
  }

  render() {

    const {data, label} = this.props

    return (
      this.renderContentItems(data, label)
    )

  }

}

export default MetadataDropdownContent;