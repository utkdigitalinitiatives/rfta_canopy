import * as React from "react"
import Facet from "../canopy/Facet"

const Facets = () => (
  <div className="canopy-about">
    <div className="canopy-about--panel">
      <Facet label="Subject" type="list" />
      <Facet label="Narrator Role" type="list" />
      <Facet label="Place" type="list" />
      <Facet label="Interviewer" type="list" />
      <Facet label="Interviewee" type="list" />
      <Facet label="Format" type="list" />
    </div>
  </div>
)

export default Facets
