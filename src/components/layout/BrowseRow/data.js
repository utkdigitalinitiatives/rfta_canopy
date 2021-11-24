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

// Browse and Place labels have a title cased value in the metadata
// Narrator Role and Subject labels have a sentence cased value in the metadata
const data = {
  narratorRoles: {
    title: "Narrator Role",
    subheadings: [
      {
        key: "1",
        altText: "Image of Fire and Forestry Experts",
        image: `${unassignedImage}`,
        label: "Narrator Role",
        subtitle: "Fire and Forestry Experts",
        value: "Fire and forestry experts",
      },
      {
        key: "2",
        altText: "Image of first responders",
        image: `${firefighters}`,
        label: "Browse",
        subtitle: "Medical Personnel and First Responders",
        value: "Medical Personnel and First Responders",
      },
      {
        key: "3",
        altText: "Image of Individuals Directly Affected by the Fire",
        image: `${individualsEffectedByFire}`,
        label: "Browse",
        subtitle: "Individuals Directly Affected by the Fire",
        value: "Individuals Directly Affected by the Fire",
      },
      {
        key: "4",
        altText: "Image of Business Owners and Staff",
        image: `${businessOwners}`,
        label: "Narrator Role",
        subtitle: "Business Owners and Staff",
        value: "Business owners and staff",
      },
      {
        key: "5",
        altText: "Image of Recovery Specialists ",
        image: `${recoverySpecialists}`,
        label: "Narrator Role",
        subtitle: "Recovery Specialists ",
        value: "Recovery specialists",
      },
      {
        key: "6",
        altText: "Image of Public or Government Employees",
        image: `${governmentOfficials}`,
        label: "Browse",
        subtitle: "Public or Government Employees",
        value: "Public or Government Employees",
      },
      {
        key: "7",
        altText: "Image of Journalists",
        image: `${journalists}`,
        label: "Narrator Role",
        subtitle: "Journalists",
        value: "Journalists",
      },
      {
        key: "8",
        altText: "Image of Meterologists and Environmentalists",
        image: `${parkRanger}`,
        label: "Browse",
        subtitle: "Meterologists and Environmentalists",
        value: "Meterologists and Environmentalists",
      },
    ]
  },
  topics: {
    title: "Topic",
    subheadings: [
      {
        key: "1",
        altText: "Image of Evacuation of Civilians",
        image: `${evacuationOfCivilians}`,
        label: "Subject",
        subtitle: "Evacuation of Civilians",
        value: "Evacuation of civilians",
      },
      {
        key: "2",
        altText: "Image of Emergency Management",
        image: `${emergencyManagement}`,
        label: "Browse",
        subtitle: "Emergency Management",
        value: "Emergency Management",
      },
      {
        key: "3",
        altText: "Image of Disaster Response and Recovery",
        image: `${disasterRecovery}`,
        label: "Browse",
        subtitle: "Disaster Response and Recovery",
        value: "Disaster Response and Recovery",
      },
      {
        key: "4",
        altText: "Image of Ecology",
        image: `${ecology}`,
        label: "Browse",
        subtitle: "Ecology",
        value: "Ecology",
      },
    ]
  },
  locations: {
    title: "Location",
    subheadings: [
      {
        key: "1",
        altText: "Image of Great Smoky Mountains National Park",
        image: `${greatSmokyMountains}`,
        label: "Place",
        subtitle: "Great Smoky Mountains National Park",
        value: "Great Smoky Mountains National Park (N.C. and Tenn.)",
      },
      {
        key: "2",
        altText: "Image of Arrowmont School of Arts and Crafts",
        image: `${arrowmont}`,
        label: "Place",
        subtitle: "Arrowmont School of Arts and Crafts",
        value: "Arrowmont School of Arts and Crafts",
      },
      {
        key: "3",
        altText: "Image of Dollywood, Pigeon Forge, TN",
        image: `${dollywood}`,
        label: "Browse",
        subtitle: "Dollywood, Pigeon Forge, TN",
        value: "Dollywood, Pigeon Forge, TN",
      },
      {
        key: "4",
        altText: "Image of Gatlinburg, Sevierville and Pittman Center",
        image: `${gatlinburg}`,
        label: "Browse",
        subtitle: "Gatlinburg, Sevierville and Pittman Center",
        value: "Gatlinburg, Sevierville and Pittman Center",
      },
    ]
  }
}

export default data
