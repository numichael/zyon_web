import React, {useRef} from 'react'
import "./Contact.css"
import { contacts } from '../../data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Contact = () => {
  const container = useRef(null)
          useGSAP(() => {
            const timeline = gsap.timeline({
              delay: .1,
              scrollTrigger: {
                trigger: container.current,
                start: "20% bottom",
                end:"bottom top",
              }
            })
            timeline
              .fromTo(
                ".contact_form",
                { x: 100, opacity: 0 },
                {opacity:1,x:0}
            )
              .fromTo(
                ".option",
                { x:100, opacity:0},
                {opacity:1,stagger:.1,x:0}
            )
              
        },{scope:container})
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
          <div className="contact_form_middle">
            <div className="row">
              <input type="text" placeholder='First name' name='firstname' className='control' />
              <input type="text" placeholder='Last name' name='lastname' className='control' />
            </div>
            <div className="row">
              <input type="email" placeholder='Email address' name='email' className='control' />
              <input type="tel" placeholder='Phone number' name='phone' className='control' />
            </div>
            <textarea name="message" cols={25} rows={10} placeholder='Message' className='control'></textarea>
          </div>
          <div className="contact_form_bottom">
            <button className="btn btn_primary">Send Now</button>
          </div>
        </div>
        <div className="contact_options">
          {
            contacts.map((contact, index) => (
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
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Contact
