import React, { Component } from 'react';
import SearchField from './SearchBar/SearchBar';
import GalleryBox from './ImageGallery/ImgGallery';
import GalleryItem from './ImageGalleryItem/GalleryItem';
import Modal from './Modal/Modal';
import Loader from './Loader/Loader';
import LoadBtn from './Button/LoadBtn';
import * as API from '../services/api';

class App extends Component {
  state = {
    searchKey: '',
    largImgUrl: null,
    tags: null,
    pictures: [],
    page: 1,
    loading: false,
  };

  submitHadle = values => {
    this.setState({ searchKey: values, pictures: [], page: 1 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  onImgClick = (largImgUrl, tags) => {
    this.setState({ largImgUrl: largImgUrl, tags: tags });
  };

  handleClickOnLayout = e => {
    if (e.currentTarget === e.target) {
      this.setState({ largImgUrl: null });
    }
  };

  componentDidUpdate(_, prevState) {
    const { searchKey, page } = this.state;
    const value = searchKey.search;
    if (prevState.searchKey !== searchKey || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        API.getImg(value, page).then(pictures =>
          this.setState(prevState => ({
            pictures: [...prevState.pictures, pictures],
            loading: false,
          }))
        );
      } catch (error) {
        console.log(error);
      }
    }
  }

  render() {
    const { pictures, largImgUrl, loading, tags } = this.state;

    return (
      <>
        <SearchField onSubmit={this.submitHadle} />

        {pictures && (
          <GalleryBox>
            <GalleryItem pictures={pictures} onClick={this.onImgClick} />
          </GalleryBox>
        )}

        {pictures.length > 0 && !loading ? (
          <LoadBtn onClick={this.loadMore} />
        ) : null}

        {largImgUrl && (
          <Modal
            largImgUrl={largImgUrl}
            tags={tags}
            onClick={this.handleClickOnLayout}
          />
        )}

        {loading && <Loader />}
      </>
    );
  }
}

export default App;
