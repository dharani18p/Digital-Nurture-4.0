import React from 'react';
import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {
  return (
    <div className="App">
      <CalculateScore name="Dharani" college="Saveetha Engineering College" year={2026} sem={6} cgpa={7.91} />
    </div>
  );
}

export default App;
