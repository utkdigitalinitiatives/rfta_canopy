import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import FacetContent from "./FacetContent"
import FacetCollapse from "./FacetCollapse"

const Facet = ({ label, type }) => {
  const renderContent = (label, float) => {
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
            <FacetContent
              data={data}
              float={float}
              label={label}
            />
          )
        }
      />
      )
  }

  return (
    <div className="canopy-control-item">
      <FacetCollapse
        label={label}
        renderContentForLabel={renderContent(label, true)}
      />
    </div>
  )
}

export default Facet
