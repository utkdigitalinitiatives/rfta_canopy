import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import ProjectSummary from "../components/layout/project-summary"
import TeamAndFunding from "../components/layout/teamandfunding"
import GetInTouch from "../components/layout/getintouch"


const About = ({ location }) => {

  return (
    <Layout location={location}>
      < Seo title="About Rising from the Ashes" />
      <div className= "text-center text-lg-start mx-3 mx-md-5 my-4">
        <h2>About the Project: Hero text/heading here</h2>
      </div>
      < ProjectSummary />
      < TeamAndFunding />
      < GetInTouch />
    </Layout>
  )
}
export default About
