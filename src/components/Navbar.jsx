import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const LINKS = [
  { to: '/', label: '[ ACCUEIL ]' },
  { to: '/projets', label: '[ PROJETS ]' },
  { to: '/parcours', label: '[ PARCOURS ]' },
  { to: '/cv', label: '[ CV ]' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <button
        className={`hamburger ${open ? 'active' : ''}`}
        onClick={() => setOpen(v => !v)}
        aria-label="Menu"
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`nav-overlay ${open ? 'open' : ''}`} onClick={() => setOpen(false)}>
        <nav className="nav-menu" onClick={e => e.stopPropagation()}>
          <div className="nav-logo">
            <span className="nav-logo-prefix">&gt; </span>
            kevan.gautier
          </div>
          {LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link ${location.pathname === link.to ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="nav-footer-tag">
            {'// Développeur Full Stack'}
          </div>
        </nav>
      </div>
    </>
  );
}
