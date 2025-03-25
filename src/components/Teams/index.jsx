import React, { useRef } from 'react'
import "./Teams.css"
import { teams } from '../../data';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Teams = () => {
  const container = useRef(null)
  useGSAP(() => {
    const timeline = gsap.timeline({
      delay: .3,
      scrollTrigger: {
        trigger: container.current,
        start: "20% bottom",
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
        ".team_card",
        { x:100, opacity:0},
        {opacity:1,stagger:.3, x:0}
    )
      
},{scope:container})
  return (
    <section id='team' ref={container}>
      <div className="container">
        <h1 className="title">
          Meet <span className="g-text">Our Team</span>
        </h1>
        <h3 className="sub_title">
          Meet the Experts Driving Innovation and Delivering Results
        </h3>
        <div className="teams_container">
          {teams.map((team, index) => (
            <div className="team_card" key={index}>
              <div className="profile_container">
                <img src={team.profile} alt={team.name} />
              </div>
              <div className="details">
                <h3 className="name">{team.name}</h3>
                <p className="text_muted">{team.title}</p>
                <div className="social_container">
                  {team.social.map((item, i) => (
                    <a
                      href={item.url || "#"}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='icon_container'
                      key={i}
                    >
                      {item.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;