import * as React from "react"
import APPLLogo from "../../images/appl-logo.png"
import gatlinburgLogo from "../../images/gatlinburg-logo-dark.png"
import UTKLogo from "../../images/utk-logo.png"

const TeamAndFunding = () => {

  return (
    <div className="container-fluid px-0 my-5">
      <div className= "text-center mx-3 mx-lg-5">
        <h3>Project Partners & Participants</h3>
        <h6>Thanks to everyone who was involved for all of the hard work that went into bringing this project together.</h6>
        <div className= "row align-items-center text-center mx-3 mx-lg-5 mt-5">
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <img src={APPLLogo} className="img-fluid w-75" href="https://www.annaporterpl.org/" alt="Anna Porter Public Library Logo" />
          </div>
          <div className="col-6 col-md-4 px-0 my-1 text-center">
            <img src={UTKLogo} className="img-fluid w-75" href="https://www.utk.edu/" alt="University of Tennessee, Knoxville Logo" />
          </div>
          <div className="col-6 col-md-4 px-0 my-1 mx-auto mt-5 mt-md-0 text-center">
            <img src={gatlinburgLogo} className="img-fluid w-75" href="https://www.gatlinburgtn.gov/" alt="Gatlinburg, Tennessee Logo" />
          </div>
        </div>
      </div>
      <div className="row align-items-center text-center mx-3 mx-lg-5 mt-5">
        <div className="col-12 px-0 my-1 text-center">
          <br/>
        </div>
        <div className="col-12 px-0 my-1 text-center">
          <p><u>Project Participants From UT Libraries:</u></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Jennifer Benedetto Beals</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Emily Gore</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Casey Kaufman</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Steven Escar Smith, PhD</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Holly Mercer</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Laura Romans</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Olivia Kelley</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Ken Wise</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 text-center">
          <p><i>Mark Patrick Baggett</i></p>
        </div>
        <div className="col-6 col-md-4  px-0 my-1 mx-auto text-center">
          <p><i>Meredith Hale</i></p>
        </div>
        <div className="col-6 col-md-4 px-0 my-1 mx-auto text-center">
          <p><i>Drew Edwards</i></p>
        </div>
        <div className="col-6 col-md-4 px-0 my-1 mx-auto text-center">
          <p><i>Christian David Rivera</i></p>
        </div>
        <div className="col-6 col-md-4 px-0 my-1 mx-auto text-center">
          <p><i>Chelsea Jacobs</i></p>
        </div>
        <div className="col-6 col-md-4 px-0 my-1 mx-auto text-center">
          <p></p>
        </div>
        <div className="col-6 col-md-4 px-0 my-1 mx-auto text-center">
          <p></p>
        </div>
      </div> 
      <div className= "row align-items-center text-center mx-3 mx-lg-5 mt-5">
        <div className="col-12 px-0 my-1 text-center">
          <p><u>Project Participants From Anna Porter Public Library:</u></p>
        </div>
        <div className="col-6 px-0 my-1 text-center">
          <p><i>Kaila Clark</i></p>
        </div>
        <div className="col-6 px-0 my-1 text-center">
          <p><i>Kelsey Jones</i></p>
        </div>
        <div className="col-6 col-md-4 px-0 my-1 mx-auto text-center">
          <p></p>
        </div>
      </div>
    </div>
  )
}
export default TeamAndFunding