import React, { useRef, useState } from 'react';
import contactData from '../data/contact.json';
import mapsImage from '../assets/images/maps.jpeg';

function BookingSection() {
  const [isOpen, setIsOpen] = useState(false);
  const dateInputRefs = useRef({ fromDate: null, toDate: null });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromDate: '',
    toDate: '',
    persons: '',
  });

  const isRequiredFilled = formData.name.trim() && formData.phone.trim() && formData.phone.length === 10;

  const today = new Date();
  const minDate = today.toISOString().split('T')[0];
  const maxDate = new Date(today.getFullYear() + 1, today.getMonth(), today.getDate()).toISOString().split('T')[0];

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'phone') {
      const filteredValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData((current) => ({ ...current, [name]: filteredValue }));
      return;
    }

    setFormData((current) => ({ ...current, [name]: value }));
  };

  const openDatePicker = (name) => {
    const input = dateInputRefs.current[name];
    if (input) {
      if (typeof input.showPicker === 'function') {
        input.showPicker();
      } else {
        input.focus();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!isRequiredFilled) {
      return;
    }

    const message = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email}`,
      `Tentative booking date from: ${formData.fromDate}`,
      `Tentative booking date to: ${formData.toDate}`,
      `Number of persons: ${formData.persons}`,
    ].join('\n');

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${contactData.whatsapp}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <section id="booking" className="booking-section">
      <div>
        <p className="section-label">Book your stay</p>
        <h2>📍 Book Your Stay</h2>
        <p>{contactData.bookingNote}</p>
        <button type="button" className="whatsapp-button" onClick={() => setIsOpen(true)}>
          <span className="whatsapp-icon" aria-hidden="true">💬</span>
          Book via WhatsApp
        </button>
      </div>

      <div className="booking-card">
        <div className="contact-item">
          <span className="contact-label">🌐 Website</span>
          <p>
            <a href={`https://${contactData.website}`} target="_blank" rel="noreferrer">
              {contactData.website}
            </a>
          </p>
        </div>
        <div className="contact-item">
          <span className="contact-label">📞 Phone</span>
          <p>{contactData.phone} • {contactData.contactPerson}</p>
        </div>
        <div className="contact-item location-item">
          <div className="location-text">
            <span className="contact-label">🗺️ Location</span>
            <p>
              <a href={contactData.mapsLink} target="_blank" rel="noreferrer">
                {contactData.mapsLink}
              </a>
            </p>
          </div>
          <img className="location-image" src={mapsImage} alt="Map location for CFE Eco Stay" />
        </div>
        <div className="contact-item">
          <span className="contact-label">✨ Additional services</span>
          <p>{contactData.bonfire}</p>
          <p>{contactData.transport}</p>
        </div>
      </div>

      {isOpen && (
        <div className="modal-backdrop" role="dialog" aria-modal="true">
          <div className="booking-modal">
            <div className="modal-header">
              <h3>Booking request</h3>
              <button type="button" className="modal-close" onClick={() => setIsOpen(false)}>
                ×
              </button>
            </div>

            <form className="booking-form" onSubmit={handleSubmit}>
              <div className="form-intro">
                <p>Tell us a little about your stay and we will reach out soon.</p>
              </div>

              <div className="form-grid">
                <label>
                  <span>Name *</span>
                  <input name="name" value={formData.name} onChange={handleChange} placeholder="Your full name" />
                </label>

                <label>
                  <span>Phone number *</span>
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your contact number"
                    inputMode="numeric"
                    maxLength={10}
                  />
                </label>

                <label>
                  <span>Email</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email address" />
                </label>

                <label>
                  <span>Guests</span>
                  <input type="number" min="1" name="persons" value={formData.persons} onChange={handleChange} placeholder="No. of persons" />
                </label>
              </div>

              <div className="date-row">
                <label>
                  <span>From</span>
                  <div className="date-picker-wrap">
                    <input
                      ref={(node) => {
                        dateInputRefs.current.fromDate = node;
                      }}
                      type="date"
                      name="fromDate"
                      value={formData.fromDate}
                      onChange={handleChange}
                      min={minDate}
                      max={maxDate}
                    />
                    <button type="button" className="date-picker-trigger" onClick={() => openDatePicker('fromDate')}>
                      📅
                    </button>
                  </div>
                </label>

                <label>
                  <span>To</span>
                  <div className="date-picker-wrap">
                    <input
                      ref={(node) => {
                        dateInputRefs.current.toDate = node;
                      }}
                      type="date"
                      name="toDate"
                      value={formData.toDate}
                      onChange={handleChange}
                      min={formData.fromDate || minDate}
                      max={maxDate}
                    />
                    <button type="button" className="date-picker-trigger" onClick={() => openDatePicker('toDate')}>
                      📅
                    </button>
                  </div>
                </label>
              </div>

              <button type="submit" className="submit-button" disabled={!isRequiredFilled}>
                Send to WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default BookingSection;
