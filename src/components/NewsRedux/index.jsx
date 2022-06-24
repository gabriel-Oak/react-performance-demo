import React, { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import { connect } from 'react-redux';
import { getNews, setName } from './actions';
import First from './First';

const News = ({ news, name, setName, getNews }) => {
  useEffect(() => {
    getNews();
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

      <First />

      {news.map((item, index) => (
        <NewsItem
          item={item}
          key={index}
        />
      ))}
    </section>
  );
}

const mapState = (state) => state.news;

export default connect(mapState, {
  getNews,
  setName,
})(News);