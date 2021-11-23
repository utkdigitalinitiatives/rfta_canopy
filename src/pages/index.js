import * as React from "react"

import Layout from "../components/layout/layout"
import Seo from "../components/layout/seo"
import BrowseRow from "../components/layout/BrowseRow"


const Browse = ({ location }) => {
  const narratorRoles = {
    title: "Narrator Role",
    subheadings: [
      {
        altText: "Image of medical personnel",
        image: "",
        path: "",
        subtitle: "Medical Personnel & First Responders",
        key: "1",
      },
      {
        altText: "Image of Fire and Forestry Experts",
        image: "",
        path: "Narrator%20Role:Fire%20and%20forestry%20experts",
        subtitle: "Fire and Forestry Experts",
        key: "2",
      },
      {
        altText: "Image of Individuals Directly Affected by the Fire",
        image: "",
        path: "",
        subtitle: "Individuals Directly Affected by the Fire",
        key: "3",
      },
      {
        altText: "Image of Business Owners or Staff",
        image: "",
        path: "Narrator%20Role:Business%20owners%20and%20staff",
        subtitle: "Business Owners or Staff",
        key: "4",
      },
      {
        altText: "Image of Recovery Specialists ",
        image: "",
        path: "Narrator%20Role:Recovery%20specialists",
        subtitle: "Recovery Specialists ",
        key: "5",
      },
      {
        altText: "Image of Educators and Public or Government officials or employees",
        image: "",
        path: "",
        subtitle: "Educators and Public or Government officials or employees",
        key: "6",
      },
      {
        altText: "Image of Journalists",
        image: "",
        path: "Narrator%20Role:Journalists",
        subtitle: "Journalists",
        key: "7",
      },
      {
        altText: "Image of Meterologists & Environmentalists",
        image: "",
        path: "",
        subtitle: "Meterologists & Environmentalists",
        key: "8",
      },
    ]
  }

  const topics = {
    title: "Topic",
    subheadings: [
      {
        altText: "Image of Evacuations of Civilians",
        image: "",
        path: "Subject:Evacuation%20of%20civilians",
        subtitle: "Evacuations of Civilians",
        key: "1",
      },
      {
        altText: "Image of Emergency Management",
        image: "",
        path: "",
        subtitle: "Emergency Management",
        key: "2",
      },
      {
        altText: "Image of Disaster Response & Recovery",
        image: "",
        path: "",
        subtitle: "Disaster Response & Recovery",
        key: "3",
      },
      {
        altText: "Image of Ecology",
        image: "",
        path: "",
        subtitle: "Ecology",
        key: "4",
      },
    ]
  }

  const locations = {
    title: "Location",
    subheadings: [
      {
        altText: "Image of Great Smoky Mountains National Park",
        image: "",
        path: "Place:Great%20Smoky%20Mountains%20National%20Park%20(N.C.%20and%20Tenn.)",
        subtitle: "Great Smoky Mountains National Park",
        key: "1",
      },
      {
        altText: "Image of Arrowmont School of Arts & Crafts",
        image: "",
        path: "Place:Arrowmont%20School%20of%20Arts%20and%20Crafts",
        subtitle: "Arrowmont School of Arts & Crafts",
        key: "2",
      },
      {
        altText: "Image of Dollywood, Pigeon Forge, TN",
        image: "",
        path: "Place:Dollywood%20(Pigeon%20Forge,%20Tenn.)",
        subtitle: "Dollywood, Pigeon Forge, TN",
        key: "3",
      },
      {
        altText: "Image of Gatlinburg, Sevierville and Pittman Center",
        image: "",
        path: "",
        subtitle: "Gatlinburg, Sevierville and Pittman Center",
        key: "4",
      },
    ]
  }

  return (
    <Layout location={location}>
      <Seo title="Browse all Chimney Tops 2 Fire Resources" />
      <div className= "text-center text-lg-start px-3 px-md-5 my-4">
        <h2>Browse by Topic</h2>
        <p>Highlights from popular resources, locations, and featured items about the Chimney Tops 2 fires.</p>
      </div>
      <BrowseRow
        data={narratorRoles}
        backgroundClass="grey-background"
      />
      <BrowseRow
        data={topics}
        backgroundClass=""
      />
      <BrowseRow
        data={locations}
        backgroundClass="grey-background"
      />
    </Layout>
  )
}

export default Browse
