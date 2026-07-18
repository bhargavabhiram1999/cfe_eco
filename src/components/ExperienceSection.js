import React from 'react';

function ExperienceSection({ experiences, attractions }) {
  return (
    <section id="experience" className="info-section alt-section">
      <div>
        <p className="section-label">Experiences</p>
        <h2>Experience more than stay</h2>
        <ul className="pill-list">
          {experiences.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="info-card">
        <h3>Nearby attractions</h3>
        <ul>
          {attractions.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default ExperienceSection;
