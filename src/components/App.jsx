import React, { useEffect, useReducer } from 'react';
// -------components
import { ScrollTop } from './Scroll/ScrollTop';
import SearchField from './SearchBar/SearchBar copy';
import GalleryBox from './ImageGallery/ImgGallery';
import GalleryItem from './ImageGalleryItem/GalleryItem';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import LoadBtn from './Button/LoadBtn';
// --------services
import reducer from '../services/reduser';
import * as API from '../services/api';

const App = () => {
  const [data, dispatch] = useReducer(reducer, {
    pictures: [],
    query: '',
    page: 1,
    loading: false,
    largImg: null,
    tags: null,
  });

  const { pictures, query, page, loading, largImg, tags } = data;

  useEffect(() => {
    if (!query ?? !page) {
      return;
    } else {
      try {
        dispatch({ type: 'loading' });
        API.getImg(query, page).then(pictures => {
          dispatch({ type: 'fetch', payload: pictures });
          dispatch({ type: 'loading' });
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [query, page]);

  const submitHadle = query => {
    dispatch({ type: 'query', payload: query });
    dispatch({ type: 'reset', payload: [] });
    dispatch({ type: 'page', payload: 1 });
  };

  const onImgClick = (largImg, tags) => {
    dispatch({ type: 'largImg', payload: largImg });
    dispatch({ type: 'tags', payload: tags });
  };

  const handleClickOnLayout = e => {
    if (e.currentTarget === e.target) {
      dispatch({ type: 'largImg', payload: null });
    }
  };

  return (
    <>
      <SearchField onSubmit={submitHadle} />
      {pictures && (
        <GalleryBox>
          <GalleryItem pictures={pictures} onClick={onImgClick} />
        </GalleryBox>
      )}
      {pictures.length > 0 && !loading ? (
        <LoadBtn onClick={() => dispatch({ type: 'increment', payload: 1 })} />
      ) : null}
      {largImg && (
        <Modal largImg={largImg} tags={tags} onClick={handleClickOnLayout} />
      )}
      {loading && <Loader />}
      <ScrollTop query={query} />
    </>
  );
};

export default App;
