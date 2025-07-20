import React, { useEffect, useState } from "react";
import axios from "axios";

function FinancePage() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "d1u3j91r01qle668dog0d1u3j91r01qle668dogg";
  const symbol = "AAPL";

  useEffect(() => {
    axios.get(`https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError("Finance API error: " + err.message);
        console.error(err);
      });
  }, []);

  return (
    <div>
      <h2>Finance Widget</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {data ? (
        <div>
          <p><strong>Symbol:</strong> {symbol}</p>
          <p><strong>Current Price:</strong> ${data.c}</p>
          <p><strong>Open:</strong> ${data.o}</p>
          <p><strong>High:</strong> ${data.h}</p>
          <p><strong>Low:</strong> ${data.l}</p>
        </div>
      ) : !error && <p>Loading...</p>}
    </div>
  );
}

export default FinancePage;
