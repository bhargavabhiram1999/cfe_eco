import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ExperienceSection from './components/ExperienceSection';
import AttractionsSection from './components/AttractionsSection';
import AccommodationSection from './components/AccommodationSection';
import BookingSection from './components/BookingSection';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark'));
  };

  const highlights = [
    'Community-run, not commercial tourism',
    'Directly supports tribal communities',
    'Located in pristine forest surroundings',
    'Sustainable and eco-friendly living',
    'Peaceful, crowd-free environment',
  ];

  const experiences = [
    'Bonfire under the stars',
    'Guided sunrise visits',
    'Nature walks and forest exploration',
    'Learn about sustainable farming',
    'Local culture and village interaction',
  ];

  const attractions = [
    'Maredumilli forest region',
    'Dumpavalasa waterfalls',
    'Chavadikota View Point',
    'Gudisa sunrise point',
  ];

  const rooms = [
    {
      title: 'Suite Room (Up to 3 Guests)',
      description: 'Private bedroom with attached washroom, designed for a peaceful nature retreat.',
      price: '₹3,000 per night',
      capacity: 'Up to 3 guests',
    },
    {
      title: 'Deluxe Dorm (Up to 5 Guests)',
      description: 'Spacious shared accommodation with attached washroom, ideal for families/groups.',
      price: '₹4,000 per night',
      capacity: 'Up to 5 guests',
    },
  ];

  return (
    <div id="top" className={`app-shell ${theme === 'light' ? 'theme-light' : 'theme-dark'}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main className="page-content">
        <HeroSection highlights={highlights} />
        <AboutSection />
        <ExperienceSection experiences={experiences} attractions={attractions} />
        <AttractionsSection />
        <AccommodationSection rooms={rooms} />
        <BookingSection />
      </main>
    </div>
  );
}

export default App;
