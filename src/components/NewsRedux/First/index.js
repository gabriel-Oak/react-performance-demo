import React, { memo } from 'react';
import Second from '../Second';

function First() {
  return (
    <div>
      primeiro
      <Second />
    </div>
  );
}

export default memo(First);