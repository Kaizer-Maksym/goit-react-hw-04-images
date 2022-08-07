import React from 'react';
import PropTypes from 'prop-types';
import LoadMore from './Load.styled';

const LoadBtn = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      <span>Load more</span>
    </LoadMore>
  );
};

export default LoadBtn;

LoadBtn.prototype = {
  onClick: PropTypes.func,
};
