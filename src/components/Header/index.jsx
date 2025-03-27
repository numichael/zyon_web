import React,{useRef} from 'react';
import './Header.css';
import { hero } from '../../assets';
import { Link } from 'react-scroll';
import Achievement from '../Achievement';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

const Header = () => {
  const container = useRef(null);

  useGSAP(() => {
    const timeline = gsap.timeline({ delay: .3, stagger: .3 });
    
    timeline
      .fromTo(
        ".image_container",
        { scale: .5, opacity: 0, y: 150 },
        { scale: 1, ease: 'sine.in', opacity: 1, y: 0 }
      )
      .from(
        ".title",  // ✅ Correct class selector
        { opacity: 0, y: -30 },
        "-=0.3"  // Starts a little earlier for smoother animation
      )
      .from(
        ".description",  // ✅ Correct class selector
        { opacity: 0, y: -30 },
        "-=0.2"
      )
      .from(
        ".buttons_container",  // ✅ Correct class selector
        { opacity: 0, y: 40 }
      );
  }, { scope: container });

  return (
    <header id='header' ref={container}>
      <div className="container full_height">
        <div className="row">
          <div className="column">
            <h1 className="title">
              Managed IT Services,{" "}
              <span className="g-text">for the modern business.</span>
            </h1>
            <p className="text_muted description">
              Your trusted partner for IT procurement, cloud solutions, technical support, and digital transformation.
              <br />We don’t just deliver services — we help your business grow, and scale with technology that works for you.
            </p>
            <div className="buttons_container">
              <Link to="services" smooth={true} className="btn">Our Services</Link>
              <Link to="contact" smooth={true} className="btn btn_primary">Contact Us</Link>
            </div>
          </div>
          <div className="column">
            <div className="image_container">
              <img src={hero} alt="managed IT solutions" />
            </div>
          </div>
        </div>
        <Achievement />
      </div>
    </header>
  );
}

export default Header;
