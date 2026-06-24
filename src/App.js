import "./App.css";

import Navbar from "./components/navbar";
import Home from "./components/home";
import About from "./components/about";
import Education from "./components/education";
import Skill from "./components/skill";
import Project from "./components/project";
import Experience from "./components/experience";
import Contact from "./components/contact";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skill />
      <Project />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;