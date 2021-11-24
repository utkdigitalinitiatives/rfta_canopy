import arrowmont from "../../../images/browse-images/arrowmont.png"
import businessOwners from "../../../images/browse-images/business-owners.png"
import disasterRecovery from "../../../images/browse-images/disaster-recovery-response.png"
import dollywood from "../../../images/browse-images/dollywood.png"
import ecology from "../../../images/browse-images/ecology.png"
import emergencyManagement from "../../../images/browse-images/emergency-management.png"
import evacuationOfCivilians from "../../../images/browse-images/evacuation-of-civilians.png"
import firefighters from "../../../images/browse-images/firefighters.png"
import gatlinburgMap from "../../../images/browse-images/gatlinburg-map.png"
import gatlinburg from "../../../images/browse-images/gatlinburg.png"
import governmentOfficials from "../../../images/browse-images/government-officials-2.png"
import greatSmokyMountains from "../../../images/browse-images/great-smoky-mountains-national-park.png"
import individualsEffectedByFire from "../../../images/browse-images/individuals-effected-by-fire.png"
import journalists from "../../../images/browse-images/journalists.png"
import parkRanger from "../../../images/browse-images/park-ranger-govt-official.png"
import pigeonForge from "../../../images/browse-images/pigeon-forge.png"
import recoverySpecialists from "../../../images/browse-images/recovery-specialists.png"
import unassignedImage from "../../../images/browse-images/unassigned-image-1.png"


const data = {
  narratorRoles: {
    title: "Narrator Role",
    subheadings: [
      {
        altText: "Image of Fire and Forestry Experts",
        image: `${unassignedImage}`,
        subtitle: "Fire and Forestry Experts",
        key: "1",
      },
      {
        altText: "Image of first responders",
        image: `${firefighters}`,
        subtitle: "Medical Personnel & First Responders",
        key: "2",
      },
      {
        altText: "Image of Individuals Directly Affected by the Fire",
        image: `${individualsEffectedByFire}`,
        subtitle: "Individuals Directly Affected by the Fire",
        key: "3",
      },
      {
        altText: "Image of Business Owners or Staff",
        image: `${businessOwners}`,
        subtitle: "Business Owners or Staff",
        key: "4",
      },
      {
        altText: "Image of Recovery Specialists ",
        image: `${recoverySpecialists}`,
        subtitle: "Recovery Specialists ",
        key: "5",
      },
      {
        altText: "Image of Educators and Public or Government officials or employees",
        image: `${governmentOfficials}`,
        subtitle: "Educators and Public or Government officials or employees",
        key: "6",
      },
      {
        altText: "Image of Journalists",
        image: `${journalists}`,
        subtitle: "Journalists",
        key: "7",
      },
      {
        altText: "Image of Meterologists & Environmentalists",
        image: `${parkRanger}`,
        subtitle: "Meterologists & Environmentalists",
        key: "8",
      },
    ]
  },
  topics: {
    title: "Topic",
    subheadings: [
      {
        altText: "Image of Evacuations of Civilians",
        image: `${evacuationOfCivilians}`,
        subtitle: "Evacuations of Civilians",
        key: "1",
      },
      {
        altText: "Image of Emergency Management",
        image: `${emergencyManagement}`,
        subtitle: "Emergency Management",
        key: "2",
      },
      {
        altText: "Image of Disaster Response & Recovery",
        image: `${disasterRecovery}`,
        subtitle: "Disaster Response & Recovery",
        key: "3",
      },
      {
        altText: "Image of Ecology",
        image: `${ecology}`,
        subtitle: "Ecology",
        key: "4",
      },
    ]
  },
  locations: {
    title: "Location",
    subheadings: [
      {
        altText: "Image of Great Smoky Mountains National Park",
        image: `${greatSmokyMountains}`,
        subtitle: "Great Smoky Mountains National Park",
        key: "1",
      },
      {
        altText: "Image of Arrowmont School of Arts & Crafts",
        image: `${arrowmont}`,
        subtitle: "Arrowmont School of Arts & Crafts",
        key: "2",
      },
      {
        altText: "Image of Dollywood, Pigeon Forge, TN",
        image: `${dollywood}`,
        subtitle: "Dollywood, Pigeon Forge, TN",
        key: "3",
      },
      {
        altText: "Image of Gatlinburg, Sevierville and Pittman Center",
        image: `${gatlinburg}`,
        subtitle: "Gatlinburg, Sevierville and Pittman Center",
        key: "4",
      },
    ]
  }
}

export default data
