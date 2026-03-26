import logo from './assets/logo.png'
import './App.css'

const previewSections = [
  'Home',
  'Invitations',
  'Gift Boxes',
  'Goodie Bags',
  'Eid Baskets',
  'Event Details',
  'Gallery',
  'Custom Orders',
  'About Us',
  'Contact',
]

function App() {

  return (
    <main className="coming-soon-page">
      <div className="ambient ambient-left" aria-hidden="true"></div>
      <div className="ambient ambient-right" aria-hidden="true"></div>

      <header className="hero">
        <img src={logo} className="brand-logo" alt="Rung & Wrap logo" />
        <p className="brand-kicker">Event Details & Gifting Studio</p>
        <h1>Coming Soon</h1>
        <p className="brand-description">
          Rung & Wrap curates elegant wedding invitations, event stationery,
          gift boxes, goodie bags, Eid baskets, event props, and customized
          celebration details designed to make every moment unforgettable.
        </p>
      </header>

      <section className="contact-bar" aria-label="Contact information">
        <a href="mailto:rungandwrap@gmail.com" className="contact-chip">
          <span className="chip-icon" aria-hidden="true">
            ✉
          </span>
          rungandwrap@gmail.com
        </a>
        <a href="#" className="contact-chip" aria-label="Instagram coming soon">
          <span className="chip-icon" aria-hidden="true">
            ◉
          </span>
          Instagram (coming soon)
        </a>
      </section>

      <section className="newsletter" aria-label="Newsletter subscription">
        <h2>Get notified when we launch</h2>
        <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
          <label htmlFor="launch-email" className="sr-only">
            Email address
          </label>
          <input
            id="launch-email"
            type="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Notify Me</button>
        </form>
      </section>

      <section className="preview" aria-label="Future website sections">
        <h2>What You Will Find</h2>
        <div className="preview-grid">
          {previewSections.map((section) => (
            <article key={section} className="preview-card">
              <span className="card-dot" aria-hidden="true"></span>
              <p>{section}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer-note">Crafted with love for celebrations.</footer>
    </main>
  )
}

export default App
