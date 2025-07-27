import React from 'react';
import '../Stylesheets/mystyle.css';

function CalculateScore(props) {
    const { name, college, year, sem, cgpa } = props;


    return (
        <div className="score-container">
            <h2>Student Score Details</h2>
            <p><strong>Name:</strong> {name}</p>
            <p><strong>College:</strong> {college}</p>
            <p><strong>Current Year:</strong> {year}</p>
            <p><strong>Completed Semester:</strong> {sem}</p>
            <p><strong>CGPA</strong> {cgpa}</p>
        </div>
    );
}

export default CalculateScore;
