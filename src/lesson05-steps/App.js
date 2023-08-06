import { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const hasPrev = step > 1;
  const hasNext = step < messages.length;

  function handlePrevClick() {
    // hasPrev ? setStep((s) => s - 1) : setStep(1);
    hasPrev && setStep((s) => s - 1);
  }

  function handleNextClick() {
    // hasNext ? setStep((s) => s + 1) : setStep(messages.length);
    hasNext && setStep((s) => s + 1);
  }

  function handleCloseClick() {
    setIsOpen((is) => !is);
  }

  return (
    <>
      {/* запись вывозва простой функции прям в обработчике onClick()
      <button className="close" onClick={() => setIsOpen(!isOpen)}> */}
      <button className="close" onClick={handleCloseClick}>
        &times;
      </button>
      {isOpen && (
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
      )}
    </>
  );
}
