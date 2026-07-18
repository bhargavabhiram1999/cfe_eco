import React from 'react';
import suiteImage from '../assets/images/beds1.jpeg';
import dormImage from '../assets/images/beds2.jpeg';

function AccommodationSection({ rooms }) {
  return (
    <section className="rooms-section">
      <div className="section-heading">
        <p className="section-label">Accommodation</p>
        <h2>Accommodation</h2>
      </div>
      <div className="room-grid">
        {rooms.map((room, index) => (
          <article className="room-card" key={room.title}>
            <img
              className="room-image"
              src={index === 0 ? suiteImage : dormImage}
              alt={room.title}
            />
            <h3>{room.title}</h3>
            <p>{room.description}</p>
            <div className="room-meta">
              <span>{room.capacity}</span>
              <strong>{room.price}</strong>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AccommodationSection;
