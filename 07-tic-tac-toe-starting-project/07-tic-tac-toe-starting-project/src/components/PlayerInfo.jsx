export default function Player({ name, symbol }) {
  return (
    <li>
      <span className="player">
        <span className="palyer-name">{name}</span>
        <span className="player-symbol">{symbol}</span>
      </span>
      <button>Edit</button>
    </li>
  );
}
