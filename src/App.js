import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [msg, setMsg] = useState("");

  const calculateBMI = () => {
    if (!weight || !height || weight <= 0 || height <= 0) {
      setMsg("Please enter valid weight and height.");
      setBmi(null);
      return;
    }

    const heightInMeters = height / 3.281;
    const bmiValue = weight / (heightInMeters * heightInMeters);
    setBmi(bmiValue.toFixed(2));

    if (bmiValue < 18.5) {
      setMsg("You are underweight");
    } else if (bmiValue < 25) {
      setMsg("You have a normal weight");
    } else if (bmiValue < 30) {
      setMsg("You are overweight");
    } else {
      setMsg("You are obese");
    }
  };

  const resetCalculator = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setMsg("");
  };

  return (
    <div className="container">
      <h1>BMI Calculator</h1>
      <div>
        <label>Enter Your Weight (Kg)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Enter Your Height (Feet)</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate</button>
      <button className="reloadBtn" onClick={resetCalculator}>
        Reset
      </button>
      {bmi && (
        <div className="result">
          <p>BMI: {bmi}</p>
          <p>{msg}</p>
        </div>
      )}
    </div>
  );
}

export default App;
