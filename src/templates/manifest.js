import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import Details from "../components/layout/details"
import DigitalObject from "../components/canopy/DigitalObject"
import { getValue } from "../utilities/iiif"
import * as Tabs from "@radix-ui/react-tabs"

const Manifest = ({ data }) => {

  const {node} = data.allManifests.edges[0];

  const {id, manifestId, label, summary} = node;

  return (
    <Layout>
      <Seo title="Home" />

      <article className="canopy-manifest">
        <header>
          <h1>{label.en[0]}</h1>
          <Link to={"/"}>Back to Search</Link>
        </header>
        <DigitalObject node={node}/>
        <Details id={id}
                 node={node} />
        <div className="canopy-related">
          [related items?]
        </div>
      </article>
    </Layout>
  )
}

export default Manifest

export const manifestQuery = graphql`
  query allManifests($id: String) {
    allManifests(
      filter: {
        id: { 
          eq: $id
          }
        }
    ) {
      edges {
        node {
          id
          manifestId
          label {
            en
          }
          summary {
            en
          }
          items {
            items {
              items {
                motivation
                body {
                  id
                }
              }
            }
          }
          structures {
            items {
              label {
                en
              }
              items {
                id
              }
            }
            label {
              en
            }
          }
          requiredStatement {
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
`
