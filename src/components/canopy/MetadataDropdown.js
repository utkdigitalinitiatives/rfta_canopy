import React, { Component } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { BiChevronDown } from "react-icons/bi"
import { StaticQuery, graphql } from "gatsby"
import MetadataDropdownContent from "./MetadataDropdownContent"

class MetadataDropdown extends Component {

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

export default MetadataDropdown;
