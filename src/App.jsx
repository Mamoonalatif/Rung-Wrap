import { useEffect, useMemo, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import './App.css'
import facebook from './assets/facebook.png'
import instagram from './assets/insta.jpg'
import pinterest from './assets/pinterest.png'
import ThankYou from './ThankYou'

const previewSections = [
  'Home',
  'Invitations',
  'Gift Boxes',
  'Eid Baskets',
  'Custom Orders',
  'About Us',
  'Contact',
]

const announcements = [
  { text: 'Welcome to Rung & Wrap – where celebrations come to life', image: 'https://images.unsplash.com/photo-1519671482677-662481bca042?w=1200&h=720&fit=crop&crop=faces' },
  { text: 'Discover elegant wedding invitations and custom event stationery', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=1200&h=720&fit=crop' },
  { text: 'Transform your celebrations with luxury gift boxes and Eid baskets', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&h=720&fit=crop' },
  { text: 'Personalized service for every milestone and special moment', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1200&h=720&fit=crop' },
]

function App() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [activeSection, setActiveSection] = useState('')
  const [carouselIndex, setCarouselIndex] = useState(0)

  const [showThankYou, setShowThankYou] = useState(false)

  const floatingIcons = useMemo(
    () => ['✦', '◎', '◍', '✧', '◌', '◉', '✶', '◘'],
    []
  )

  const featuredServices = useMemo(
    () => [
      'Wedding Invitations',
      'Event Stationery',
      'Luxury Gift Boxes',
      'Goodie Bags',
      'Eid Baskets',
      'Custom Event Props',
      'Celebration Styling',
    ],
    []
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % announcements.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const handleNotifySubmit = (event) => {
    event.preventDefault()

    const trimmed = email.trim().toLowerCase()
    if (!trimmed) {
      setStatus('Please enter a valid email address.')
      return
    }

    try {
      const storageKey = 'rungandwrap_notify_emails'
      const saved = JSON.parse(localStorage.getItem(storageKey) || '[]')
      if (!saved.includes(trimmed)) {
        saved.push(trimmed)
        localStorage.setItem(storageKey, JSON.stringify(saved))
      }
      setStatus('✓ You are on our launch list!')
      setEmail('')
      navigate('/thankyou')
    } catch {
      setStatus('Could not save right now. Please try again.')
    }
  }

  return (
    <Routes>
      <Route path="/thankyou" element={<ThankYou />} />
      <Route path="/" element={<HomePage email={email} setEmail={setEmail} status={status} activeSection={activeSection} setActiveSection={setActiveSection} carouselIndex={carouselIndex} handleNotifySubmit={handleNotifySubmit} floatingIcons={floatingIcons} featuredServices={featuredServices} showThankYou={showThankYou} setShowThankYou={setShowThankYou} logo={logo} facebook={facebook} instagram={instagram} pinterest={pinterest} previewSections={previewSections} />} />
    </Routes>
  )
}

function HomePage({ email, setEmail, status, activeSection, setActiveSection, carouselIndex, handleNotifySubmit, floatingIcons, featuredServices, showThankYou, setShowThankYou, logo, facebook, instagram, pinterest, previewSections }) {
  const navigate = useNavigate()

  return (
    <div className="app-wrapper">
      {/* Full-width Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={logo} alt="Rung & Wrap" className="navbar-logo" />
          </div>
          <ul className="navbar-links">
            {previewSections.map((section) => (
              <li key={`nav-${section}`}>
                <button
                  type="button"
                  className="nav-btn"
                  onClick={() => setActiveSection(section)}
                >
                  {section}
                </button>
              </li>
            ))}
          </ul>
          <div className="navbar-socials">
            <a href="https://www.instagram.com/rungandwrap?igsh=MXY0dWx0cG50dmZwbw==" target="_blank" rel="noreferrer" title="Instagram" className="social-icon ig">
              <img src={instagram} alt="Instagram" className="social-icon-img" />
            </a>
            <a href="https://www.facebook.com/share/1MyjN4ia86/" target="_blank" rel="noreferrer" title="Facebook" className="social-icon fb">
              <img src={facebook} alt="Facebook" className="social-icon-img" />
            </a>
            <a href="https://pin.it/3YlMIYewZ" target="_blank" rel="noreferrer" title="Pinterest" className="social-icon pin">
              <img src={pinterest} alt="Pinterest" className="social-icon-img" />
            </a>
    
          </div>
        </div>
      </nav>

      {/* Floating Icons */}
      <div className="floating-icons" aria-hidden="true">
        {floatingIcons.map((icon, i) => (
          <span key={i} className="float-icon" style={{ '--delay': `${i * 0.8}s` }}>
            {icon}
          </span>
        ))}
      </div>

      {/* Main Content */}
      <main className="coming-soon-page">
        <div className="ambient ambient-left"></div>
        <div className="ambient ambient-right"></div>

        {/* Coming Soon Banner */}
        <section className="coming-soon-banner">
          <h1 className="banner-title">Coming Soon</h1>
          <p className="banner-subtitle">Something extraordinary is on the way...</p>
        </section>

        {/* Gift Box Animation */}
        <section className="gift-box-animation">
          <div className="gift-box-container">
            <div className="gift-box">
              <div className="gift-box-lid"></div>
              <div className="gift-box-body"></div>
              <div className="gift-box-ribbon-horizontal"></div>
              <div className="gift-box-ribbon-vertical"></div>
              <div className="gift-box-bow"></div>
            </div>
            <div className="coming-soon-popup">
              <p>Coming Soon</p>
            </div>
          </div>
        </section>

        {/* Hero Section */}
        <header className="hero">
          <p className="brand-kicker">Event Details & Gifting Studio</p>
          <p className="brand-description">
            Rung & Wrap curates elegant wedding invitations, event stationery,
            gift boxes, goodie bags, Eid baskets, event props, and customized
            celebration details designed to make every moment unforgettable.
          </p>
        </header>

        {/* Contact Bar */}
        <section className="contact-bar" aria-label="Contact information">
          <a href="mailto:rungandwrap@gmail.com" className="contact-chip">
            <span className="chip-icon">✉</span>
            rungandwrap@gmail.com
          </a>
          <a href="https://www.instagram.com/rungandwrap?igsh=MXY0dWx0cG50dmZwbw==" className="contact-chip" target="_blank" rel="noreferrer">
            <span className="chip-icon">◎</span>
            Instagram
          </a>
          <a href="https://www.facebook.com/share/1MyjN4ia86/" className="contact-chip" target="_blank" rel="noreferrer">
            <span className="chip-icon">◌</span>
            Facebook
          </a>
          <a href="https://pin.it/3YlMIYewZ" className="contact-chip" target="_blank" rel="noreferrer">
            <span className="chip-icon">◍</span>
            Pinterest
          </a>
        </section>

  


      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Rung & Wrap</h4>
            <p>&copy; 2025 All Rights Reserved</p>
          </div>
          <div className="footer-section">
            <h4>Contact Us</h4>
            <a href="mailto:rungandwrap@gmail.com">rungandwrap@gmail.com</a>
          </div>
        </div>

      </footer>

      {/* Section Overlay */}
      {activeSection ? (
        <section className="section-overlay" aria-live="polite">
          <div className="overlay-card">
            <p className="overlay-kicker">Rung & Wrap</p>
            <h3>{activeSection}</h3>
            <p>This section is coming soon with a premium experience.</p>
            <button type="button" onClick={() => setActiveSection('')}>
              Close
            </button>
          </div>
        </section>
      ) : null}
    </div>
  )
}

export default App
