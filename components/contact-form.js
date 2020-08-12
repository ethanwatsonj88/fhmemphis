import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

  let submitted = false;

  function sendEmail(e) {
    e.preventDefault();

    var template_params = {
    }

    var service_id = "default_service";
    var template_id = "cigna_oscar";

    emailjs.sendForm(service_id, template_id, e.target, "user_DspcNmpeOPGCFHp8tNlD4")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
    submitted = true;
  }

  return (
    <div className="contact-form" id="contact-form">
      <h2 className="contact-title">Ready to get started?</h2>
      <p className="contact-description">Send us your name and email, and we'll have David Deaderick or Steve Lester contact you. You can also call them at 901-692-8688 at your convenience.</p>
      <form className="" onSubmit={sendEmail}>
        <input className="contact-form-input" type="hidden" name="contact_number" />
        
        <label className="contact-form-label">Business Name:&nbsp;</label>
        <input className="contact-form-input" type="text" name="business_name" />
        
        <label className="contact-form-label">Business ZIP code:&nbsp;</label>
        <input className="contact-form-input" type="text" name="zip_code" />
        
        <label className="contact-form-label">Number of employees:&nbsp;</label>
        <input className="contact-form-input" type="text" name="num_employees" />

        <label className="contact-form-label">Business Email:&nbsp;</label>
        <input className="contact-form-input" type="email" name="business_email" />

        <label className="contact-form-label">Desired start date:&nbsp;</label>
        <input className="contact-form-input" type="date" name="start_date" />

        <label className="contact-form-label">A good time to contact you (Optional)&nbsp;</label>
        <input className="contact-form-input" type="text" name="message" />
        <input className="contact-form-button" type="submit" value="Send" onClick={handleClick}/>
      </form>
      {/*<div>
          {submitted ? (
            <p>done</p>
          ) : (
            <p>not done</p>
          )}
        </div>  */}
    </div>

    
        );
}