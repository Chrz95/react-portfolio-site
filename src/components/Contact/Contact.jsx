import React from 'react'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md';
import { RiMessengerLine } from 'react-icons/ri';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();

  function sendEmail (e) {
    e.preventDefault();

    const service_id = "service_yigvvwg"
    const template_id = "template_fxzbkpa"
    const public_key = "T6sKf9WLxbtROvZEq"

    emailjs.sendForm(service_id, template_id, form.current, public_key)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>chrz1995@gmail.com</h4>
            <a href="mailto:chrz1995@gmail.com" target="_blank">Send a message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h4>chris.zaharioyd</h4>
            <a href="https://m.me/chris.zaharioyd" target="_blank">Send a message</a>
          </article>

        </div>
        {/*END OF CONTACT OPTIONS*/}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit'  className='btn btn-primary'>Send message</button>
        </form>

      </div>
    </section>
  )
}

