import { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
      <StepMessage step={1}>
        <p>Pass in content</p>
        <p>👍</p>
      </StepMessage>
      <StepMessage step={2}>
        <p>Read children prop</p>
        <p>🤣</p>
      </StepMessage>
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const hasPrev = step > 1;
  const hasNext = step < messages.length;

  function handlePrevClick() {
    hasPrev && setStep((s) => s - 1);
  }

  function handleNextClick() {
    hasNext && setStep((s) => s + 1);
  }

  function handleCloseClick() {
    setIsOpen((is) => !is);
  }

  return (
    <div>
      <button className="close" onClick={handleCloseClick}>
        &times;
      </button>

      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step === 1 ? "active" : ""}>1</div>
            <div className={step === 2 ? "active" : ""}>2</div>
            <div className={step === 3 ? "active" : ""}>3</div>
          </div>

          {/* <p className="message">
            Step {step} : {messages[step - 1]}
          </p> */}
          <StepMessage step={step}>
            {messages[step - 1]}
            <div className="buttons">
              <button
                bgColor="#e7e7e7"
                textColor="#333"
                onClick={() => alert(`Learn ho to ${messages[step - 1]}`)}
              >
                Learn how
              </button>
            </div>
          </StepMessage>

          <div className="buttons">
            <Button
              onClick={handlePrevClick}
              has={!hasPrev}
              textColor={!hasPrev ? "" : "#fff"}
              bgColor={!hasPrev ? "" : "#7950f2"}
            >
              <span>👈</span>Previous
            </Button>
            <Button
              onClick={handleNextClick}
              has={!hasNext}
              textColor={!hasNext ? "" : "#fff"}
              bgColor={!hasNext ? "" : "#7950f2"}
            >
              <span>👉</span>Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StepMessage({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}</h3>
      {children}
    </div>
  );
}

function Button({ textColor, bgColor, has, onClick, children }) {
  // children это пропс, который выводит значение между тегами <button>Значение</button>
  // D:\Из Торрента\The Ultimate React Course 2023 React, Redux & More\7. Thinking In React State Management
  // 90 The children Prop Making a Reusable Button - 13:00
  return (
    <button
      style={{ color: textColor, backgroundColor: bgColor }}
      disabled={has}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// D:\Из Торрента\The Ultimate React Course 2023 React, Redux & More\7. Thinking In React State Management
// 90  The children Prop Making a Reusable Button
