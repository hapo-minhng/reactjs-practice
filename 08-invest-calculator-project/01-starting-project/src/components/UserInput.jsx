import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue,
      };
    });
  }

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
            onChange={(event) =>
              handleChange("initialInvestment", event.target)
            }
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
            onChange={(event) => handleChange("annualInvestment", event.target)}
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
            onChange={(event) => handleChange("expectedReturn", event.target)}
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
            onChange={(event) => handleChange("duration", event.target)}
          />
        </p>
      </div>
    </div>
  );
}
