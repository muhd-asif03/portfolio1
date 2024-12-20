import React from 'react';
import './projects.css';
import img from '../../Assets/project1.png';
import img2 from '../../Assets/project2.png';

const Projects = () => {
  return (
    <div>
      <div className="projects">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img src={img} alt="Project One" className="project-img" />
          <h2 className="project-title">Judicial case handling system</h2>
          <p className="project-description">
          A system designed to digitize and streamline case management for courts. It allows efficient case filing, progress tracking, automated scheduling, and secure access for stakeholders, ensuring transparency and faster resolution of cases.
          </p>
        </div>
        <div className="project-card">
          <img src={img2} alt="Project Two" className="project-img" />
          <h2 className="project-title">Automated bird detection system using Audio</h2>
          <p className="project-description">
          A system that analyzes audio recordings to detect and identify bird species. By leveraging machine learning and sound processing techniques, it enables efficient monitoring of bird populations, aiding in ecological research and conservation efforts.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;