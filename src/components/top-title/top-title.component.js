import React from 'react';

import './top-title.styles.scss';

const TopTitle = ({ value = 'default value' }) => (
  <div className="top-title">
    <h1 className="top-title__h1">{value}</h1>
  </div>
);

export default TopTitle;
