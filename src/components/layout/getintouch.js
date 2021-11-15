import * as React from "react"

const GetInTouch = () => {

  return (
      <div className="container-fluid grey-background px-0">
        <div className="row justify-content-center pt-5 mx-3 mx-md-5">
          <div className="col-11 col-md-6 text-center text-md-end pr-md-1">
            <h3>Get In Touch</h3>
            <p>If you would like to share your story, contact us via this form. We would love to add your story to our collection of resources.</p>
          </div>
          <div className="contact-form col-11 col-md-5 pl-md-1 text-center">
            <input className="form-control form-control my-1" type="text" placeholder="Name" aria-label="Name"/>
            <input className="form-control form-control my-1" type="text" placeholder="Email" aria-label="Email"/>
            <textarea className="form-control form-control my-1" type="text" placeholder="Message" aria-label="Name"/>
            <button type="submit" className="btn btn-secondary mt-1">Send</button>
          </div>
        </div>
        <div className="align-items-start py-5 mx-3 mx-md-5 text-center">
          <small><b>Disclaimer / Rights Statement</b><br/>
          <i>The video content provided on this site is not a responsibility of UTK. More information about the rights statementand any additional disclaimers here</i></small>
        </div>
      </div>
  )
}
export default GetInTouch