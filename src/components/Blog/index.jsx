import React,{useRef} from 'react'
import "./Blog.css"
import {blogs} from '../../data'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';
import ScrollTrigger from "gsap/dist/ScrollTrigger"
gsap.registerPlugin(ScrollTrigger)

const Blog = () => {
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
              ".blog_card",
              { y:100, opacity:0},
              {opacity:1,stagger:.3,y:0}
          )
            
      },{scope:container})
  
  return (
    <section id="blog">
      <div className="container" ref={container}>
        <h1 className="title">
        <span className="g-text">Tech Insights</span>
        </h1>
        <h3 className="sub_title">Articles, guides, and tips to help your business thrive.</h3>
        <div className="blogs_container">
          {blogs.map((blog, index) => (
            <div className="blog_card" key={index}>
           
              <div className="picture">
                <img src={blog.image} alt="" />
              </div>
              <div className="details">
                <h3>{blog.title}</h3>
                <div className="buttons_container">
                 
                  <button className="btn">
                   <a href={blog.link}
                  target="_blank">Read more</a>
                  
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Blog
