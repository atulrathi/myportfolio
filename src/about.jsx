import React, { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
function About() {
  useEffect(() => {
    gsap.fromTo(
      '#aboutcontainer',
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#aboutcontainer',
          start: 'top 60%',
          end: 'bottom 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div id="aboutcontainer">
      <h1>About Me</h1>
    </div>
  );
}

export default About;