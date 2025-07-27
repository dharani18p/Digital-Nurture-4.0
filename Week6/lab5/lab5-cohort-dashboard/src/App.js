import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { name: 'React Fundamentals', startDate: '2025-06-01', status: 'ongoing' },
    { name: 'Java Backend', startDate: '2025-04-20', status: 'completed' },
  ];

  return (
    <div>
      <h1>Cohort Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
