import React from 'react';
import PropTypes from 'prop-types';
import { ImgItem } from './ImgItem.styled';

const GalleryItem = ({ pictures, onClick }) => {
  return pictures
    .flatMap(pictures => pictures)
    .map(({ id, webformatURL, largeImageURL, tags }) => {
      return (
        <li key={id}>
          <ImgItem
            src={webformatURL}
            alt={tags}
            onClick={() => onClick(largeImageURL, tags)}
          />
        </li>
      );
    });
};

export default GalleryItem;

GalleryItem.prototype = {
  pictures: PropTypes.array,
  onClick: PropTypes.func,
};
