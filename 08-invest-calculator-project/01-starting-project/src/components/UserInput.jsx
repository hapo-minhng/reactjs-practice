export default function UserInput({ onChange, userInput }) {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="init-invest">initial investment</label>
          <input
            type="number"
            name="init-invest"
            id="init-invest"
            required
            value={userInput.initialInvestment}
            onChange={(event) => onChange("initialInvestment", event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="annual-invest">annual investment</label>
          <input
            type="number"
            name="annual-invest"
            id="annual-invest"
            required
            value={userInput.annualInvestment}
            onChange={(event) => onChange("annualInvestment", event.target.value)}
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label htmlFor="return">expected return</label>
          <input
            type="number"
            name="return"
            id="return"
            required
            value={userInput.expectedReturn}
            onChange={(event) => onChange("expectedReturn", event.target.value)}
          />
        </p>

        <p>
          <label htmlFor="duration">duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
            required
            value={userInput.duration}
            onChange={(event) => onChange("duration", event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}
