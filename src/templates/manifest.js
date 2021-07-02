import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Viewer from "../components/viewer"
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
        <Viewer id={id}
                node={node}
                manifestId={manifestId} />
        <div className="canopy-details">
          <Tabs.Root className="canopy-tabs" defaultValue="details">
            <Tabs.List className="canopy-tabs--list">
              <Tabs.Trigger value="details">Details</Tabs.Trigger>
              <Tabs.Trigger value="transcript">Transcript</Tabs.Trigger>
              <Tabs.Trigger value="translation">Translation</Tabs.Trigger>
            </Tabs.List>
            <div className="canopy-tabs--content">
              <Tabs.Content value="details">{getValue(summary, 'en')}</Tabs.Content>
              <Tabs.Content value="transcript">[full transcript]</Tabs.Content>
              <Tabs.Content value="translation">[translations?]</Tabs.Content>
            </div>
          </Tabs.Root>
        </div>
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
