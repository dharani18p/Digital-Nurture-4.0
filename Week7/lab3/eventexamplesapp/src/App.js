import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // ✅ Increment method with multiple actions
  const handleIncrement = () => {
    setCount(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    console.log("Hello! Button clicked.");
  };

  // ✅ Say Welcome button (with argument)
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // ✅ Synthetic event
  const handleSyntheticEvent = (e) => {
    e.preventDefault(); // example of SyntheticEvent use
    alert("I was clicked");
    console.log("Event Type:", e.type); // demonstrates SyntheticEvent
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Event Examples App</h1>

      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      &nbsp;
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <hr />

      <button onClick={() => sayWelcome("Welcome to React!")}>
        Say Welcome
      </button>

      <hr />

      <button onClick={handleSyntheticEvent}>Synthetic Event (Click Me)</button>

      <hr />

      <CurrencyConvertor />
    </div>
  );
}

export default App;
