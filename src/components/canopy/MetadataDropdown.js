import React, { Component } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { BiChevronDown } from "react-icons/bi"
import { StaticQuery, graphql } from "gatsby"
import { countBy } from 'lodash';

class MetadataDropdown extends Component {
  constructor(props) {
    super(props);
  }

  renderContent(label) {
    return (
      <StaticQuery
        query={graphql`
                query {
                  allManifests {
                    edges {
                      node {
                        metadata {
                          label {
                            en
                          }
                          value {
                            en
                          }
                        }
                      }
                    }
                  }
                }
              `}
        render = {
          data => (
            <MetadataDropdownContent data={data}
                                     label={label} />
          )
        }
      />
    )
  }

  render() {

    const {label} = this.props

    return (
      <div className="canopy-control--item canopy-control--item-dropdown">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <span>{label}</span>
            <BiChevronDown />
          </DropdownMenu.Trigger>
          <DropdownMenu.Content>
            {this.renderContent(label)}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    )
  }
}

const MetadataDropdownContent = ({ data, label }) => {
  let values = []
  const counts = {}
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
  return Object.keys(content).map((value) => {
    return <MetadataDropdownContentItem value={value} count={content[value]}/>
  });
}

const MetadataDropdownContentItem = ({ value, count }) => {
  return (
    <a>
      <span>{count}</span> {value}
    </a>
  )
}

export default MetadataDropdown;
