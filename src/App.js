import { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const hasPrev = step > 1;
  const hasNext = step < messages.length;

  function handlePrevClick() {
    hasPrev ? setStep(step - 1) : setStep(1);
  }

  function handleNextClick() {
    hasNext ? setStep(step + 1) : setStep(messages.length);
  }

  return (
    <div className="steps">
      <div className="numbers">
        {/* <div className={`${step === 1 ? "active" : ""}`}>1</div>
        <div className={`${step === 2 ? "active" : ""}`}>2</div>
        <div className={`${step === 3 ? "active" : ""}`}>3</div> */}
        <div className={step === 1 && "active"}>1</div>
        <div className={step === 2 && "active"}>2</div>
        <div className={step === 3 && "active"}>3</div>
      </div>

      <p className="message">
        Step {step} : {messages[step - 1]}
      </p>

      <div className="buttons">
        <button
          disabled={!hasPrev}
          onClick={handlePrevClick}
          // onClick={() => setStep(step < 0 ? step - 1 : null)}
          // style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          disabled={!hasNext}
          onClick={handleNextClick}
          // onClick={() => setStep(step + 1)}
          // style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

// D:\Из Торрента\The Ultimate React Course 2023 React, Redux & More\6. State, Events, and Forms Interactive Components
// 58  Handling Events the React Way.mkv
