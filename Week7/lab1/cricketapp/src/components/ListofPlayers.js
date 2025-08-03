import React from 'react';

const ListofPlayers = () => {
    const players = [
        { name: "Virat", score: 95 },
        { name: "Rohit", score: 85 },
        { name: "Dhoni", score: 99 },
        { name: "Kohli", score: 45 },
        { name: "Bumrah", score: 88 },
        { name: "Jadeja", score: 55 },
        { name: "Gill", score: 75 },
        { name: "KL Rahul", score: 68 },
        { name: "Shreyas", score: 49 },
        { name: "Iyer", score: 72 },
        { name: "Hardik", score: 67 }
    ];

    // Display all players
    const allPlayers = players.map((player, index) => (
        <li key={index}>{player.name} - {player.score}</li>
    ));

    // Filter players with score < 70 using arrow function
    const lowScorers = players.filter(player => player.score < 70).map((player, index) => (
        <li key={index}>{player.name} - {player.score}</li>
    ));

    return (
        <div>
            <h2>All Players</h2>
            <ul>{allPlayers}</ul>

            <h2>Players with score below 70</h2>
            <ul>{lowScorers}</ul>
        </div>
    );
};

export default ListofPlayers;
