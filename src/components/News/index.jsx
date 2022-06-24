import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as xml2js from 'xml2js';
import NewsItem from './NewsItem';

const News = () => {
  const [news, setNews] = useState([]);
  const [name, setName] = useState('');

  useEffect(() => {
    axios.post('https://lunis-api-gabriel-oak.vercel.app/processor', {
      speech: 'notícias'
    }).then(({ data: { messages } }) => setNews(messages));
  }, []);

  return (
    <section>
      <header>
        <h1>News</h1>
      </header>

      <input
        name="name"
        value={name}
        onChange={({ target }) => setName(target.value)}
      />

      {news.map((item, index) => (
        <NewsItem
          item={item}
          key={index}
        />
      ))}
    </section>
  );
}

export default News;