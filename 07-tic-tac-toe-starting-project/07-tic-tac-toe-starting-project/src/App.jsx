import Player from "./components/PlayerInfo";
import GameBoard from "./components/GameBoard";
import { useState } from "react";
import Log from "./components/Log";
import { WINNING_COMBINATIONS } from "./winning-combination";

function deriveActivePlayer(gameTurns) {
  let currPlayer = "X";

  if (gameTurns.length > 0 && gameTurns[0].player === "X") {
    currPlayer = "O";
  }

  return currPlayer;
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  // const [hasWinner, setHasWinner] = useState(false);
  // const [activePlayer, setActivePlayer] = useState("X");

  const activePlayer = deriveActivePlayer(gameTurns);

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard;
    const secondSquareSymbol = gameBoard;
    const thirdSquareSymbol = gameBoard;
  }

  function handlePlayer(rowIndex, colIndex) {
    // setActivePlayer((currActivePlayer) => (currActivePlayer === "X" ? "O" : "X"));
    setGameTurns((prevTurns) => {
      const currPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currPlayer },
        ...prevTurns,
      ];

      return updatedTurns;
    });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player 1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player 2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>

        <GameBoard onSelectSquare={handlePlayer} turns={gameTurns} />
      </div>

      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
