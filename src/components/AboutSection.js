import React from 'react';
import aboutImage from '../assets/images/room_outside2.jpeg';

function AboutSection() {
  return (
    <section id="about" className="info-section">
      <div>
        <p className="section-label">About CFE</p>
        <h2>About CFE</h2>
        <p>
          The Centre for Development and Research (CDR) is a non-profit organization working since 1983 to uplift tribal and rural communities.
          The Centre for Excellence (CFE), spread across 26 acres, is a learning hub where farmers are trained in sustainable agriculture, helping them build self-reliant and eco-conscious livelihoods.
        </p>
      </div>
      <div className="info-card">
        <img
          className="section-image"
          src={aboutImage}
          alt="Nature hills and peaceful eco stay surroundings"
        />
        <h3>Your stay experience</h3>
        <ul>
          <li>Eco-friendly cottages designed to blend with nature</li>
          <li>Fresh mountain air, green hills, and open spaces</li>
          <li>Natural farming and plantation areas</li>
          <li>Quiet, relaxing environment away from city life</li>
        </ul>
      </div>
    </section>
  );
}

export default AboutSection;
