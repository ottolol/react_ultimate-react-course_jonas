import { useState } from "react";
import "./style.css";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);

  const date = new Date("june 21 2027");
  date.setDate(date.getDate() + count);

  // Step: input type="range"
  const start = 1;
  const end = 10;
  const [step, setStep] = useState(start);

  function changeRange(e) {
    setStep(Number(e.target.value));
  }

  function changeCount(e) {
    setCount(Number(e.target.value));
  }

  const showReset = step > 1 || count > 0 || count < 0;

  function resetCountAndStep() {
    setCount(0);
    setStep(1);
  }

  return (
    <div>
      <div>
        <input
          type="range"
          min={start}
          max={end}
          value={step}
          onChange={changeRange}
        />
        <span>Step: {step}</span>
      </div>

      <div>
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input value={count} onChange={changeCount} />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>

      {showReset && (
        <div>
          <button onClick={resetCountAndStep}>Reset</button>
        </div>
      )}
    </div>
  );
}
