import React from 'react';

const MoviesGridItem = ( { id, title, img } ) => {
  return (
    <div className='column is-one-quarter'>
      <img src={ img } alt={ title }></img>
      <h4>{ title } ({ id })</h4>
    </div>
  )
}

export default MoviesGridItem;