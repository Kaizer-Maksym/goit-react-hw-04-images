import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from './Modal.styled';

const Modal = ({ largImg, tags, onClick }) => {
  return (
    <Layout onClick={onClick}>
      <img src={largImg} alt={tags} width="800" height="600" />
    </Layout>
  );
};

export default Modal;

Modal.prototype = {
  largImg: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func,
};
