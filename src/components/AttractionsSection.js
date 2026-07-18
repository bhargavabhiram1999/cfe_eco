import React, { useMemo, useState } from 'react';
import gudisa1 from '../assets/images/gudisa_1.jpeg';
import gudisa2 from '../assets/images/gudisa_2.jpeg';
import gudisa3 from '../assets/images/gudisa_3.jpeg';
import videoScene from '../assets/images/video_scene_1.mp4';

const mediaItems = [
  { type: 'video', src: videoScene, alt: 'Gudisa scenic video' },
  { type: 'image', src: gudisa1, alt: 'Gudisa sunrise point landscape' },
  { type: 'image', src: gudisa2, alt: 'Gudisa scenic view' },
  { type: 'image', src: gudisa3, alt: 'Gudisa sunrise point with greenery' },
];

function AttractionsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = useMemo(() => mediaItems[activeIndex], [activeIndex]);

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? mediaItems.length - 1 : current - 1));
  };

  const showNext = () => {
    setActiveIndex((current) => (current === mediaItems.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="info-section attractions-section">
      <div className="attractions-copy">
        <p className="section-label">Attractions near Gudisa</p>
        <h2>Attractions near Gudisa</h2>
        <p>
          The landscapes around Gudisa are full of calm viewpoints, sunrise trails, and immersive nature scenes that make every visit memorable.
        </p>
      </div>

      <div className="carousel-shell">
        <div className="carousel-frame">
          {activeItem.type === 'video' ? (
            <video controls playsInline autoPlay muted loop className="carousel-media">
              <source src={activeItem.src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img src={activeItem.src} alt={activeItem.alt} className="carousel-media" />
          )}
        </div>

        <div className="carousel-controls">
          <button type="button" className="carousel-button" onClick={showPrevious}>
            ←
          </button>
          <button type="button" className="carousel-button" onClick={showNext}>
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default AttractionsSection;
