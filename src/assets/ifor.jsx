import React, { useEffect } from "react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Info() {
  useEffect(() => {
    gsap.fromTo(
      '#info',
      { y: 10, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: '#info',
          start: 'top 60%',
          end: 'bottom 90%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);
  return (
    <div id="info">
      <p><strong>"</strong> Hi! I’m <b>Atul Rathi,</b> a passionate Web Application Developer based in Delhi, India. Currently pursuing my Bachelor’s degree in Computer Applications at Hindu Institute of Management, I’m in my 3rd year, and on a mission to build scalable, user-friendly web experiences.

        I specialize in crafting dynamic web applications using Node.js, Express.js, MongoDB, and EJS.On the frontend, I love using GSAP, Locomotive Scroll, Swiper.js, and Lenis to make interfaces that are not just functional, but also fun.

        I’ve built several projects, including Clown (a Pinterest-style app) and TaskPilot, where I combined strong API skills with modern UI/UX.</p>
      <strong id="pop">"</strong>
      <img src="/images/about.webp"></img>
    </div>
  );
}

export default Info;