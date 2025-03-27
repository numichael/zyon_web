import React, {useRef} from 'react'
import "./Services.css"
import { services } from '../../data'
import ServiceCard from './ServicesCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Services = () => {
  const container = useRef(null);
  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: .1,
      scrollTrigger: {
        trigger: container.current,
        start: "top bottom",
        end:"bottom top",
      }
    })
    timeline
      .from(
        ".title",
        {y:-50,opacity:0}
    )
      .from(
        ".sub_title",
        {y:-50,opacity:0}
    )
      .fromTo(
        ".service_card",
        { y:100, opacity:0},
        {opacity:1,stagger:.1,y:0}
    )
      
},{scope:container})
  return (
    <section id='services' ref={container}>
      <div className="container">
        <div className="services_top">
          <h1 className="title">Our <span className="g-text">Services</span></h1>
          <h3 className="sub_title">Driving Business Growth Through Smart IT Solutions.</h3>
        </div>
        <div className="services_container">
          {
            services.map((service, index) => (
              <ServiceCard
                icon={service.icon}
                name={service.name}
                description={service.description}
                key={index}
              />
             ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services
