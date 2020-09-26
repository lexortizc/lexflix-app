import React from 'react';
import useGetMovies from '../hooks/useGetMovies';
import MoviesGridItem from './MoviesGridItem';

const MoviesGrid = ({ keyword }) => {
  const { data, loading} = useGetMovies(keyword);

  return (
    <div>
      <h2>{ keyword }</h2>
      { keyword !== '' && loading && <p>Cargando...</p> }
      {data.map( movie => (
        <MoviesGridItem key={movie.id} {...movie} />
      ))}

      {/* <div>
        {categories.map( category => (
          // return <li key={category}>{category}</li>
          <GifGrid key={category} category={category} />
        ))}
      </div> */}
    </div>
  )
}

export default MoviesGrid;