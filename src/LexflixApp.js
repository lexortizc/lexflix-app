import React, { useState } from 'react';
import MoviesGrid from './components/MoviesGrid';
import SearchBar from './components/SearchBar';

const LexflixApp = () => {
  const [keyword, setKeyword] = useState('');

  return(
    <>
      <h1>LEXFLIX</h1>
      <SearchBar setKeyword={setKeyword}/>
      <hr/>
      <MoviesGrid keyword={ keyword } />
    </>
  )
}

export default LexflixApp;