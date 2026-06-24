import React from "react";
import "./skill.css";

import {
FaHtml5,
FaCss3Alt,
FaJs,
FaReact,
FaNodeJs,
FaPython,
FaGithub,
FaGitAlt,
FaFileExcel,
FaFileWord,
FaFilePowerpoint,
FaJava
} from "react-icons/fa";

import {
SiMongodb,
SiMysql,
SiCanva,
SiOpenai
} from "react-icons/si";

function Skills() {
  return (
    <section id="skills" className="skills">

      <h2>⚡ Skills</h2>

      <h3 className="category">
        💻 Core Technologies
      </h3>

      <div className="skill-container">

        <div className="skill-btn"><FaHtml5 /> HTML</div>
        <div className="skill-btn"><FaCss3Alt /> CSS</div>
        <div className="skill-btn"><FaJs /> JavaScript</div>
        <div className="skill-btn"><FaJava/> Java</div>
        <div className="skill-btn"><FaReact /> React.js</div>
        <div className="skill-btn"><FaNodeJs /> Node.js</div>
        <div className="skill-btn"><SiMongodb /> MongoDB</div>
        <div className="skill-btn"><SiMysql /> MySQL</div>
        <div className="skill-btn"><FaPython /> Python</div>

      </div>

      <h3 className="category">
        🛠 Tools & Platforms
      </h3>

      <div className="skill-container">

        <div className="skill-btn"><SiOpenai /> ChatGPT</div>
        <div className="skill-btn">✴️  Claude AI</div>
        <div className="skill-btn"><SiCanva /> Canva</div>
        <div className="skill-btn"><FaFileExcel /> Excel</div>
        <div className="skill-btn"><FaFileWord /> Word</div>
        <div className="skill-btn"><FaFilePowerpoint /> PowerPoint</div>
        <div className="skill-btn"><FaGithub /> GitHub</div>
        <div className="skill-btn"><FaGitAlt /> Git</div>


      </div>

    </section>
  );
}

export default Skills;