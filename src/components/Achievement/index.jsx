import React, { useEffect, useRef } from 'react'
import "./Achievement.css"
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import { FaMicrosoft } from 'react-icons/fa'
import { SiAmazonaws, SiApple, SiCisco, SiDell, SiHp } from 'react-icons/si'

const Achievement = () => {
  const container = useRef(null)
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setClients(120);
      setProjects(150);
      setTeams(44);
      setAwards(89);
    }, 3000);
    
    return () => clearTimeout(timeOutId);
  }, [])


  useGSAP(() => {
    const timeline = gsap.timeline();
    timeline.from(
      ".achievement",
      {
        delay: .2,
        x: 100,
        stagger: .3,
        opacity:0,
      }
    )
  },{scope:container})
  return (
    <div className="achievement_container" ref={container}>
      {/* Start Partner */}
      <div className="achievement">
        <div className="icon_container">
          <FaMicrosoft />
        </div>
        <h3>Microsoft</h3>
      </div>
      {/* End Partner */}
      
      {/* Start Partner */}
      <div className="achievement">
        <div className="icon_container">
          <SiHp />
        </div>
      <h3>Hewlett-Packard</h3>
      </div>
      {/* End Partner */}
      {/* Start Partner */}
      <div className="achievement">
        <div className="icon_container">
          <SiCisco />
        </div>
      <h3>Cisco</h3>
      </div>
      {/* End Partner */}
      {/* Start Partner */}
      <div className="achievement">
        <div className="icon_container">
          <SiAmazonaws />
        </div>
      <h3>AWS</h3>
      </div>
      {/* End Partner */}

      {/* Start Partner */}
      <div className="achievement">
        <div className="icon_container">
          <SiApple />
        </div>
        <h3>Apple</h3>
      </div>
      {/* End Partner */}

      {/* Start Partner */}
      <div className="achievement">
        <div className="icon_container">
          <SiDell />
        </div>
        <h3>Dell</h3>
      </div>
      {/* End Partner */}
    </div>
  )
}

export default Achievement
