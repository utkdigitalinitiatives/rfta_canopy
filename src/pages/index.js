import React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import BrowseRow from "../components/layout/BrowseRow"

const Browse = ({ location }) => (
  <Layout location={location}>
    <Seo title="Browse all Chimney Tops 2 Fire Resources" />
    <div className= "text-center text-lg-start px-3 px-md-5 my-4">
      <h2>Browse by Topic</h2>
      <p>Highlights from popular resources, locations, and featured items about the Chimney Tops 2 fires.</p>
    </div>
    <BrowseRow
      dataType='narratorRoles'
      backgroundClass="grey-background"
    />
    <BrowseRow dataType='topics' />
    <BrowseRow
      dataType='locations'
      backgroundClass="grey-background"
    />
  </Layout>
)

export default Browse
