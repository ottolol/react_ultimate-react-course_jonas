import { useState } from "react";
import "./style.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  function handlerStepPlusClick() {
    setStep((s) => s + 1);
  }

  function handlerStepMinusClick() {
    setStep((s) => s - 1);
  }

  function handlerCountPlusClick() {
    setCount((c) => c + step);
  }

  function handlerCountMinusClick() {
    setCount((c) => c - step);
  }

  return (
    <>
      <div className="message">
        <div>
          <button onClick={handlerStepMinusClick}>-</button>Step: {step}
          <button onClick={handlerStepPlusClick}>+</button>
        </div>
        <div>
          <button onClick={handlerCountMinusClick}>-</button>Count: {count}
          <button onClick={handlerCountPlusClick}>+</button>
        </div>

        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was today is `}
        </span>
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
