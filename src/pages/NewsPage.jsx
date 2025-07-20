import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './NewsPage.css';

function NewsPage() {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState('general');
  const [error, setError] = useState('');

const fetchNews = async () => {
  try {
    const response = await axios.get('https://gnews.io/api/v4/top-headlines', {
      params: {
        token: '9c2c3feceb4c28fcf639f4742d906cb8',
        lang: 'en',
        topic: category,
        max: 10,
      },
    });
    setArticles(response.data.articles);
    setError('');
  } catch (err) {
    console.error('API error:', err);
    setError('❌ Failed to fetch news. Please check your API key or network.');
  }
};


  useEffect(() => {
    fetchNews();
  }, [category]);

  return (
    <div className="news-container">
      <h1>Latest News</h1>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="category-select"
      >
        <option value="general">General</option>
        <option value="world">World</option>
        <option value="nation">Nation</option>
        <option value="business">Business</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
        <option value="science">Science</option>
        <option value="health">Health</option>
      </select>

      {error && <p className="error">{error}</p>}

      <div className="news-grid">
        {articles.length === 0 ? (
          <p>Loading...</p>
        ) : (
          articles.map((article, index) => (
            <div className="news-card" key={index}>
              <h3>{article.title}</h3>
              <p>{article.description || 'No description available.'}</p>
              <a href={article.url} target="_blank" rel="noreferrer">
                Read more →
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default NewsPage;
