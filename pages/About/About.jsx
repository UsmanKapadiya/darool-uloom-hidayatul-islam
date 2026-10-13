// src/Pages/About.jsx

import React, { useEffect, useState } from "react";
import "./AboutStyle.css";

export default function About() {
  const [aboutData, setAboutData] = useState(null);

  useEffect(() => {
    // Future API Ready Structure
    // fetch("/api/about")
    //   .then((res) => res.json())
    //   .then((data) => setAboutData(data));

    // Temporary Dynamic Dummy Data
    const data = {
      title: "About Us",
      subtitle: "Darool Uloom Hidayatul Islam",
      description:
        "The day of Thursday, 15th Muharram, A.H. 1283 (May 31, 1866), was that blessed and auspicious day in the Islamic history of India when the foundation stone for the renaissance of Islamic sciences was laid in the land of Deoband. Seeing the simple and ordinary manner in which it had been started, it was difficult to visualize and decide that a Madrasah beginning so humbly, with utter lack of equipment’s, was destined to become the center, within a couple of years, of the Islamic sciences in Asia.Accordingly, before long, students desirous of studying the Holy Book and the Sunnah, the Shari’ah and the Tariqah (the spiritual path), began to flock here in droves from this sub continent as well as from neighboring and distant countries like Afghanistan, Iran, Bukhara and Samarqand, Burma, Indonesia, Malaysia, Turkey and the far off regions of the continent of Africa, and within a short-time the radiant rays of knowledge and wisdom illumined the heart and mind of the Muslims of the continent of Asia with the light of faith (Iman) and Islamic culture.",
      mission:
        "To prepare students with strong Islamic knowledge, ethics and modern awareness.",
      vision:
        "To become a leading Islamic educational institution that benefits society.",
      values: [
        "Islamic Education",
        "Discipline & Respect",
        "Character Building",
        "Community Service",
        "Modern Values"
      ],
      stats: [
        { label: "Students", value: "1200+" },
        { label: "Teachers", value: "45+" },
        { label: "Courses", value: "18+" },
        { label: "Years Service", value: "25+" }
      ]
    };

    setAboutData(data);
  }, []);

  if (!aboutData) return <h2 className="loading">Loading...</h2>;

  return (
    <section className="about-section">
      {/* Header */}
      <div className="about-header">
        <h1>{aboutData.title}</h1>
        <p>{aboutData.subtitle}</p>
      </div>

      {/* Description */}
      <div className="about-card">
        {/* <h2>Who We Are</h2> */}
        <p>{aboutData.description}</p>
      </div>

      {/* Mission & Vision */}
      <div className="about-grid">
        <div className="about-card">
          <h2>Our Mission</h2>
          <p>{aboutData.mission}</p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>{aboutData.vision}</p>
        </div>
      </div>

      {/* Values */}
      {/* <div className="about-card">
        <h2>Our Core Values</h2>

        <div className="values-grid">
          {aboutData.values.map((item, index) => (
            <div className="value-box" key={index}>
              {item}
            </div>
          ))}
        </div>
      </div> */}

      {/* Stats */}
      <div className="stats-grid">
        {aboutData.stats.map((item, index) => (
          <div className="stat-box" key={index}>
            <h3>{item.value}</h3>
            <p>{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}