import { useState } from "react";
import "./style.css";

export default function App() {
  const [bill, setBill] = useState(null);
  const [tips, setTips] = useState(0);
  const [friendTips, setFriendTips] = useState(0);

  return (
    <div className="app">
      <Bill bill={bill} setBill={setBill} />
      <Tips tips={tips} setTips={setTips} />
      <FriendTips friendTips={friendTips} setFriendTips={setFriendTips} />
      <Total bill={bill} tips={tips} friendTips={friendTips} />
      <ResetButton
        bill={bill}
        setBill={setBill}
        setTips={setTips}
        setFriendTips={setFriendTips}
      />
    </div>
  );
}

function Bill({ bill, setBill }) {
  function handlerInput(e) {
    setBill(e.target.value);
  }

  return (
    <div className="bill">
      <p className="title">How much was the bill</p>
      <input placeholder="Bill value" value={bill} onChange={handlerInput} />
    </div>
  );
}

function Tips({ tips, setTips }) {
  function changeTips(e) {
    setTips(e.target.value);
  }

  return (
    <div className="tips">
      <p className="title">How did you like the service?</p>
      <select onChange={changeTips} value={tips}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function FriendTips({ friendTips, setFriendTips }) {
  function changeFriendTips(e) {
    setFriendTips(e.target.value);
  }

  return (
    <div className="friendtips">
      <p className="title">How did your friend like the service?</p>
      <select onChange={changeFriendTips} value={friendTips}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}

function Total({ bill, tips, friendTips }) {
  // чтобы найти процент от числа, нужно
  // разделить число на 100 и умножьть ответ на искомый %

  // примере — чтобы найти 19 процентов от числа 300:
  // 300 разделить на 100 = 3
  // 3 умножить на 19 = 57

  // (300 / 100) * 19 = 57
  // const tip = Number(bill) + Number((bill / 100) * tips);
  const tip = Number((bill / 100) * tips);
  const friendTip = Number((bill / 100) * friendTips);
  const allTips = Number(tip) + Number(friendTip);
  const pay = Number(bill) + Number(allTips);
  // данный блок и кнопка RESET появляется только после того
  // как введешь сумму счета в поле - Bill value
  return (
    <>
      {bill > 0 && (
        <div className="total item">
          <p className="title bold">
            You pay ${pay} ($
            {bill + " + $" + allTips + " tip"})
          </p>
        </div>
      )}
    </>
  );
}

function ResetButton({ bill, setBill, setTips, setFriendTips }) {
  function resetButton() {
    setBill("");
    setTips(0);
    setFriendTips(0);
  }
  return (
    <>
      {/* {bill > 0 && ( */}
      <div>
        <button className="title" onClick={resetButton}>
          Reset
        </button>
      </div>
      {/* )} */}
    </>
  );
}

// D:\Из Торрента\The Ultimate React Course 2023 React, Redux & More\7. Thinking In React State Management
// 93  CHALLENGE #1 Tip Calculator
