import * as React from "react"
import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import { Link } from "gatsby"


const NotFoundPage = ({ location }) => (
  <Layout location={location}>
    <Seo title="404: Not found" />
    <div className="m-5 text-center text-md-start h-100">
      <h2>404: Not Found</h2>
      <p>You just hit a route that doesn't exist... the sadness.</p>
      <Link href="/">
        <button className="btn btn-primary">
          Back to Browse
        </button>
      </Link>
    </div>
  </Layout>
)

export default NotFoundPage
