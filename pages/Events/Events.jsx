// src/Pages/Events.jsx

import React, { useEffect, useState } from "react";
import "./EventsStyle.css";

export default function Events() {
  const [eventsData, setEventsData] = useState({
    liveEvents: [],
    pastEvents: [],
  });

  useEffect(() => {
    // Future API Ready
    // fetch("/api/events")
    //   .then((res) => res.json())
    //   .then((data) => setEventsData(data));

    // Temporary Dynamic Data
    setEventsData({
      liveEvents: [
        {
          id: 1,
          title: "Live Annual Jalsa Program",
          date: "21 April 2026",
          youtube: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          id: 2,
          title: "Ramadan Bayan Live",
          date: "22 April 2026",
          youtube: "https://www.youtube.com/embed/ysz5S6PUM-U",
        },
      ],

      pastEvents: [
        {
          id: 1,
          title: "Quran Competition 2025",
          date: "15 March 2025",
          youtube: "https://www.youtube.com/embed/tgbNymZ7vqY",
        },
        {
          id: 2,
          title: "Admission Seminar 2025",
          date: "10 June 2025",
          youtube: "https://www.youtube.com/embed/jNQXAC9IVRw",
        },
        {
          id: 3,
          title: "Annual Jalsa 2024",
          date: "25 Dec 2024",
          youtube: "https://www.youtube.com/embed/M7lc1UVf-VE",
        },
      ],
    });
  }, []);

  return (
    <section className="events-section">
      {/* Header */}
      <div className="events-header">
        <h1>Events</h1>
        <p>Live Programs & Past Event Gallery</p>
      </div>

      {/* Live Events */}
      {eventsData.liveEvents.length > 0 && (
        <>
          <h2 className="section-title live-title">🔴 Live Events</h2>

          <div className="live-grid">
            {eventsData.liveEvents.map((event) => (
              <div className="event-card live-card" key={event.id}>
                <iframe
                  src={event.youtube}
                  title={event.title}
                  allowFullScreen
                ></iframe>

                <div className="event-content">
                  <h3>{event.title}</h3>
                  <p>{event.date}</p>
                  <span className="live-badge">LIVE NOW</span>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Past Events */}
      <h2 className="section-title">Past Events</h2>

      <div className="past-grid">
        {eventsData.pastEvents.map((event) => (
          <div className="event-card" key={event.id}>
            <iframe
              src={event.youtube}
              title={event.title}
              allowFullScreen
            ></iframe>

            <div className="event-content">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}