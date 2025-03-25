import React,{useRef} from 'react'
import "./About.css"
import {about_image} from '../../assets'
import { FaCheck, FaHandPointRight } from 'react-icons/fa'
import { Link } from 'react-scroll'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const About = () => {
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
      .from('.company_photo', {
        x: -40,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      })
      .from('.title', {
        y: -20,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.3')
      .from('.description', {
        y: 20,
        opacity: 0,
        duration: 0.5,
        ease: 'power2.out',
      }, '-=0.3')
      .from(
        ".group",
        {y:50,opacity:0}
    )
      .from('.buttons_container', {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      }, '-=0.4');
    
},{scope:container})
  return (
    <section id='about' ref={container}>
      <div className="container">
        <div className="column company_photo">
        <img src={about_image} alt="ZyonTech" />
        </div>
        <div className="column">
        <h1 className="title">
          <span className="g-text">Who We Are</span>
        </h1>
     
        <p className="text_muted description">
             Zyon Technology Ventures is a leading IT solutions provider committed to helping businesses and individuals succeed in today’s digital world. With years of experience across multiple industries, we specialize in IT procurement, security, cloud services, and technical training.
 <br />Whether you’re a startup or an established organization, our solutions are crafted to enhance efficiency, scalability, and security — ensuring your business stays ahead of the curve.

        </p>
        <div className="group">
          <div className="row">
            <div className="icon_container">
              {/* <FaHandPointRight /> */}
            </div>
            <div className="details">
              <p className="text_muted">Free</p>
              <h3>Consultation</h3>
            </div>
          </div>
          <div className="row">
            <div className="icon_container">
              {/* <FaHandPointRight /> */}
            </div>
            <div className="details">
              <p className="text_muted">Expert</p>
              <h3>Engineers</h3>
            </div>
          </div>
          <div className="row">
            <div className="icon_container">
              {/* <FaHandPointRight /> */}
            </div>
            <div className="details">
              <p className="text_muted">Excellent</p>
              <h3>Customer Support</h3>
            </div>
          </div>
          <div className="row">
            <div className="icon_container">
              {/* <FaHandPointRight /> */}
            </div>
            <div className="details">
              <p className="text_muted">Reliable</p>
              <h3>Products & Services</h3>
            </div>
          </div>
        </div>
        <div className="buttons_container">
          <Link to='project' smooth={true} className='btn'>Explore</Link>
          <Link to='contact' smooth={true} className='btn btn_primary'>Get a quote</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
