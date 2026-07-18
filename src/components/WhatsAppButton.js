import React, { useEffect, useState } from 'react';

export default function WhatsAppButton() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const header = document.querySelector('.header-cover');
    if (!header) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        // hide the button while the header is visible in the viewport
        setHidden(entry.isIntersecting);
      },
      { root: null, threshold: 0 }
    );

    obs.observe(header);
    return () => obs.disconnect();
  }, []);

  function openBooking() {
    // Dispatch a global event that BookingSection listens for to open the modal
    const ev = new CustomEvent('openBookingModal');
    window.dispatchEvent(ev);
  }

  return (
    <button
      type="button"
      className={`whatsapp-btn ${hidden ? 'hidden' : ''}`}
      onClick={openBooking}
      aria-label="Open booking form"
    >
      <span className="wa-icon">💬</span>
      <span className="wa-text">Book via WhatsApp</span>
    </button>
  );
}
