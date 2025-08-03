import React from "react";
import "./App.css";

function App() {
  // Office space data (list of objects)
  const officeList = [
    {
      id: 1,
      name: "SpaceX Hub",
      rent: 55000,
      address: "MG Road, Bengaluru",
      image: "https://picsum.photos/300/150?random=5",
    },
    {
      id: 2,
      name: "Innovate Tower",
      rent: 75000,
      address: "T Nagar, Chennai",
      image: "https://picsum.photos/300/150?random=3",
    },
    {
      id: 3,
      name: "Workloft",
      rent: 60000,
      address: "Gachibowli, Hyderabad",
      image: "https://picsum.photos/300/150?random=1",
    },
  ];

  // JSX style object
  const containerStyle = {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  };

  const cardStyle = {
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    marginBottom: "20px",
    width: "300px",
  };

  const headingStyle = {
    color: "#2c3e50",
    textAlign: "center",
  };

  return (
    <div style={containerStyle}>
      {/* JSX Heading */}
      <h1 style={headingStyle}>Office Space Rental App</h1>

      {/* Office cards rendering using JSX and expressions */}
      {officeList.map((office) => (
        <div key={office.id} style={cardStyle}>
          <img
            src={office.image}
            alt={office.name}
            style={{ width: "100%", borderRadius: "5px" }}
          />
          <h2>{office.name}</h2>
          <p>Address: {office.address}</p>

          {/* Conditional styling using inline CSS */}
          <p
            style={{
              color: office.rent < 60000 ? "red" : "green",
              fontWeight: "bold",
            }}
          >
            Rent: ₹{office.rent}
          </p>
        </div>
      ))}
    </div>
  );
}

export default App;
