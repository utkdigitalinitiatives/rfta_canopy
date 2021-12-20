import React from "react"
import { graphql } from "gatsby"
import { findKeywords, findPeople, findLanguage, determineType, convertDuration } from "../utilities/helpers"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import DigitalObject from "../components/canopy/DigitalObject"

const Manifest = ({ data, location }) => {
  const { node } = data.allManifests.edges[0]

  const schema = {
    "@context": "http://schema.org",
    "@type": determineType(node.metadata),
    "license": node.rights,
    "abstract": node.summary.en[0],
    "description": node.summary.en[0],
    "keywords": findKeywords(node.metadata, "Subject"),
    "name": node.label.en[0],
    "creator": findPeople(node.metadata, "Interviewee"),
    "thumbnailUrl": node.thumbnail[0].id,
    "dateCreated": findKeywords(node.metadata, "Date")[0],
    "uploadDate": findKeywords(node.metadata, "Date")[0],
    "inLanguage": findLanguage(node.metadata),
    "duration": convertDuration(node.metadata),
    "contentUrl": node.items[0].items[0].items[0].body[0].id
  }

  return (
    <Layout location={location}>
      <Seo title={node.label.en[0]} schemaMarkup={schema} description={node.summary.en[0]}/>
      <DigitalObject node={node} />
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
                  label {
                    en
                    es
                  }
                  language
                  id
                  format
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
          rights
          metadata {
            label {
              en
            }
            value {
              en
            }
          }
          thumbnail {
            id        
          }
          transcripts {
            id
            format
            language
            type
            label {
              en
              es
            }
          }
        }
      }
    }
  }
`
