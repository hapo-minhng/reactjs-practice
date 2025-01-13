import { useState } from "react";

export default function Player({ name, symbol }) {
    const [isEditting, setIsEditting] = useState(false);
    
    function handleEdit(action) {
        setIsEditting(action);
    }

    let playerName = <span className="player-name">{name}</span>

    if (isEditting) {
        playerName = <input type="text" required />
    }

  return (
    <li>
      <span className="player">
        <span className="palyer-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
          <button onClick={function () {
              handleEdit(true);
      }}>Edit</button>
    </li>
  );
}
