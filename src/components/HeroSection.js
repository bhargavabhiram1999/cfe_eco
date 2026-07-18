import React from 'react';
import heroImage from '../assets/images/title.jpeg';

function HeroSection({ highlights }) {
  return (
    <section className="hero-section">
      <div className="hero-copy">
        <p className="eyebrow">CFE Eco Stay • Stay with Nature</p>
        <h1>Travel with impact.</h1>
        <p className="hero-text">
          CFE Eco Stay is a unique, community-run ecoretreat in Bodlanka village near Maredumilli.
          Surrounded by forests, tribal culture, and sustainable farms, this is where you reconnect with nature while supporting rural livelihoods.
          Here, you don’t just stay—you experience authentic village life, peaceful surroundings, and meaningful travel.
        </p>
        <div className="hero-actions">
          <a href="#booking" className="cta-button">Book Your Stay</a>
          <a href="#about" className="secondary-link">Experience more than stay</a>
        </div>
      </div>

      <div className="hero-card">
        <img
          className="hero-image"
          src={heroImage}
          alt="Forest retreat surrounded by trees and greenery"
        />
        <h2>Why choose CFE Eco Stay</h2>
        <ul>
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default HeroSection;
