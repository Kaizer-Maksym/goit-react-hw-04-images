import React from 'react';
import { Formik, Form } from 'formik';
import { Search, InputField, Button, BtnIcon } from './SearchBar.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import PropTypes from 'prop-types';

Notify.init({
  width: '350px',

  position: 'right-top',
  distance: '10px',
  opacity: 1,
  fontSize: '20px',
  clickToClose: true,
  pauseOnHover: true,
  warning: {
    background: '#d7d6d2',
    textColor: '#0a0a0a',
    childClassName: 'notiflix-notify-warning',
    notiflixIconColor: '#050505da',
    fontAwesomeClassName: 'fas fa-exclamation-circle',
  },
});

const SearchField = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.search.trim() === '') {
      Notify.warning('Please enter a valid request!');
      return;
    }
    onSubmit(values);
    resetForm();
  };
  return (
    <Search>
      <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
        <Form autoCapitalize="off">
          <Button type="submit">
            <BtnIcon size="12px" fill="#848282" />
          </Button>

          <InputField
            name="search"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Formik>
    </Search>
  );
};

export default SearchField;

SearchField.prototype = {
  onSubmit: PropTypes.func,
};
