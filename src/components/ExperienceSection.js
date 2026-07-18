import React, { useEffect, useRef, useState } from 'react';
import chipiri from '../assets/images/chipiri.jpeg';
import farm1 from '../assets/images/farm1.jpeg';
import farm2 from '../assets/images/farm2.jpeg';
import farm3 from '../assets/images/farm3.jpeg';
import interaction1 from '../assets/images/interaction1.jpeg';
import interaction2 from '../assets/images/interaction2.jpeg';
import interaction3 from '../assets/images/interaction3.jpeg';
import chavadikota from '../assets/images/Chavadikota_view_point.jpeg';
import sunrise from '../assets/images/sunrise.jpeg';

const galleryImages = [
  chipiri,
  farm1,
  farm2,
  farm3,
  interaction1,
  interaction2,
  interaction3,
  chavadikota,
  sunrise,
];

const captionsMap = {
  'chipiri': 'sustainable farming products',
  'farm': 'sustainable farming products',
  'interaction': 'Interaction with Village people',
  'chavadikota_view_point': 'Chavadikota Viewpoint',
  'sunrise': 'Sunrise View',
};

function captionFromPath(path) {
  const parts = path.split('/');
  const name = parts[parts.length - 1] || path;
  let base = name.replace(/\.[^.]+$/, '');
  // remove trailing digits like farm1, interaction2 -> farm, interaction
  base = base.replace(/\d+$/,'');
  // normalize underscores/dashes and lower-case key for lookup
  const key = base.replace(/[_-]+/g, '_').toLowerCase();
  if (captionsMap[key]) return captionsMap[key];
  // fallback: humanize without numbers
  const human = base.replace(/[_-]+/g, ' ').replace(/\d+/g, '').trim();
  return human.replace(/\b\w/g, (c) => c.toUpperCase());
}

function ExperienceSection() {
  const [visible, setVisible] = useState(1);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);

  useEffect(() => {
    function updateVisible() {
      // always display 1 slide at a time (user requested)
      setVisible(1);
    }
    updateVisible();
    window.addEventListener('resize', updateVisible);
    return () => window.removeEventListener('resize', updateVisible);
  }, []);

  // clamp index when visible changes
  useEffect(() => {
    const maxIndex = Math.max(0, galleryImages.length - visible);
    if (index > maxIndex) setIndex(maxIndex);
  }, [visible]);

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      setIndex((i) => {
        const maxIndex = Math.max(0, galleryImages.length - visible);
        return i >= maxIndex ? 0 : i + 1;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [visible, paused]);

  const slidePercent = (100 / visible) * index;

  const currentSrc = galleryImages[index % galleryImages.length];
  const title = captionFromPath(currentSrc);

  const descriptionsMap = {
    'sustainable farming products': 'Explore our organic produce and learn sustainable farming techniques used by local farmers.',
    'interaction with village people': 'Spend time with village residents — share stories, learn local crafts, and join community activities.',
    'chavadikota viewpoint': 'A scenic viewpoint offering panoramic vistas — perfect for sunrise and nature walks.',
    'sunrise view': 'Start your day watching the sunrise over the hills — an unforgettable moment.',
    'chipiri falls': 'Visit Chipiri Falls and enjoy the tranquility of flowing water and forest surroundings.'
  };

  const descKey = title.toLowerCase();
  const description = descriptionsMap[descKey] || 'Enjoy this experience and learn more during your stay.';

  function prev() {
    setIndex((i) => (i <= 0 ? galleryImages.length - 1 : i - 1));
    setPaused(true);
  }

  function next() {
    setIndex((i) => (i >= galleryImages.length - 1 ? 0 : i + 1));
    setPaused(true);
  }

  return (
    <section id="experience" className="experience-section highlight-section">
      <div className="experience-header">
        <p className="section-label">Experiences</p>
        <h2>Experience more than stay</h2>
        <p className="experience-intro">A highlight of what you can do — from sunrise views to hands-on farm interactions.</p>
      </div>

      <div
        className="experience-gallery"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button className="carousel-btn prev" onClick={prev} aria-label="Previous slide">‹</button>
        <button className="carousel-btn next" onClick={next} aria-label="Next slide">›</button>
        <div className="experience-card stack" ref={trackRef}>
          <div className="card-media">
            <img src={currentSrc} alt={title} />
          </div>
          <div className="card-content">
            <h3 className="card-title">Lorem Ipsum generator text</h3>
            <p className="card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante, consectetur adipiscing elit. Curabitur blandit tempus porttitor.</p>
            <div className="card-actions">
              <button className="btn-secondary" onClick={() => window.scrollTo({ top: document.body.scrollTop + 400, behavior: 'smooth' })}>Learn More</button>
            </div>
          </div>
        </div>
        <button
          className="carousel-btn play"
          onClick={() => setPaused((p) => !p)}
          aria-label={paused ? 'Play carousel' : 'Pause carousel'}
        >
          {paused ? '▶' : '❚❚'}
        </button>
      </div>
    </section>
  );
}

export default ExperienceSection;
