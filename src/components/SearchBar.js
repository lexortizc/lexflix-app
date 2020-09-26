import React, { useState } from 'react';
import propTypes from 'prop-types'

const SearchBar = ( { setKeyword } ) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setKeyword(inputValue);
    setInputValue('');
  }

  return(
    <form onSubmit={ handleInputSubmit }>
      <input type='text' onChange={ handleInputChange } value={ inputValue } placeholder='Search movie' />
    </form>
  )
}

SearchBar.propTypes = {
  setKeyword: propTypes.func.isRequired
}

export default SearchBar