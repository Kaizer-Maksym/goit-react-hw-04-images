import { useState } from 'react';
import { Search, InputField, Button, BtnIcon } from './SearchBar.styled copy';
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
  const [query, setQuery] = useState('');

  const handleChange = e => setQuery(e.currentTarget.value);

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
      Notify.warning('Please enter a valid request!');
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <Search>
      <form autoCapitalize="off" onSubmit={handleSubmit}>
        <Button type="submit">
          <BtnIcon size="12px" fill="#848282" />
        </Button>

        <InputField
          onChange={handleChange}
          value={query}
          name="search"
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
        />
      </form>
    </Search>
  );
};

export default SearchField;

SearchField.prototype = {
  onSubmit: PropTypes.func,
};
