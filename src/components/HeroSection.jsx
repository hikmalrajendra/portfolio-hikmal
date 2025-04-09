import React from "react";
import "../App.css";

const HeroSection = () => {
  const skills = ["PHP", "JavaScript", "MySQL", "ReactJS"];

  return (
    <div className="main-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#project">Project</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <h2>Hello, I'am</h2>
          <h1>Hikmal Rajendra Zulfa</h1>
          <p>Undergraduate Information Technology of Brawijaya University</p>
          <p>I'am based in Pacitan</p>
          <div className="social-icons">
            <div className="social-item">
              <div className="icon-box">
                <img
                  src=""
                  alt="Instagram"
                />
              </div>
              <span className="social-text">hikmairjndra</span>
            </div>
            <div className="social-item">
              <div className="icon-box">
                <img
                  src=""
                  alt="GitHub"
                />
              </div>
              <span className="social-text">hikmalrajendra</span>
            </div>

            <div className="social-item">
              <div className="icon-box">
                <img
                  src=""
                  alt="LinkedIn"
                />
              </div>
              <span className="social-text">hikmalrajendra</span>
            </div>
          </div>
          <button className="explore-btn">Let’s Explore Now</button>
        </div>
      </section>

      {/* Skills Marquee */}
      <div className="skills-section">
        <h3>Skill of Programming :</h3>
        <div className="marquee-container">
          <div className="marquee">
            {[...skills, ...skills].map((skill, index) => (
              <span key={index} className="skill-item">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
