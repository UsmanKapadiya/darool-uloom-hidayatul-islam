// src/Pages/Contact.jsx

import React from "react";
import "./ContactStyle.css";

export default function Contact() {
  return (
    <section className="contact-section">
      <div className="contact-header">
        <h1>Contact Us</h1>
        <p>Darool Uloom Hidayatul Islam</p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-card">
          <h2>Get In Touch</h2>

          <div className="contact-item">
            <span>📍</span>
            <p>Surat, Gujarat, India</p>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>+91 98765 43210</p>
          </div>

          <div className="contact-item">
            <span>☎️</span>
            <p>+91 98765 11111</p>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <p>info@darooluloom.com</p>
          </div>

          <div className="contact-item">
            <span>🌐</span>
            <p>www.darooluloom.com</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-card">
          <h2>Office Hours</h2>

          <div className="hours-box">
            <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
            <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
            <p><strong>Sunday:</strong> Closed</p>
          </div>

          <button className="contact-btn">Send Message</button>
        </div>
      </div>
    </section>
  );
}