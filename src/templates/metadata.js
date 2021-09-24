import React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { graphql, Link } from "gatsby"

const Metadata = ({ data }) => {

  const { label, values } = data.allMetadata.edges[0].node

  return (
    <Layout>
      <Seo title="Home" />

      <h1>{label}</h1>
      <main className="canopy-browse">
        {values.length ? (
          values.map(result => {
            return (
              <article>
                <div>
                  <h2>{result.label}</h2>
                  {result.manifests.map(manifest => {
                    return (
                      <div>
                        <Link to={`/${manifest.slug}`}>
                          {manifest.label.en[0]}
                        </Link>
                      </div>
                    )
                  })}
                </div>
              </article>
            )
          })
        ) : (
          <div className="canopy-no-results">
            <span>No Results</span>
            <p>
              Nothing found for {label}.
            </p>
          </div>
        )}
      </main>
    </Layout>
  )
}

export default Metadata

export const metadataQuery = graphql`
  query allMetadata($id: String) {
    allMetadata(
      filter: {
        id: {
          eq: $id
        }
      }
    ) {
      edges {
        node {
          label
          slug
          values {
            label
            slug
            manifests {
              id
              slug
              label {
                en
              }
              manifestId
            }
          }
        }
      }
    }
  }
`
