import React from 'react';
import emailjs from 'emailjs-com';

export default function ContactUs() {

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

  return (
    <div className="contact-form" id="contact-form">
      <h2><em>Ready to get started?</em> <br />
      Send us your name and email, and we'll have David or Steve contact you.</h2>
      <form className="" onSubmit={sendEmail}>
        <input className="contact-form-input" type="hidden" name="contact_number" />
        <label className="contact-form-label">Your Name:&nbsp;</label>
        <input className="contact-form-input" type="text" name="user_name" />
        <label className="contact-form-label">Your Email:&nbsp;</label>
        <input className="contact-form-input" type="email" name="user_email" />
        <label className="contact-form-label">A good time to contact you (Optional)&nbsp;</label>
        <input className="contact-form-input" type="text" name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}