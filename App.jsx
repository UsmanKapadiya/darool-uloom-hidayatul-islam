// src/App.jsx

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Component/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Events from "./pages/Events/Events";
import Gallery from "./pages/Gallery/Gallery";
import Contact from "./pages/Contact/Contact";
import Introduction from "./pages/Introduction/Introduction";

import "./style/style.css";
import GalleryDetails from "./pages/Gallery/GalleryDetails";
import Donation from "./pages/Donation/Donation";
import BankDetails from "./pages/BankDetails/BankDetails";

export default function App() {
  return (
    <BrowserRouter>
        <Header />

        <Routes>
          {/* Frontend Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/:category" element={<GalleryDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/introduction/:lang" element={<Introduction />} />

          {/* 404 Page */}
          <Route path="*" element={<h2 style={{ textAlign: "center" }}>Page Not Found</h2>} />
        </Routes>
    </BrowserRouter>
  );
}