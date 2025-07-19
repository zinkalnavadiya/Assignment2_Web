import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FinancePage = () => {
  const [stocks, setStocks] = useState(null);

  useEffect(() => {
    axios.get(`https://financialmodelingprep.com/api/v3/quote/AAPL?apikey=YOUR_API_KEY`)
      .then(res => setStocks(res.data[0]));
  }, []);

  return (
    <div>
      <h2>Finance</h2>
      {stocks ? (
        <p>{stocks.name} ({stocks.symbol}): ${stocks.price}</p>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default FinancePage;