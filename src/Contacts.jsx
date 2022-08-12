import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contacts = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_jwj85mf', 'template_csicw3k', form.current, 'xBNWnEFi7cayJ80mC')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }



  return (
    <>
        <div className="contacts-component" id='contacts'>
        <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name="user_name" />
        <label>Email</label>
        <input type="email" name="user_email" />
        <label>Message</label>
        <textarea className='msg-input' name="message" />
        <input className='btn-send' type="submit" value="Send" />
        </form>
        </div>
    </>
  )
}

export default Contacts