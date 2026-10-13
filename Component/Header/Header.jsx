// src/Component/Header/Header.jsx

import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.jpg";

export default function Header() {
  return (
    <>
      <header className="top-header">
        {/* Logo */}
        <div className="logo-box">
          <img src={logo} alt="logo" />
        </div>

        {/* Title */}
        <div className="title-box">

          <h1>دارالعلوم ھدایت الاسلام اینڈ ایجوکیشن وقف</h1>
          <h2>Darool Uloom Hidayatul Islam & Education Waqf</h2>
        </div>
        <div className="logo-box" style={{marginLeft:25}}>
          <img src={logo} alt="logo" />
        </div>
      </header>

      {/* Navigation */}
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/about">About</Link>
        <Link to="/events">Events</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/admission">Admission</Link>
        <Link to="/books">Books</Link>
        <Link to="/contact">Contact</Link>
        {/* <Link to="/admin/login" className="admin-link">⚙️ Admin</Link> */}
      </nav>
    </>
  );
}