import React, { useRef, useState } from 'react';
import { send } from '@emailjs/browser'; // ✅ Correct EmailJS import
import "./Contact.css";
import { contacts } from '../../data';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    send(
      "service_h5u812c",  
      "template_ymg7wc9", 
      {
        from_name: form.firstname + " " + form.lastname, // ✅ Match EmailJS template variables
        from_email: form.email, 
        phone: form.phone,
        message: form.message,
      },
      "M5pADutSG5C36-j-C" // ✅ Ensure correct Public Key
    )
    .then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        alert("Message Sent Successfully!");
        setForm({ firstname: "", lastname: "", email: "", phone: "", message: "" });
      },
      (error) => {
        console.error("FAILED...", error);
        alert("Failed to send message. Check console for errors.");
      }
    );
  };

  const container = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: .1,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end:"bottom top",
      }
    });
    timeline
      .fromTo(".contact_form", { x: 100, opacity: 0 }, { opacity:1, x:0 })
      .fromTo(".option", { x:100, opacity:0 }, { opacity:1, stagger:.1, x:0 });
  }, { scope: container });

  return (
    <section id='contact'>
      <div className="container" ref={container}>
        <div className="contact_form">
          <div className="contact_form_top">
            <h1 className="title">
              <span className="g-text">Ready to Take Your Business Further?</span>
            </h1>
            <p className="text_muted">
              We combine creativity, precision, and technology to deliver solutions that drive growth.
            </p>
          </div>
          <form onSubmit={sendEmail}>
            <div className="contact_form_middle">
              <div className="row">
                <input type="text" placeholder='First Name' name='firstname' className='control' value={form.firstname} onChange={handleChange} required />
                <input type="text" placeholder='Last Name' name='lastname' className='control' value={form.lastname} onChange={handleChange} required />
              </div>
              <div className="row">
                <input type="email" placeholder='Email Address' name='email' className='control' value={form.email} onChange={handleChange} required />
                <input type="tel" placeholder='Phone Number' name='phone' className='control' value={form.phone} onChange={handleChange} required />
              </div>
              <textarea name="message" cols={20} rows={10} placeholder='Message' className='control' value={form.message} onChange={handleChange} required></textarea>
            </div>
            <div className="contact_form_bottom">
              <button type='submit' className="btn btn_primary">Send Message</button>
            </div>
          </form>
        </div>
        <div className="contact_options">
          {contacts.map((contact, index) => (
            <div className="option" key={index}>
              <div className="icon_container">
                {contact.icon}
              </div>
              <h3 className='name'>{contact.name}</h3>
              <h4 className="text_muted">{contact.value}</h4>
              <div>
                <a href={"#"} className='btn btn_primary'>Contact Us</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
