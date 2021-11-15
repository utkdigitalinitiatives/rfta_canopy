import * as React from "react"

const ProjectSummary = () => {

  return (
      <div className="container-fluid grey-background px-0">
        <div className="row pt-5 mx-auto mx-lg-5 justify-content-center justify-content-lg-start">
          <div className="col-11 col-lg-7 text-center text-lg-start">
            <div className="ratio ratio-16x9">
              <iframe loading="lazy" title="Rising From The Ashes (Trailer)" src="https://www.youtube.com/embed/cF1cIqwWFRA?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
              </iframe>
            </div>
          </div>
          <div className="col-11 col-lg-4 pt-5 pt-lg-0 mx-auto">
            <h3 className="text-center text-lg-start">Project Summary Heading</h3>
            <p>Rising from the Ashes: The Chimney Tops II Wildfires Oral History Project is a project led by the University of Tennessee Libraries in collaboration with the City of Gatlinburg and the Anna Porter Public Library.</p>
          </div>
        </div>
        <div className="row justify-content-center justify-content-lg-start pt-2 pb-5 mx-auto mx-lg-5 mt-lg-5">
          <div className="col-11 px-0">
            <p>Rising from the Ashes documents the immediate and ongoing impacts of the 2016 Chimney Tops II wildfires, one of the largest natural disasters in Tennessee history, by recording interviews with individuals who experienced the wildfires or their aftermath. The collection is part of the Betsey B. Creekmore Special Collections and University Archives.</p>
          </div>
        </div>
      </div>
  )
}
export default ProjectSummary