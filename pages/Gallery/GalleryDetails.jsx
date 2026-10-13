// src/Pages/GalleryDetails.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import "./GalleryStyle.css";

/* Computer Images */
import computer1 from "../../assets/images/computer1.jpg";
import computer2 from "../../assets/images/computer2.jpg";
import computer3 from "../../assets/images/computer3.jpg";

/* Tailoring */
import tailoring1 from "../../assets/images/tailoring1.jpg";
import tailoring2 from "../../assets/images/tailoring2.jpg";

/* Driving */
import driving1 from "../../assets/images/driving1.png";
import driving2 from "../../assets/images/driving2.jpg";

/* English */
import english1 from "../../assets/images/english1.jpg";
import english2 from "../../assets/images/english2.jpg";

export default function GalleryDetails() {
  const { category } = useParams();

  const galleryImages = {
    "computer-class": {
      title: "Computer Class",
      images: [computer1, computer2, computer3],
    },

    "tailoring-class": {
      title: "Tailoring Class",
      images: [tailoring1, tailoring2],
    },

    "driving-class": {
      title: "Driving Class",
      images: [driving1, driving2],
    },

    "spoken-english-class": {
      title: "Spoken English Class",
      images: [english1, english2],
    },
  };

  const selected = galleryImages[category];

  if (!selected) {
    return <h2 style={{ textAlign: "center" }}>No Gallery Found</h2>;
  }

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h1>{selected.title}</h1>
        <p>All Images</p>
      </div>

      <div className="images-grid">
        {selected.images.map((img, index) => (
          <img src={img} alt="gallery" key={index} />
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <Link to="/gallery" className="back-btn">
          ← Back To Gallery
        </Link>
      </div>
    </section>
  );
}