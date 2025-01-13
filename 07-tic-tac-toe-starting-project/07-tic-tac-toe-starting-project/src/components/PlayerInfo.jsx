import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditting, setIsEditting] = useState(false);

  function handleEdit() {
    setIsEditting((editing) => !editing);
  }

  let playerName = <span className="player-name">{name}</span>;

  if (isEditting) {
    playerName = <input type="text" value={name} required />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button
        onClick={function () {
          handleEdit(true);
        }}
      >
        {isEditting ? "Save" : "Edit"}
      </button>
    </li>
  );
}
