import React, { use, useState } from "react";
import Navbar from "./navbar";
import Landing from './landing';
import About from "./about";
import Info from "./assets/ifor";
import Projects from "./project";
function App() {
  return (
    <div id="container">
      <div id="page">
        <Navbar />
      </div>
      <div id="page1">
        <Landing />
      </div>
      <div id="app">
        <div id="page2">
          <div id="about">
            <About />
          </div>
          <div id="aboutinfo">
            <Info />
          </div>
        </div></div>
      <div id="page3">
        <div id="page4">
          <Projects />
        </div>
      </div>
    </div>
  );
}

export default App;