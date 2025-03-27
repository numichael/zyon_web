import React, {useRef} from 'react';
import "./Project.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from '../../data';
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Project = () => {
  const container = useRef(null)
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
          ".slick-slide",
          { x:100, opacity:0},
          {opacity:1,stagger:.1,x:0}
      )
    }, { scope: container })
  
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 2,
    centerMode: true,
    pauseOnHover: true,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  };

  return (
    <section id="project" ref={container}>
      <div className="project-top">
        <h1 className="title">Featured <span className="g-text">Projects</span></h1>
        <h3 className="sub_title">
          Proven IT Projects, Crafted with Innovation and Precision.
        </h3>
      </div>
      <Slider {...settings}>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <div className="box">
              <h1 className="name">{project.title}</h1>
            </div>
            <div className="image_container">
              <img src={project.image} alt={project.title} />
            </div>
            <div className="details">
              <h3 className="name">{project.title}</h3>
              <p className="text_muted description">{project.description}</p>
              <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn">
                  Learn More
                </a>
            </div>
          </React.Fragment>
        ))}
      </Slider>
    </section>
  );
};

export default Project;
