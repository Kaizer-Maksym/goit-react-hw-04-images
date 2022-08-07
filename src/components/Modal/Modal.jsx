import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from './Modal.styled';

const Modal = ({ largImgUrl, tags, onClick }) => {
  return (
    <Layout onClick={onClick}>
      <img src={largImgUrl} alt={tags} width="1000" height="800" />
    </Layout>
  );
};

export default Modal;

Modal.prototype = {
  largImgUrl: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};
