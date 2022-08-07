import React from 'react';
import PropTypes from 'prop-types';
import { GalleryContainer } from './ImgGallery.styled';

const GalleryBox = ({ children }) => {
  return (
    <>
      <GalleryContainer>{children}</GalleryContainer>
    </>
  );
};

export default GalleryBox;

GalleryBox.prototype = {
  children: PropTypes.node,
};