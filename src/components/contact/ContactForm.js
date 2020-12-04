import React from "react";

const FormPage = () => {
return (
  <form className="contact-form" action="https://formspree.io/f/xoqpnold" method="POST">
    <div className="contact-form__group">
      <label for="name">Name</label>
      <input className="contact-form__control" type="text" id="name" name="name" required/>
    </div>
    <div className="contact-form__group">
      <label for="email">Email</label>
      <input className="contact-form__control"  type="email" id="email" name="email" required/>
    </div>
    <div className="contact-form__group">
      <label for="phone">Phone Number</label>
      <input className="contact-form__control"  type="number" id="phone" name="phone" required/>
    </div>
    <div className="contact-form__group">
      <label for="post">Postcode</label>
      <input className="contact-form__control"  type="text" id="post" name="post" required/>
    </div>
    <div className="contact-form__group">
      <label for="message">Message</label>
      <textarea className="contact-form__control"  id="message" name="message" required></textarea>
    </div>
    <div className="contact-form__group">
      <input className="contact-form__btn" type="submit" value="Send" />
    </div>
  </form>

      )
    }

    export default FormPage;