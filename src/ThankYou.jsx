import { useNavigate } from 'react-router-dom'
import logo from './assets/logo.png'
import './ThankYou.css'

export default function ThankYou() {
  const navigate = useNavigate()

  const handleBack = () => {
    navigate('/')
  }

  return (
    <div className="thankyou-page">
      <div className="thankyou-container">
        <div className="thankyou-content">
          <div className="thankyou-logo-wrapper">
            <img src={logo} alt="Rung & Wrap" className="thankyou-logo-image" />
          </div>
          
          <h1 className="thankyou-title">Thank You!</h1>
          <p className="thankyou-subtitle">We're Thrilled You're Joining Us</p>
          
          <p className="thankyou-message">
            Check your inbox for exclusive updates about our launch. You'll be among the first to experience Rung & Wrap's premium event and gifting services.
          </p>

          <div className="thankyou-features">
            <div className="feature-item">
              <span className="feature-icon">✦</span>
              <span>Exclusive Early Access</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✦</span>
              <span>Special Launch Offers</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✦</span>
              <span>Premium Announcements</span>
            </div>
          </div>

          <button onClick={handleBack} className="thankyou-back-btn">
            Return to Home
          </button>
        </div>
      </div>
    </div>
  )
}
