import '../App.css';

function Navbar({ theme, onToggleTheme }) {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <a href="#" className="brand">
          <span className="brand-icon" aria-hidden="true">🏡</span>
          <span className="brand-text">
            <strong>CFE Eco</strong>
            <span className="brand-subtitle">Stay</span>
          </span>
        </a>

        <ul className="nav-links">
          <li><a href="#top" className="active" aria-current="page">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#booking">Contact</a></li>
        </ul>

        <div className="navbar-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle color theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
