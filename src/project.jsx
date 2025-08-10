import React, { useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef();
  const boxRef = useRef([]);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=4000',
        scrub: true,
        pin: true,
      },
    });

    // Animate first 5
    boxRef.current.slice(0, 5).forEach((el, i) => {
      tl.to(el, {
        y: '-100%',
        duration: 1,
        ease: 'power2.inOut',
        opacity: 0,
      }, i);
    });

    // Animate 6th from top
    tl.to(boxRef.current[5], {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power2.out',
      scale: 1.2
    }, 5);
  }, []);

  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [msg, setmsg] = useState('');
  const submithandler = (e) => {
    e.preventDefault();
    setname('')
    setemail('');
    setmsg('')
  }
  return (
    <div id="projects-section" ref={containerRef}>
      <h1 id='card1'>projects</h1>
      <div id="box">

        <div ref={(el) => (boxRef.current[1] = el)} className="param param2">
          <h2>Clown – Pinterest Clone Web Application</h2>
          <p>Clown is a full-stack Pinterest-style web application that allows users to register, log in, and share visually engaging images in a dynamic, responsive layout. Developed using Node.js, Express.js, MongoDB, and EJS, the project offers essential features like user authentication with secure sign-up and login functionality, ensuring that only registered users can upload content. Once logged in, users can upload images (pins) along with titles and descriptions, which are then displayed in a stylish, Pinterest-like masonry grid. The application supports seamless navigation, responsive design for different screen sizes, and real-time interaction with the database using RESTful routes and server-side rendering. Clown replicates the core functionality of Pinterest while focusing on clean UI, backend integration, and secure image handling. It helped me gain hands-on experience in building authentication systems, managing sessions, creating dynamic routes, and working with MongoDB for storing user data and images.</p>
          <a id='repo' href='https://github.com/atulrathi/Pinterest-'>Github Reposetory</a>
        </div>

        <div ref={(el) => (boxRef.current[2] = el)} className="param param3">
          <h2>Taskpilot</h2>
          <p>TaskPilot is a frontend task management application built entirely with React.js, designed to simulate a basic admin-employee workflow. The application allows an admin to assign tasks to employees, while employees have the ability to accept or reject assigned tasks. All data is managed using localStorage, making the app lightweight and fast without requiring a backend. TaskPilot includes a basic login/logout system, where the interface changes based on the user role (admin or employee). Smooth and engaging user experience is enhanced with GSAP animations, providing animated transitions and a dynamic UI. This project helped me strengthen my skills in React hooks, conditional rendering, state management, role-based interfaces, and integrating animations within a single-page application.</p>
          <a id='repo' href='https://github.com/atulrathi/TaskPilot/tree/main/Desktop/taskPilot'>Github Reposetory</a>
        </div>

        <div ref={(el) => (boxRef.current[3] = el)} className="param param4">
          <h2>ToDo List</h2>
          <p> Todo List App is a simple and responsive task management application built using HTML, CSS, and JavaScript. It allows users to add daily tasks, which are then displayed in a clean and organized list. Tasks are stored using localStorage, so they remain saved even after the browser is closed or refreshed. The application is fully responsive, ensuring a smooth user experience across all devices, including mobile and desktop. This project helped me practice basic JavaScript DOM manipulation, localStorage integration, and responsive web design principles.</p>
          <a id='repo' href='https://github.com/atulrathi/ToDo-list'>Github Reposetory</a>
        </div>

        <div ref={(el) => (boxRef.current[4] = el)} className="param param5">
          <h2>Rock Paper Scissors</h2>
          <p>Rock Paper Scissors Game is an interactive browser-based game built using HTML, CSS, and JavaScript, where players can play against the computer. The game allows the user to choose between rock, paper, or scissors, while the computer randomly selects its move. The winner is determined based on standard rules, and the score is updated in real-time for both the player and the computer. The interface is simple, responsive, and designed for quick, engaging gameplay. This project helped me practice JavaScript logic building, DOM manipulation, and creating a real-time score system in a fun and interactive way.</p>
          <a id='repo' href='https://github.com/atulrathi/rock-paper-scissor'>Github Reposetory</a>
        </div>

        <div ref={(el) => (boxRef.current[5] = el)} className="param param6">
          <h2 id='card2'>Contact Me</h2>
          <h3 id='email'>rathiatul43@gmail.com</h3>
          <h4>Let's build something amazing together</h4>
          <div className="contact">
            <form onSubmit={(e) => { submithandler(e) }}>
              <input required value={name} onChange={(e) => { setname(e.target.value) }} type='Text' placeholder='Name' className='input input1'></input>
              <input required value={email} onChange={(e) => { setemail(e.target.value) }} type='Text' placeholder='Email' className='input input2'></input>
              <input required value={msg} onChange={(e) => { setmsg(e.target.value) }} type='Text' placeholder='Message' className='input input3 '></input>
              <button className='button'>Submit</button>
            </form>
            <div id='socalcon'>
              <a href='https://github.com/atulrathi'><img src='/images/github.webp' className='insta github'></img></a>
              <a href='https://www.instagram.com/atul.rathii'><img src='/images/instagam.webp' className='insta instagram'></img></a>
              <a href='https://x.com/imatulrathi'> <img src='/images/x.png' className='insta x'></img></a>
              <a href='https://www.linkedin.com/in/atulrathi18/'><img src='/images/linkedin.webp' className='insta linkedin'></img></a>
            </div>
          </div>

          <div id="card3"></div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
