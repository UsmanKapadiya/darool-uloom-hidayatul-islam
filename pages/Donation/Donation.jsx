// src/Pages/Donation.jsx

import React, { useState } from "react";
import "./DonationStyle.css";

export default function Donation() {
    const [formData, setFormData] = useState({
        fullName: "",
        mobile: "",
        email: "",
        amount: "",
        purpose: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Future API / Payment Gateway
        console.log(formData);

        alert("Donation Request Submitted Successfully");
    };

    return (
        <section className="donation-section">
            <div className="donation-header">
                <h1>Online Donation</h1>
                <p>Support Darool Uloom Hidayatul Islam</p>
            </div>

            <div className="donation-container">
                {/* Left Info */}
                <div className="donation-info">
                    <h2>Your Support Matters</h2>

                    <p>
                        Help us continue Islamic education, student welfare,
                        masjid maintenance and community services.
                    </p>

                    <div className="donation-box">
                        <h3>Bank Details</h3>
                        <p><strong>Bank Name:</strong> BOB Bank (Station Road Amod)</p>
                        <p><strong>Account Name:</strong> Darool Uloom Hidayatul Islam</p>
                        <p><strong>Account No:</strong> 16710100020871</p>
                        <p><strong>IFSC Code:</strong> BARB0AMODXX <span>(fifth Charahter is Zero)</span></p>
                        <p><strong>MICR Code:</strong> 392012501</p>
                        <p><strong>SWIFT Code:</strong> BARBINBBGNF</p>
                    </div>

                    <div className="donation-box">
                        <h3>Bank Details</h3>
                        <p><strong>Bank Name:</strong> AXIX BANK BHARUCH</p>
                        <p><strong>Account Name:</strong> Darool Uloom Hidayatul Islam</p>
                        <p><strong>Account No:</strong> 9210100016770626</p>
                        <p><strong>IFSC Code:</strong> UTIB0001948 <span>(fifth Charahter is Zero)</span></p>
                        <p><strong>MICR Code:</strong> 392211002</p>
                        <p><strong>SWIFT Code:</strong> AXISINBB468</p>
                    </div>
                </div>

                {/* Right Form */}
                <div className="donation-form-card">
                    <form onSubmit={handleSubmit}>
                        <h2>Donation Form</h2>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            value={formData.fullName}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="text"
                            name="mobile"
                            placeholder="Mobile Number"
                            value={formData.mobile}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={formData.email}
                            onChange={handleChange}
                        />

                        <input
                            type="number"
                            name="amount"
                            placeholder="Donation Amount"
                            value={formData.amount}
                            onChange={handleChange}
                            required
                        />

                        <select
                            name="purpose"
                            value={formData.purpose}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Select Purpose</option>
                            <option value="General Donation">General Donation</option>
                            <option value="Zakat">Zakat</option>
                            <option value="Sadqa">Sadqa</option>
                            <option value="Student Help">Student Help</option>
                            <option value="Building Fund">Building Fund</option>
                        </select>

                        <input
                            type="text"
                            name="documentId"
                            placeholder="Document ID (Aadhaar/PAN) No."
                            value={formData.documentId}
                            onChange={handleChange}
                            required
                        />

                        <textarea
                            name="message"
                            rows="4"
                            placeholder="Message (Optional)"
                            value={formData.message}
                            onChange={handleChange}
                        ></textarea>

                        <button type="submit">Proceed Donation</button>
                    </form>
                </div>
            </div>
        </section>
    );
}