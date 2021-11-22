import React, { Component } from 'react';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { BiChevronDown } from "react-icons/bi"
import { StaticQuery, graphql } from "gatsby"
import FacetContent from "./FacetContent"
import FacetCollapse from "./FacetCollapse"

class Facet extends Component {

  renderContent(label, float) {
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
                          float={float}
                          label={label} />
          )
        }
      />
    )
  }

  render() {

    const {label, dropdown} = this.props
    // this displays the facets in a dropdown list. pass the prop dropdown=true to the Facet component
    if (dropdown) {
      return (
        <div className="canopy-form-item canopy-form-item-dropdown">
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <span>{label}</span>
              <BiChevronDown />
            </DropdownMenu.Trigger>
            <DropdownMenu.Content avoidCollisions={false}>
              {this.renderContent(label, true)}
            </DropdownMenu.Content>
          </DropdownMenu.Root>
        </div>
      )
    } else {
      // this displays the facets as a collapsed list.
      return (
        <div className="canopy-control-item">
          <FacetCollapse  label={ label } 
                          renderContentForLabel={this.renderContent(label, true)}/>
        </div>
      )
    }
  }
}

export default Facet;
