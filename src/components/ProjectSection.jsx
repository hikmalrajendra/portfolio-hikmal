import React from 'react';
import '../styles/ProjectSection.css';
import proj1 from '../assets/project1.png';

const projects = [
  {
    id: 1,
    title: 'Desain Mobile Apps Course Online',
    img: proj1,
    description: 'Undergraduate Information Technology of Brawijaya University. I am based in Pacitan.',
    url: '/projects/course-online'
  },
  {
    id: 2,
    title: 'Website E-Commerce Shop',
    img: proj1,
    description: 'Responsive e‑commerce website dengan fitur cart, checkout, dan integrasi pembayaran.',
    url: '/projects/ecommerce'
  },
  {
    id: 3,
    title: 'Dashboard Admin Panel',
    img: proj1,
    description: 'Dashboard management dengan data visualization dan chart interaktif.',
    url: '/projects/dashboard'
  }
];

const ProjectSection = () => (
  <section className="project-section" id="project">
    <h2 className="project-title">Our Project</h2>KO
    <div className="timeline">
      {projects.map((project, idx) => (
        <div
          key={project.id}
          className={`timeline-item ${idx % 2 === 0 ? 'left' : 'right'}`}
        >
          <div className="timeline-dot" />
          <div className="project-content">
            <a href={project.url} className="project-card">
              <img src={project.img} alt={project.title} />
            </a>
            <div className="project-text">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="timeline-line" />
    </div>
  </section>
);

export default ProjectSection;