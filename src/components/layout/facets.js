import * as React from "react"
import Facet from "../canopy/Facet"

const Facets = () => (
  <div className="canopy-about">
    <div className="canopy-about--panel">
      <Facet label="Subject" />
      <Facet label="Narrator Role" />
      <Facet label="Place" />
      <Facet label="Interviewer" />
      <Facet label="Interviewee" />
      <Facet label="Format" />
    </div>
  </div>
)

export default Facets
