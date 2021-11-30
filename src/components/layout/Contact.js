import * as React from "react"

const Contact = () => (
  <div className="container-fluid grey-background px-0">
    <div className="row justify-content-center pt-5 mx-3 mx-md-5">
      <div className="col-11 col-md-6 text-center text-md-end pr-md-1">
        <h3>Get In Touch</h3>
        <p>If you would like to share your story, contact us via this form. We would love to add your story to our collection of resources.</p>
      </div>
      <div className="contact-form col-11 col-md-5 pl-md-1 text-center">
        <form name="Rising From The Ashes Contact Form" method="post" netlify-honeypot="bot-field" data-netlify="true">
          <input type="hidden" name="form-name" value="Rising From The Ashes Contact Form" />
          <input type="hidden" name="bot-field" />
          <input className="form-control form-control my-1" type="text" placeholder="Name" aria-label="Name" name="name" />
          <input className="form-control form-control my-1" type="text" placeholder="Email" aria-label="Email" name="email" />
          <textarea className="form-control form-control my-1" type="text" placeholder="Message" aria-label="Message" name="message" />
          <button type="submit" className="btn btn-primary mt-1 mx-2">
            Submit
          </button>
          <input className="btn btn-secondary mt-1 mx-2" type="reset" value="Clear" />
        </form>
      </div>
    </div>
    <div className="align-items-start pt-5 mx-3 mx-md-5 text-center">
      <small>
        <i>Images used on the site are either in the Public Domain or are used by permission from Knoxville-area photographer Bruce McCamish.</i>
      </small>
    </div>
    <div className="align-items-start py-5 mx-3 mx-md-5 text-center">
      <small>
        <b>Disclaimer / Rights Statement</b><br />
        <i>The Rising from the Ashes Oral History Project collects personal accounts of the Chimney Tops 2 Wildfires of 2016, and The University of Tennessee holds no liability for statements made in the recordings. These accounts reflect the opinions of the narrators, and thus they are subjective and should not be considered verified or comprehensive. Oral history interviews may be used alongside other primary and secondary source materials to gain a fuller understanding of historical events.</i>
      </small>
    </div>
  </div>
)

export default Contact
