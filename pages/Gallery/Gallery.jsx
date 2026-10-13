// src/Pages/Gallery.jsx

import React from "react";
import { useNavigate } from "react-router-dom";
import "./GalleryStyle.css";

/* Category Cover Images */
import computer1 from "../../assets/images/computer1.jpg";
import tailoring1 from "../../assets/images/tailoring1.jpg";
import driving1 from "../../assets/images/driving1.png";
import english1 from "../../assets/images/english1.jpg";

export default function Gallery() {
  const navigate = useNavigate();

  const galleryData = [
    {
      id: 1,
      title: "Computer Class",
      cover: computer1,
      slug: "computer-class",
    },
    {
      id: 2,
      title: "Tailoring Class",
      cover: tailoring1,
      slug: "tailoring-class",
    },
    {
      id: 3,
      title: "Driving Class",
      cover: driving1,
      slug: "driving-class",
    },
    {
      id: 4,
      title: "Spoken English Class",
      cover: english1,
      slug: "spoken-english-class",
    },
  ];

  const openGallery = (slug) => {
    navigate(`/gallery/${slug}`);
  };

  return (
    <section className="gallery-section">
      <div className="gallery-header">
        <h1>Gallery</h1>
        <p>Select Category to View Images</p>
      </div>

      <div className="category-grid">
        {galleryData.map((item) => (
          <div
            className="category-card"
            key={item.id}
            onClick={() => openGallery(item.slug)}
          >
            <img src={item.cover} alt={item.title} />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}