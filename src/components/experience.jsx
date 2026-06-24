import React from "react";
import "./experience.css";

function Experience() {
  return (
    <section id="experience" className="experience">

      <h2>💼 Experience</h2>

      <div className="experience-card">

        <div className="duration-btn">
          6 Months
        </div>

        <h3>💼 Full Stack Developer Intern</h3>

        <p className="company">
          🏢 Codec Technologies
        </p>

        <p className="location">
          📍 Bangalore, Karnataka
        </p>

        <h4>Responsibilities</h4>

        <p className="experience-desc">
          During my internship at Codec Technologies, I worked on developing responsive websites using HTML, CSS, JavaScript, and React.js. I contributed to front-end development, collaborated on Node.js backend tasks, and gained hands-on experience in building modern web applications. I also learned industry-standard development practices, project workflows, debugging techniques, and responsive design principles under the guidance of experienced professionals.
        </p>

        <h4>Outcome</h4>

        <ul className="outcome-list">
          <li>Improved Full Stack Development Skills</li>
          <li>Gained Practical Industry Exposure</li>
          <li>Enhanced Front-End and Back-End Knowledge</li>
          <li>Improved Problem-Solving and Debugging Skills</li>
          <li>Strengthened Project Development Experience</li>
          <li>Learned Industry Development Workflow</li>
        </ul>

      </div>

    </section>
  );
}

export default Experience;