import React from 'react'
import "./MainSection.css"
import logo from '../../assets/logo.png'


const MainSection = () => {
  return (
    <div className='main-section'>
      <div className='navbar'>
        <img src={logo} alt="" />
        <div className="buttons">
          <div className="select-wrapper">
            <select>
              <option>English</option>
              <option>हिन्दी</option>
            </select>
          </div>

          <button>Sign in</button>
        </div>
      </div>
      <div className="hero-section">
        <h1>Unlimited movies, TV shows and more</h1>
        <p style={{fontSize: "24px", fontWeight:'600'}}>Starts at ₹149. Cancel at any time.</p>
        <p style={{fontSize: "20px", marginTop: "20px"}}>Ready to watch? Enter your email to create or restart your membership.</p>
        <div className="form">
          <input type="email" placeholder="Email address"/>
          <button>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default MainSection