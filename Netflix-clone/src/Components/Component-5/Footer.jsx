import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
        <p>Questions? call 000-800-919-1743</p>
        <div className='list-container'>
            <ul>
                <li>FAQ</li>
                <li>Investor Relations</li>
                <li>Privacy</li>
                <li>Speed Test</li>
            </ul>
            <ul>
                <li>Help Center</li>
                <li>Jobs</li>
                <li>Cookie Prferences</li>
                <li>Legal Noticies</li>
            </ul>
            <ul>
                <li>Account</li>
                <li>Ways tp Watch</li>
                <li>Coporate Information</li>
                <li>Only on Netflix</li>
            </ul>
            <ul>
                <li>Media Center</li>
                <li>Terms of use</li>
                <li>Contact Us</li>
            </ul>
        </div>
        <div className="select-wrapper">
            <select>
              <option>English</option>
              <option>हिन्दी</option>
            </select>
        </div>
        <div className="extra-text">
            <p>Netfilx India</p>
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <span>Learn more.</span></p>
        </div>
    </div>
  )
}

export default Footer