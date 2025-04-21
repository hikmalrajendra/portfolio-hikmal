import React from "react";
import "../App.css";
import htmlLogo from '../assets/html.png';
import cssLogo from '../assets/css.png';
import jsLogo from '../assets/javascript.png';
import reactLogo from '../assets/react.png';
import javaLogo from '../assets/java.png';
import phpLogo from '../assets/php.png';
import mysqlLogo from '../assets/sql.png';
import gitLogo from '../assets/git.png';
import pythonLogo from '../assets/python.png';
import instagramIcon from '../assets/instagram.png';
import githubIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

const HeroSection = () => {
  const skills = [
    { name: 'HTML5',   logo: htmlLogo },
    { name: 'CSS3',    logo: cssLogo },
    { name: 'JavaScript', logo: jsLogo },
    { name: 'ReactJS', logo: reactLogo },
    { name: 'Java',    logo: javaLogo },
    { name: 'PHP',     logo: phpLogo },
    { name: 'MySQL',   logo: mysqlLogo },
    { name: 'Git',     logo: gitLogo },
    { name: 'Python',  logo: pythonLogo },
  ];

  return (
    <div className="main-container">
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="nav-links">
          <a href="#home">Homes</a>
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
            <a
              href="https://instagram.com/hikmairjndra"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
            <div className="icon-box">
              <img src={instagramIcon} alt="Instagram" />
            </div>
              <span className="social-text">hikmairjndra</span>
            </a>
            <a
              href="https://github.com/hikmalrajendra"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
                <div className="icon-box">
                  <img src={githubIcon} alt="GitHub" href="https://github.com/hikmalrajendra" />
                </div>
                <span className="social-text">hikmalrajendra</span>
            </a>
            <a
              href="https://www.linkedin.com/in/hikmalrajendra"
              target="_blank"
              rel="noopener noreferrer"
              className="social-item"
            >
                <div className="icon-box">
                  <img src={linkedinIcon} alt="LinkedIn"  href="https://www.linkedin.com/in/hikmal-rajendra-zulfa-646513289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
                </div>
                <span className="social-text">hikmalrajendra</span>
            </a>
          </div>
          <button className="explore-btn">Let’s Explore Now</button>
        </div>
      </section>

      {/* Skills Marquee */}
      <div className="skills-section">
        <h3>Skill of Programming :</h3>
        <div className="marquee-container">
          <div className="marquee">
            {[...skills, ...skills].map((skill, i) => (
              <div key={i} className="skill-card">
                <img src={skill.logo} alt={skill.name} />
              </div>
            ))}
          </div>
        </div>
      </div>  
    </div>
  );
};

export default HeroSection;
