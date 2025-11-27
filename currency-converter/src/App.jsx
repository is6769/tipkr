import React, { useState } from 'react';
import './App.css';

const exchangeRates = {
  USD: 1,
  EUR: 0.93,
  RUB: 91.5,
  GBP: 0.79,
};

const currencies = Object.keys(exchangeRates);

function App() {
  const [amount, setAmount] = useState(1);
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);

  const convert = () => {
    const baseAmount = amount / exchangeRates[fromCurrency];
    const result = baseAmount * exchangeRates[toCurrency];
    setConvertedAmount(result.toFixed(2));
  };

  return (
    <div className="App">
      <h1>Конвертер валют</h1>
      <div>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Введите сумму"
        />
      </div>

      <div>
        <label>Из: </label>
        <select value={fromCurrency} onChange={(e) => setFromCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label>В: </label>
        <select value={toCurrency} onChange={(e) => setToCurrency(e.target.value)}>
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <button onClick={convert}>Конвертировать</button>

      <h2>{convertedAmount} {toCurrency}</h2>
    </div>
  );
}

export default App;
