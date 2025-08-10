import React, { use, useEffect, useRef } from "react";
import Typed from 'typed.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { IoChevronDownSharp } from "react-icons/io5";
import Projects from "./project";


function Landing() {
  const scrollp = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" })
  }
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ['Atul Rathi👋'],
      typeSpeed: 70,
      backSpeed: 40,
      loop: false,
      showCursor: false,
    });
    return () => {
      typed.current.destroy();
    }
  }, []);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from('#img', { opacity: 0, y: 10, duration: 2 });
  })
  useGSAP(() => {
    gsap.from('#errow', { opacity: 0, duration: 1, delay: 3 })
    gsap.to('#errow', { y: 15, duration: 1, delay: 2, repeat: Infinity, yoyo: true })
  })

  return (
    <div id="intro">
      <div id="img">
        <img src="/images/logo4.png"></img></div>;
      <div id="intron">
        <h1>Hii, I'm</h1>
        <h1 id="atul"><span ref={el}></span></h1>
        <p>Web Developer</p>
        <button onClick={() => scrollp('card1')} id="btn1">View Projects</button>
        <div id='media'>
          <a href='https://github.com/atulrathi'><img src='/images/github2.png' className='insta github1'></img></a>
          <a href='https://www.instagram.com/atul.rathii'><img src='/images/insta.webp' className='insta instagram1'></img></a>
          <a href='https://x.com/imatulrathi'> <img src='/images/x2.png' className='insta x1'></img></a>
          <a href='https://www.linkedin.com/in/atulrathi18/'><img src='/images/linkedin2.png' className='insta linkedin1'></img></a>
        </div>
        <h2 id="errow"> <IoChevronDownSharp size={40} /></h2>
      </div>

    </div>
  );
}
export default Landing;