import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"


const BrowsePage = ({ data, location }) => {

  return (
    <Layout location={location}>
      <Seo title="Browse all Chimney Tops 2 Fire Resources" />
      <div className= "text-center text-lg-start px-3 px-md-5 my-4">
        <h2>Browse by Topic</h2>
        <p>Highlights from popular resources, locations, and featured items about the Chimney Tops 2 fires.</p>
      </div>
      <div className="row grey-background py-5 px-5">
        <h3 className="section-label mb-4">Narrator Role:</h3>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
      </div>
      <div className="row py-5 px-5 justify-content-center">
        <h3 className="section-label mb-4">Topic:</h3>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
      </div>
      <div className="row grey-background py-5 px-5 justify-content-center">
        <h3 className="section-label mb-4">Location:</h3>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
        <div className="col-11 col-sm-6 col-md-3 px-0">
          <div className="mx-auto my-4" style={{"width":"280px", "height": "150px", "background-color" : "grey"}}></div>
          <p className="text-center">Caption Here</p>
        </div>
      </div>
    </Layout>
  )
}
export default BrowsePage
