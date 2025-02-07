import { useEffect } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Logos from "./components/Logos";
import Grid from "./components/Grid";
import "./styles/App.css";

const App = () => {
  useEffect(() => {
    // You can test logic here if necessary, but without gsap/ScrollTrigger
  }, []);

  return (
    <div className="App">
      <Hero />
      <About />
      <Logos />
      <Grid />
    </div>
  );
};

export default App;
