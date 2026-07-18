import React, { useEffect, useState } from 'react';
import suiteImage1 from '../assets/images/bed3_2.jpeg';
import suiteImage2 from '../assets/images/beds3_1.jpeg';
import dormImage1 from '../assets/images/beds5_1.jpeg';
import dormImage2 from '../assets/images/beds5_2.jpeg';

const roomGallery = {
  'Suite Room (Up to 3 Guests)': [suiteImage1, suiteImage2],
  'Deluxe Dorm (Up to 5 Guests)': [dormImage1, dormImage2],
};

function AccommodationSection({ rooms }) {
  const [activeImageIndex, setActiveImageIndex] = useState({ 0: 0, 1: 0 });

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveImageIndex((current) => ({
        0: (current[0] + 1) % roomGallery[rooms[0].title].length,
        1: (current[1] + 1) % roomGallery[rooms[1].title].length,
      }));
    }, 4000);

    return () => window.clearInterval(timer);
  }, [rooms]);

  return (
    <section id="accommodation" className="rooms-section">
      <div className="section-heading">
        <p className="section-label">Stay options</p>
        <h2>Accommodation</h2>
      </div>
      <div className="room-grid">
        {rooms.map((room, index) => {
          const gallery = roomGallery[room.title] || [room.image];
          const activeIndex = activeImageIndex[index] ?? 0;
          return (
            <article className="room-card" key={room.title}>
              <div className="room-image-panel room-slider">
                {gallery.map((src, slideIndex) => (
                  <img
                    key={src}
                    className={`room-image room-slide ${slideIndex === activeIndex ? 'active' : ''}`}
                    src={src}
                    alt={room.title}
                  />
                ))}
              </div>
              <div className="room-details">
                <h3>{room.title}</h3>
                <p>{room.description}</p>
                <div className="room-meta">
                  <span>{room.capacity}</span>
                  <strong>{room.price}</strong>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default AccommodationSection;
