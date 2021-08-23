import React, { Component } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { BiChevronDown } from "react-icons/bi"
import { StaticQuery, graphql } from "gatsby"
import FacetContent from "./FacetContent"

class Facet extends Component {

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
            <FacetContent data={data}
                          label={label} />
          )
        }
      />
    )
  }

  render() {

    const {label, dropdown} = this.props

    if (dropdown) {
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
    } else {
      return (
        <div className="canopy-control--item">
          <span>{label}</span>
          <div>{this.renderContent(label)}</div>
        </div>
      )
    }
  }
}

export default Facet;
