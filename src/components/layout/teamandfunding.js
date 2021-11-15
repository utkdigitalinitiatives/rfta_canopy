import * as React from "react"
import BlankPerson from "../../images/blank-person.jpeg"

const TeamAndFunding = () => {

  return (
      <div className="container-fluid px-0 my-5">
        <div className= "text-center mx-3 mx-lg-5">
          <h3>Our Team & Funding</h3>
          <p>Thanks for all the hard work that went into bringing this project together</p>
        </div>
        <div className="row align-items-start mx-3 mx-lg-5">
          <div className="col-12 col-sm-6 col-md-3 px-0 text-center">
            <div className="p-5">
              <img src={BlankPerson} className="team-image img-fluid rounded-circle border" alt="img"/>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 px-0 text-center">
            <div className="p-5">
              <img src={BlankPerson} className="team-image img-fluid rounded-circle border" alt="img"/>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 px-0 text-center">
            <div className="p-5">
              <img src={BlankPerson} className="team-image img-fluid rounded-circle border" alt="img"/>
            </div>
          </div>
          <div className="col-12 col-sm-6 col-md-3 px-0 text-center">
            <div className="p-5">
              <img src={BlankPerson} className="team-image img-fluid rounded-circle border" alt="img"/>
            </div>
          </div>
        </div>
        <div className= "text-center mx-3 mx-lg-5 mt-5">
          <h6>Additionally, we would like to acknowledge the generosity of the donors who helped make this project happen.</h6>
        </div>
        <div className= "row align-items-center text-center mx-3 mx-lg-5 mt-3">
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <p><i>Donor or Funder Name</i></p>
          </div>
        </div> 
      </div>
  )
}
export default TeamAndFunding