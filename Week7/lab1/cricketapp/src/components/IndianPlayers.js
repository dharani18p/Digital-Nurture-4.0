import React from 'react';

const IndianPlayers = () => {
    const team = ["Virat", "Rohit", "Dhoni", "Kohli", "Bumrah", "Jadeja", "Gill", "KL Rahul", "Shreyas", "Iyer", "Hardik"];

    // Destructuring and filtering odd/even indexed players
    const oddPlayers = team.filter((_, index) => index % 2 !== 0);
    const evenPlayers = team.filter((_, index) => index % 2 === 0);

    const T20players = ["Rohit", "Bumrah", "Surya"];
    const RanjiTrophy = ["Prithvi", "Ishant", "Pujara"];

    // Merging arrays using spread operator
    const mergedPlayers = [...T20players, ...RanjiTrophy];

    return (
        <div>
            <h2>Odd Team Players</h2>
            <ul>{oddPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

            <h2>Even Team Players</h2>
            <ul>{evenPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>

            <h2>Merged Players (T20 + Ranji)</h2>
            <ul>{mergedPlayers.map((p, i) => <li key={i}>{p}</li>)}</ul>
        </div>
    );
};

export default IndianPlayers;
