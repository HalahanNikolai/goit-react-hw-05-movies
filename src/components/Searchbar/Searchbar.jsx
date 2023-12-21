import Notiflix from 'notiflix';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import {
  SearchbarWrap,
  SearchbarForm,
  SearchbarButton,
  SearchbarSpan,
  SearchbarInput,
} from './Searchbar.styled';

const Searchbar = ({ onSubmit }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [inputValue, setInputValue] = useState('');

  const handleChange = event => {
    setInputValue(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const query = inputValue.trim();
    if (!query) {
      return Notiflix.Report.failure(
        'Meren Movies Failure',
        'Please enter a keyword or phrase to search for movies. We will do our best to find suitable movies for you.',
        'Okay'
      );
    }
    searchParams.get('query');
    setSearchParams({ query });
    onSubmit(query);
  };

  return (
    <SearchbarWrap>
      <SearchbarForm onSubmit={handleSubmit}>
        <SearchbarButton type="submit">
          <SearchbarSpan></SearchbarSpan>
        </SearchbarButton>

        <SearchbarInput
          id="searchInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Please input a query to search for a movie by its title"
          value={inputValue}
          onChange={handleChange}
        />
      </SearchbarForm>
    </SearchbarWrap>
  );
};

export default Searchbar;
