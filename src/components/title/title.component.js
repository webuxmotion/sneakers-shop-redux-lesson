import React from 'react';
import './title.styles.scss';

const Title = ({ value = "Default Title", theme }) => {
  let classes = 'title';

  if (theme) {
    classes += ` title--theme--${theme}`
  }

  return (
    <h2 className={classes}>{value}</h2>
  );
};

export default Title;
