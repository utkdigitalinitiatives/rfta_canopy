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
    const { label } = this.props
    // this displays the facets as a collapsed list.

    return (
      <div className="canopy-control-item">
        <FacetCollapse  label={ label } 
                        renderContentForLabel={this.renderContent(label, true)}/>
      </div>
    )
  }
}

export default Facet;
