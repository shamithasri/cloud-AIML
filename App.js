import React, { useState } from "react";

const App = () => {
  const [games, setGames] = useState([]);

  const addGame = () => {
    const newGame = {
      id: games.length + 1,
      team1: "Team A",
      team2: "Team B",
      score1: 0,
      score2: 0,
      status: "Live",
    };
    setGames([...games, newGame]);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h1>🏀 Sports Scoreboard</h1>
      <button onClick={addGame} style={{ padding: "10px 20px", fontSize: "16px" }}>
        ➕ Add Game
      </button>

      <div style={{ marginTop: "2rem" }}>
        {games.map((game) => (
          <div key={game.id} style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem auto", maxWidth: "400px" }}>
            <h2>{game.team1} vs {game.team2}</h2>
            <p>Score: {game.score1} - {game.score2}</p>
            <p>Status: {game.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
