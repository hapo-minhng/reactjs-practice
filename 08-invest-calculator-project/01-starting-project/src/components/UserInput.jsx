export default function UserInput() {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="init-invest">initial investment</label>
          <input type="number" name="init-invest" id="init-invest" required />
        </p>

        <p>
          <label htmlFor="annual-invest">annual investment</label>
          <input
            type="number"
            name="annual-invest"
            id="annual-invest"
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="return">expected return</label>
          <input type="number" name="return" id="return" required />
        </p>

        <p>
          <label htmlFor="duration">duration</label>
          <input type="number" name="duration" id="duration" required />
        </p>
      </div>
    </div>
  );
}
