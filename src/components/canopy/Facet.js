import React from 'react'
import { StaticQuery, graphql } from "gatsby"
import FacetContent from "./FacetContent"
import FacetCollapse from "./FacetCollapse"

const Facet = ({ label }) => {
  const renderContent = (label) => {
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
        renderContentForLabel={renderContent(label)}
      />
    </div>
  )
}

export default Facet
