import React, { useEffect, useRef } from "react";
import Intro from "./landing";
import gsap from 'gsap';
import Typed from 'typed.js';
import { useGSAP } from '@gsap/react';
import Info from "./assets/ifor";
import Projects from "./project";
import About from "./about";
function Navbar() {
  const el = useRef(null);
  const typed = useRef(null);
  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: ["Hey there! I'm glad you're here.", "Welcome to my digital world!", "Hi, I'm Atul — let's build something awesome.", "Thanks for stopping by. Take a look around!", "Hello! Ready to explore my work?"],
      typeSpeed: 70,
      backSpeed: 40,
      loop: true,
      showCursor: false,
    });
    return () => {
      typed.current.destroy();
    }
  }, []);
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from('#nav1', { y: 10, opacity: 0, duration: 0.8 });
  })

  const scrollbotto = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    })
  }

  return (
    <div id="navbar">
      <p id="greet"><span ref={el}></span></p>
      <div id="nav1" >
        <h1 id="nav"><a href='#nav'>Home</a></h1>
        <h1 id="nav"><a href="#aboutcontainer">About</a></h1>
        <h1 id="nav"><a href="#card1">Projects</a></h1>
        <button id="nav5" onClick={scrollbotto}>Contact</button>
      </div>

    </div>);
}

export default Navbar;