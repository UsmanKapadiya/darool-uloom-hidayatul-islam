// src/Pages/BankDetails.jsx

import React from "react";
import "./BankDetailsStyle.css";
import { useNavigate } from "react-router-dom";

export default function BankDetails() {
    const navigate = useNavigate();
    const bankData = [
        {
            bank: "BOB Bank (Station Road Amod)",
            account: "Darool Uloom Hidayatul Islam",
            number: "16710100020871",
            ifsc: "BARB0AMODXX",
            micr: "392012501",
            swift: "BARBINBBGNF",
        },
        {
            bank: "Axis Bank Bharuch",
            account: "Darool Uloom Hidayatul Islam",
            number: "9210100016770626",
            ifsc: "UTIB0001948",
            micr: "392211002",
            swift: "AXISINBB468",
        },
    ];

    return (
        <section className="bank-section">
            <div className="bank-header">
                <h1>Bank Details</h1>
                <p>All Donation Bank Accounts</p>
            </div>

            {/* Main Layout */}
            <div className="bank-layout">
                {/* Left Side */}
                <div className="bank-grid">
                    {bankData.map((item, index) => (
                        <div className="bank-card" key={index}>
                            <h2>{item.bank}</h2>

                            <p><strong>Account Name:</strong> {item.account}</p>
                            <p><strong>Account No:</strong> {item.number}</p>
                            <p><strong>IFSC:</strong> {item.ifsc}</p>
                            <p><strong>MICR:</strong> {item.micr}</p>
                            <p><strong>SWIFT:</strong> {item.swift}</p>
                        </div>
                    ))}
                </div>

                {/* Right Sidebar */}
                <div className="bank-sidebar">
                    <h2>Quick Info</h2>

                    <div className="sidebar-box">
                        <p>✔ Online Donation Available</p>
                        <p>✔ Bank Transfer Accepted</p>
                        <p>✔ UPI / QR Coming Soon</p>
                        <p>✔ Receipt Available</p>
                    </div>

                    <div className="sidebar-box">
                        <h3>Contact</h3>
                        <p>📞 o2641299072 (office)</p>
                        <p>📞 +91 98987 85731</p>
                        <p>📞 +91 97376 61053</p>
                        <p>📧 info@darooluloom.com</p>
                    </div>

                    <button className="sidebar-btn" onClick={() => navigate('/donation')}>
                        Donate Now
                    </button>
                </div>
            </div>
        </section>
    );
}