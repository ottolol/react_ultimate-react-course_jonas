import { useEffect, useState } from "react";
import "./style.css";

// https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD
// docs - https://www.frankfurter.app/docs

/*{
  "amount": 1,
  "base": "EUR",
  "date": "2023-12-04",
  "rates": {
      "AUD": 1.6351,
      "BGN": 1.9558,
      "BRL": 5.3175,
      "CAD": 1.4716,
      "CHF": 0.9476,
      "CNY": 7.758,
      "CZK": 24.394,
      "DKK": 7.4564,
      "GBP": 0.8579,
      "HKD": 8.4929,
      "HUF": 379.28,
      "IDR": 16820,
      "ILS": 4.0403,
      "INR": 90.62,
      "ISK": 151.1,
      "JPY": 159.47,
      "KRW": 1417.9,
      "MXN": 18.7638,
      "MYR": 5.0618,
      "NOK": 11.678,
      "NZD": 1.7555,
      "PHP": 60.127,
      "PLN": 4.3393,
      "RON": 4.9677,
      "SEK": 11.321,
      "SGD": 1.4515,
      "THB": 38.035,
      "TRY": 31.398,
      "USD": 1.0868,
      "ZAR": 20.363
  }
}
*/

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [fetchData, setFetchData] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setFetchData(data.rates[toCurrency]);
      setIsLoading(false);
    }

    // делаем проверку, если валюты равные from USD, to USD, то присваиваем значение setFetchData(amount)
    if (fromCurrency === toCurrency) return setFetchData(amount);
    else fetchData();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="text"
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p style={{ padding: 5 }}>
        Output: {amount} {fromCurrency} is{" "}
        <strong>
          {fetchData} {toCurrency}
        </strong>
      </p>
    </div>
  );
}
