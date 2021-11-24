import * as React from "react"

const ProjectSummary = () => {

  return (
    <div className="container-fluid grey-background px-0 py-5">
      <div className="row mx-4 mx-lg-5">
        <div className="col-12 about-column">
        <p className="lh-lg">
          <div className="about-page-video float-lg-start ratio ratio-16x9 w-50 me-lg-5 mb-5 mb-lg-4">
            <iframe loading="lazy" title="Rising From The Ashes (Trailer)" src="https://www.youtube.com/embed/cF1cIqwWFRA?feature=oembed" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="">
            </iframe>
          </div>
          <h3 className="text-center text-lg-start">Project Summary</h3>
          <br/>
          On November 23, 2016, an uncontained wilderness fire on the summit of Chimney Tops in the Great Smoky Mountains National Park, aided by winds approaching ninety miles-per-hour, jumped the park boundary and descended upon the tourist town of Gatlinburg, wreaking a level of destruction that was later identified as the deadliest wildfire in the eastern US since the 1940s and one of the largest natural disasters in Tennessee history. Fourteen people perished, more than 200 were injured, and thousands were forced to evacuate. Over 17,000 acres were burned and nearly 2,600 buildings and homes were damaged or destroyed. The social, cultural, economic, political, and natural impacts of this event are still being calculated.
          <br/><br/>
          Rising from the Ashes: The Chimney Tops 2 Wildfires Oral History Project is a project led by the University of Tennessee Libraries in collaboration with the City of Gatlinburg and the Anna Porter Public Library. Rising from the Ashes has collected nearly 140 audio and video interviews with individuals who were impacted by or involved in the wildfires. The oral histories include interviews with those who lost homes and businesses, first responders, recovery specialists and representatives from charitable and volunteer organizations, government officials, fire and forestry experts, scientists, artists, lawyers, journalists, clergy, mental health professionals, educators, and many others.  More than 40 of the interviews were recorded by the Anna Porter Public Library in the months following the wildfires and were donated to UT Libraries as part of this project. The interviews are preserved for posterity in the UT Libraries’ Betsey B. Creekmore Special Collections and University Archives.</p>
          </div>
        </div>
    </div>
  )
}
export default ProjectSummary