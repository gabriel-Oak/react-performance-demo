import React from 'react';
import { useSelector } from 'react-redux';

function Third() {
  const { name } = useSelector((state) => state.news);

  return (
    <div>
      terceiro
      {name}
    </div>
  );
}

export default Third;