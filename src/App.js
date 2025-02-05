import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./components/Hero";
import About from "./components/About";
import Logos from "./components/Logo";
import Grid from "./components/Grid";
import "./App.css";
import "./components/Grid.css";
import "./components/About.css";
import "./components/Hero.css";
import "./components/Logo.css";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  useEffect(() => {
    gsap.from(".hero .logo", {
      duration: 1,
      y: -100,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(".about-text", {
      scrollTrigger: {
        trigger: ".about",
        start: "top center",
      },
      duration: 1,
      x: -100,
      opacity: 0,
      ease: "power3.out",
    });

    gsap.from(".grid-item", {
      scrollTrigger: {
        trigger: ".grid",
        start: "top center",
      },
      duration: 0.8,
      y: 50,
      opacity: 0,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  return (
    <div>
      <Hero />
      <About />
      <Logos />
      <Grid />
    </div>
  );
};

export default App;