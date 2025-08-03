import React, { useState } from "react";

const ComplaintRegister = () => {
    const [employeeName, setEmployeeName] = useState("");
    const [complaint, setComplaint] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const referenceNumber = Math.floor(Math.random() * 1000000);
        alert(
            `Complaint raised successfully!\n\nEmployee Name: ${employeeName}\nComplaint: ${complaint}\nReference No: ${referenceNumber}`
        );

        // Clear form
        setEmployeeName("");
        setComplaint("");
    };

    return (
        <div style={{ padding: "20px" }}>
            <h2>Complaint Register</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Employee Name:</label><br />
                    <input
                        type="text"
                        value={employeeName}
                        onChange={(e) => setEmployeeName(e.target.value)}
                        required
                        placeholder="Enter your name"
                    />
                </div>
                <br />
                <div>
                    <label>Complaint:</label><br />
                    <textarea
                        rows="4"
                        cols="40"
                        value={complaint}
                        onChange={(e) => setComplaint(e.target.value)}
                        required
                        placeholder="Describe your complaint"
                    ></textarea>
                </div>
                <br />
                <button type="submit">Submit Complaint</button>
            </form>
        </div>
    );
};

export default ComplaintRegister;
