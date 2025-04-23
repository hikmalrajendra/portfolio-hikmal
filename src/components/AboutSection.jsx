import React from "react";
import "../styles/AboutSection.css";
import profilePic from '../assets/hikmal.png'; 

const AboutSection = () => {
  const texts = [
    'Hikmal Rajendra Zulfa',
    'FrontEnd Developer',
    'UI/UX Designer',
    'Graphic Design'
  ];

  const marqueeTexts = [...texts, ...texts, ...texts, ...texts];

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-container">
        <div className="glass-bar bar-left">
          <div className="bar-marquee">
            {marqueeTexts.map((t, i) => (
              <span key={i} className="bar-text">{t}</span>
            ))}
          </div>
        </div>

        <div className="profile-glass">
          <img src={profilePic} alt="Hikmal Rajendra Zulfa" className="profile-img" />
        </div>

        <div className="glass-bar bar-right">
          <div className="bar-marquee">
            {marqueeTexts.map((t, i) => (
              <span key={i} className="bar-text">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;