import * as React from "react"
import PropTypes from "prop-types"
import { graphql, Link, useStaticQuery } from "gatsby"

const Results = () => {

  const query = useStaticQuery(graphql`
    query ManifestsDataQuery {
      allManifests {
        edges {
          node {
            id
            label {
              en
            }
          }
        }
      }
    }
  `)

  return (
    <div>
      {ShowResults(query.allManifests.edges)}
    </div>
  )
}

const ShowResults = (items) => {
  return items.map((data, index) => {
    return (
      <ul>
        <li>
          <Link to={`/${data.node.id}`}>
            {data.node.label.en[0]}
          </Link>
        </li>
      </ul>
    )
  })
}

export default Results
