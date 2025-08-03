import React from "react";

const GuestPage = () => {
    return (
        <div>
            <h2>Welcome Guest 👋</h2>
            <p>Here are the available flight details:</p>
            <ul>
                <li>Flight A - Chennai to Delhi - ₹4500</li>
                <li>Flight B - Mumbai to Bangalore - ₹4200</li>
                <li>Flight C - Kolkata to Pune - ₹5100</li>
            </ul>
            <p><b>Login to book your tickets.</b></p>
        </div>
    );
};

export default GuestPage;
