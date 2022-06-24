import { memo } from 'react';

const NewsItem = ({ item }) => (
  <article>
    <h2>{item}</h2>
  </article>
);


export default memo(NewsItem);