import React from "react";
import "./project.css";

function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>📋 Projects</h2>

      <div className="project-container">

        {/* Project 1 */}

        <div className="project-card">

          <div className="year-btn">2026</div>

          <h3>🌐 Personal Portfolio Website</h3>

          <h4>Project Overview</h4>

          <p className="project-desc">
            Designed and developed a responsive Full Stack Portfolio Website to showcase my education, technical skills, projects, achievements, and contact information. The website features a modern user interface, smooth navigation, and a professional layout.
          </p>

          <h4>Tools Used</h4>

          <div className="tools">
            <span>HTML</span>
            <span>CSS</span>
            <span>React.js</span>
            <span>Node.js</span>
            <span>MongoDB</span>
          </div>

        </div>



        {/* Project 2 */}

        <div className="project-card">

          <div className="year-btn">2026</div>

          <h3>💰 Loan Approval Prediction</h3>

          <h4>Project Overview</h4>

          <p className="project-desc">
            Developed a Machine Learning application to predict loan approval status based on applicant information such as income, credit history, employment status, and loan amount. The project provided practical experience in machine learning and predictive analytics.
          </p>

          <h4>Tools Used</h4>

          <div className="tools">
            <span>Python</span>
            <span>Pandas</span>
            <span>NumPy</span>
            <span>Scikit Learn</span>
          </div>

        </div>



        {/* Project 3 */}

        <div className="project-card">

          <div className="year-btn">2025</div>

          <h3>🏠 House Price Prediction</h3>

          <h4>Project Overview</h4>

          <p className="project-desc">
            Created a Machine Learning model to estimate house prices based on location, area, number of bedrooms, and property features. The project strengthened my understanding of data analysis, predictive modeling, and artificial intelligence concepts.
          </p>

          <h4>Tools Used</h4>

          <div className="tools">
            <span>Python</span>
            <span>Kaggle</span>
            <span>Pandas</span>
            <span>NumPy</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;