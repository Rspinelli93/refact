import { useState } from "react";
import './App.css'
import { evaluate } from "mathjs";

const Calculadora = () => {
  const [display, setDisplay] = useState("");

  const appendNumber = (num) => setDisplay(display + num);
  const clearDisplay = () => setDisplay("");
  const calculateResult = () => {
    try {
      setDisplay(evaluate(display).toString());
    } catch {
      setDisplay("Error");
    }
  };

  return (
    <div className="calculadora">
      <input type="text" id="display" value={display} disabled />
      <div className="buttons">
        {["7", "8", "9", "/"].map((val) => (
          <button key={val} className="btn" onClick={() => appendNumber(val)}>
            {val}
          </button>
        ))}
        {["4", "5", "6", "*"].map((val) => (
          <button key={val} className="btn" onClick={() => appendNumber(val)}>
            {val}
          </button>
        ))}
        {["1", "2", "3", "-"].map((val) => (
          <button key={val} className="btn" onClick={() => appendNumber(val)}>
            {val}
          </button>
        ))}
        {["0", ".", "C", "+"].map((val) => (
          <button
            key={val}
            className="btn"
            onClick={() => (val === "C" ? clearDisplay() : appendNumber(val))}
          >
            {val}
          </button>
        ))}
        <button className="btn equal" onClick={calculateResult}>
          =
        </button>
      </div>
    </div>
  );
};


export default Calculadora
