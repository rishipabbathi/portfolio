import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, NavLink, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import './App.css';

function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    const move = e => setPos({ x: e.clientX, y: e.clientY });
    const hide = () => setHidden(true);
    const show = () => setHidden(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', hide);
    window.addEventListener('mouseenter', show);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', hide);
      window.removeEventListener('mouseenter', show);
    };
  }, []);
  return (
    <div
      className={`cursor ${hidden ? 'cursor--hidden' : ''}`}
      style={{ left: pos.x, top: pos.y }}
    />
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <a href="#/" className="nav-brand">Rishi Pabbathi</a>
      <div className="nav-links">
        <NavLink to="/" end className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>Home</NavLink>
        <NavLink to="/projects" className={({ isActive }) => `nav-link ${isActive ? 'nav-link--active' : ''}`}>Projects</NavLink>
      </div>
    </nav>
  );
}

function ScrollTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <HashRouter>
      <ScrollTop />
      <Cursor />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
        <footer className="footer">
          <div className="footer-inner">
            <span className="footer-left">© 2025 Rishi Vijay Viswas Pabbathi</span>
            <div className="footer-links">
              <a href="https://github.com/rishipabbathi" target="_blank" rel="noreferrer" className="footer-link">GitHub</a>
              <a href="https://linkedin.com/in/rishipabbathi" target="_blank" rel="noreferrer" className="footer-link">LinkedIn</a>
              <a href="mailto:rishivijayviswas@gmail.com" className="footer-link">Email</a>
            </div>
          </div>
        </footer>
      </div>
    </HashRouter>
  );
}