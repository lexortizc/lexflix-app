import React from 'react';
import useGetMovies from '../hooks/useGetMovies';
import MoviesGridItem from './MoviesGridItem';

const MoviesGrid = ({ keyword }) => {
  const { data, loading} = useGetMovies(keyword);

  return (
    <div>
      <h2>{ keyword }</h2>
      { keyword !== '' && loading && <p>Cargando...</p> }
      <div className='columns is-multiline'>
        {data.map( movie => (
          <MoviesGridItem key={movie.id} {...movie} />
        ))}
      </div>
    </div>
  )
}

export default MoviesGrid;