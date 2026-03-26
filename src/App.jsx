import { useEffect, useMemo, useState } from 'react'
import logo from './assets/logo.png'
import './App.css'

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
  { text: 'Welcome to Rung & Wrap – where celebrations come to life', image: 'https://images.unsplash.com/photo-1519671482677-662481bca042?w=400&h=300&fit=crop' },
  { text: 'Discover elegant wedding invitations and custom event stationery', image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=400&h=300&fit=crop' },
  { text: 'Transform your celebrations with luxury gift boxes and Eid baskets', image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop' },
  { text: 'Personalized service for every milestone and special moment', image: 'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=400&h=300&fit=crop' },
]

function App() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')
  const [activeSection, setActiveSection] = useState('')
  const [carouselIndex, setCarouselIndex] = useState(0)

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
    } catch {
      setStatus('Could not save right now. Please try again.')
    }
  }

  return (
    <div className="app-wrapper">
      {/* Full-width Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-brand">
            <img src={logo} alt="Rung & Wrap" className="navbar-logo" />
            <span className="brand-text">Rung & Wrap</span>
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
            <a href="https://www.facebook.com/share/1MyjN4ia86/" target="_blank" rel="noreferrer" title="Facebook" className="social-icon fb">f</a>
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" title="LinkedIn" className="social-icon linkedin">in</a>
            <a href="https://pin.it/3YlMIYewZ" target="_blank" rel="noreferrer" title="Pinterest" className="social-icon pin">P</a>
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

        {/* Announcement Carousel */}
        <section className="announcement-carousel">
          <div className="carousel-wrapper">
            {announcements.map((item, i) => (
              <div
                key={i}
                className={`carousel-slide ${i === carouselIndex ? 'active' : ''}`}
                aria-hidden={i !== carouselIndex}
              >
                {item.image && (
                  <div className="carousel-image-container">
                    <img src={item.image} alt="" className="carousel-image" />
                  </div>
                )}
                <p className="carousel-text">{item.text}</p>
              </div>
            ))}
          </div>
          <div className="carousel-dots">
            {announcements.map((_, i) => (
              <button
                key={i}
                className={`dot ${i === carouselIndex ? 'active' : ''}`}
                onClick={() => setCarouselIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
              />
            ))}
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

        {/* Featured Services */}
        <section className="showcase" aria-label="Featured services preview">
          <h2>Signature Services</h2>
          <div className="marquee-track">
            {[...featuredServices, ...featuredServices].map((service, index) => (
              <div className="service-pill" key={`${service}-${index}`}>
                <span>✦</span>
                {service}
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter */}
        <section className="newsletter" aria-label="Newsletter subscription">
          <h2>Get notified when we launch</h2>
          <form className="newsletter-form" onSubmit={handleNotifySubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="newsletter-input"
            />
            <button type="submit" className="newsletter-btn">Notify Me</button>
          </form>
          {status ? <p className="form-status">{status}</p> : null}
        </section>


      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Rung & Wrap</h4>
            <p>Elegant event details and luxury gifting since 2024</p>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="mailto:rungandwrap@gmail.com">rungandwrap@gmail.com</a>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="https://www.instagram.com/rungandwrap?igsh=MXY0dWx0cG50dmZwbw==" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/share/1MyjN4ia86/" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://pin.it/3YlMIYewZ" target="_blank" rel="noreferrer">Pinterest</a>
            </div>
          </div>
        </div>
        <p className="footer-credit">Crafted with love for celebrations.</p>
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
