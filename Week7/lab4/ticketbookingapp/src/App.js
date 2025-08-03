import React, { useState } from "react";
import GuestPage from "./GuestPage";
import UserPage from "./UserPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Element variable for the button
  let button;
  if (isLoggedIn) {
    button = <button onClick={() => setIsLoggedIn(false)}>Logout</button>;
  } else {
    button = <button onClick={() => setIsLoggedIn(true)}>Login</button>;
  }

  const page = isLoggedIn ? <UserPage /> : <GuestPage />;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>✈️ Ticket Booking App</h1>
      {button}
      <hr />
      {page}
    </div>
  );
}

export default App;
