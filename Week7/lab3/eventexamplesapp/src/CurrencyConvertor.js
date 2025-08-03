import React, { useState } from "react";

const CurrencyConvertor = () => {
    const [rupees, setRupees] = useState("");
    const [euro, setEuro] = useState(null);

    const handleChange = (e) => {
        setRupees(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // use of SyntheticEvent
        const result = parseFloat(rupees) / 90; // Assuming 1 Euro = ₹90
        setEuro(result.toFixed(2));
    };

    return (
        <div>
            <h2>Currency Convertor (INR ➡️ EURO)</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    placeholder="Enter amount in INR"
                    value={rupees}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Convert</button>
            </form>
            {euro !== null && <p>💶 Euro: €{euro}</p>}
        </div>
    );
};

export default CurrencyConvertor;
