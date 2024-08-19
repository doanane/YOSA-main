import React, { useState, useEffect } from 'react';
import { fetchNews } from '../api/ApiService';
import '../Styles/News.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ReactMarkdown from 'react-markdown';


const LatestNews = () => {
  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    fetchNews()
      .then((response) => {
        console.log("Fetched data", response.data);
        setNewsData(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the news!", error);
      });
  }, []);

  const MarkdownRenderer = ({ content }) => {
    return <ReactMarkdown>{content}</ReactMarkdown>;
};

  return (
    <div className="latest-news">
      <h2>Latest News</h2>
      <div className="news-container">
        {newsData.map((news, index) => (
          <div key={index} className="news-card">
            <img src={news.image} alt={news.title} className="news-image" />
            <div className="news-content">
              <div className="news-meta">
                <span className="author">
                  <i className="fa fa-user"></i> {news.author}
                </span>
                <span className="date">
                  <i className="fa fa-calendar"></i> {news.date}
                </span>
              </div>
              <h3>{news.title}</h3>
              <MarkdownRenderer content={news.body} />
              <button className="read-moree">Read More</button>
            </div>
          </div>
        ))}
      </div>
      <div className="navigation">
        <button className="nav-button">&lt;</button>
        <button className="nav-button">&gt;</button>
      </div>
    </div>
  );
};

export default LatestNews;
