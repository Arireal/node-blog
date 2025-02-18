import { useEffect, useState } from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Logos from "./components/Logos";
import Grid from "./components/Grid";
import Footer from "./components/Footer";
import AboutPage from './components/AboutPage'; // Your AboutPage component
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Import FontAwesome Icon
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Icons for down and up arrows
import "./styles/App.css";

const App = () => {
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);

  const toggleAboutSection = () => {
    setIsAboutExpanded(!isAboutExpanded);
  };

  const scrollToAbout = () => {
    const aboutButton = document.getElementById('about-button');
    if (aboutButton) {
      aboutButton.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="App">
      <Hero scrollToAbout={scrollToAbout} /> {/* Pass scrollToAbout as a prop */}
      <About />
      <Logos />
      <Grid />

      {/* "About Us" button with expanding/collapsing functionality */}
      <div id="about-button">
        <nav>
          <ul>
            <li>
              <button onClick={toggleAboutSection} className="about-button">
                About Us 
                <FontAwesomeIcon icon={isAboutExpanded ? faChevronUp : faChevronDown} />
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {/* Conditionally render the AboutPage section */}
      {isAboutExpanded && <AboutPage />}

      <Footer />
    </div>
  );
};

export default App;
