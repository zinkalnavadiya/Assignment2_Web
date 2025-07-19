import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY`)
      .then(res => setArticles(res.data.articles));
  }, []);

  return (
    <div>
      <h2>News</h2>
      {articles.length ? (
        <ul>
          {articles.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      ) : <p>Loading...</p>}
    </div>
  );
};

export default NewsPage;