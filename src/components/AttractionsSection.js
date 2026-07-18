import React, { useRef, useState } from 'react';
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
  const previousIndex = (activeIndex + mediaItems.length - 1) % mediaItems.length;
  const nextIndex = (activeIndex + 1) % mediaItems.length;

  const visibleItems = [
    { ...mediaItems[previousIndex], position: 'previous', index: previousIndex },
    { ...mediaItems[activeIndex], position: 'active', index: activeIndex },
    { ...mediaItems[nextIndex], position: 'next', index: nextIndex },
  ];

  const showPrevious = () => {
    setActiveIndex((current) => (current === 0 ? mediaItems.length - 1 : current - 1));
  };

  const [isVideoPaused, setIsVideoPaused] = useState(false);
  const videoRefs = useRef({});
  const autoPlayTimer = useRef(null);
  const autoPlayDelay = 5000;

  const showNext = () => {
    setActiveIndex((current) => (current === mediaItems.length - 1 ? 0 : current + 1));
  };

  const toggleVideoPlayback = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsVideoPaused(false);
    } else {
      video.pause();
      setIsVideoPaused(true);
    }
  };

  React.useEffect(() => {
    setIsVideoPaused(false);
  }, [activeIndex]);

  React.useEffect(() => {
    autoPlayTimer.current = window.setInterval(() => {
      setActiveIndex((current) => (current === mediaItems.length - 1 ? 0 : current + 1));
    }, autoPlayDelay);

    return () => {
      window.clearInterval(autoPlayTimer.current);
    };
  }, []);

  return (
    <section id="attractions" className="info-section attractions-section">
      <div className="attractions-copy">
        <p className="section-label">Discover the region</p>
        <h2>Attractions near CFE Eco stay</h2>
        <p>
          The landscapes around Gudisa are full of calm viewpoints, sunrise trails, and immersive nature scenes that make every visit memorable.
        </p>
      </div>

      <div className="carousel-shell">
        <div className="carousel-row">
          {visibleItems.map((item) => (
            <div key={item.position} className={`carousel-card ${item.position}`}>
              {item.type === 'video' ? (
                <div className="video-wrapper">
                  <video
                    ref={(node) => {
                      if (node) videoRefs.current[item.index] = node;
                    }}
                    playsInline
                    muted
                    loop
                    autoPlay={item.position === 'active'}
                    className="carousel-media"
                  >
                    <source src={item.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {item.position === 'active' && (
                    <button
                      type="button"
                      className="video-hover-overlay"
                      onClick={() => toggleVideoPlayback(item.index)}
                      aria-label={isVideoPaused ? 'Play video' : 'Pause video'}
                    >
                      {isVideoPaused ? '▶' : '⏸'}
                    </button>
                  )}
                </div>
              ) : (
                <img src={item.src} alt={item.alt} className="carousel-media" />
              )}
            </div>
          ))}
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
