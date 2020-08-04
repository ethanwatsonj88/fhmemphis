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
    <div>
      <h2>Send us your name and email, and we'll have Steve or David contact you.</h2>
      <form className="contact-form" onSubmit={sendEmail}>
        <input type="hidden" name="contact_number" />
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>A good time to contact you (Optional)</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </div>
  );
}