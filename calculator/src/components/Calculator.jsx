import { useState } from "react";
import "../App.css";

function Calculator() {
  const [screen, setScreen] = useState("0");
  function clearAll() {
    setScreen("0");
  }
  function backSpace() {
    setScreen(previousValue => {
      if (previousValue.length === 1) return "0";
      return previousValue.slice(0, -1);
    });
  }
  function addNumber(num) {
    setScreen(previousValue => {
      if (previousValue === "0" && num !== ".") return num;
      return previousValue + num;
    });
  }
  function addOperator(op) {
    setScreen(previousValue => {
      let last = previousValue.trim().slice(-1);
      if (["+", "-", "×", "÷", "%"].includes(last)) {
        return previousValue.slice(0, -1) + " " + op + " ";
      }
      return previousValue + " " + op + " ";
    });
  }
  function calculate() {
    let exp = screen.replace(/×/g, "*").replace(/÷/g, "/");
    let arr = exp.split(" ");
    let result = Number(arr[0]);
    for (let i = 1; i < arr.length; i += 2) {
      let symbol = arr[i];
      let value = Number(arr[i + 1]);
      switch (symbol) {
        case "+":
          result = result + value;
          break;
        case "-":
          result = result - value;
          break;
        case "*":
          result = result * value;
          break;
        case "/":
          result = result / value;
          break;
        case "%":
          result = (result * value) / 100;
          break;
        default:
          break;
      }
    }
    setScreen(String(result));
  }
  return (
    <div className="app">
      <div className="calculator">
        <div className="display">{screen}</div>
        <div className="buttons">
          <button onClick={clearAll}>AC</button>
          <button onClick={() => addOperator("%")}>%</button>
          <button onClick={backSpace}>DEL</button>
          <button onClick={() => addOperator("÷")}>÷</button>
          <button onClick={() => addNumber("7")}>7</button>
          <button onClick={() => addNumber("8")}>8</button>
          <button onClick={() => addNumber("9")}>9</button>
          <button onClick={() => addOperator("×")}>×</button>
          <button onClick={() => addNumber("4")}>4</button>
          <button onClick={() => addNumber("5")}>5</button>
          <button onClick={() => addNumber("6")}>6</button>
          <button onClick={() => addOperator("-")}>-</button>
          <button onClick={() => addNumber("1")}>1</button>
          <button onClick={() => addNumber("2")}>2</button>
          <button onClick={() => addNumber("3")}>3</button>
          <button onClick={() => addOperator("+")}>+</button>
          <button onClick={() => addNumber("0")}>0</button>
          <button onClick={() => addNumber("00")}>00</button>
          <button onClick={() => addNumber(".")}>.</button>
          <button className="equal" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );
}
export default Calculator;
