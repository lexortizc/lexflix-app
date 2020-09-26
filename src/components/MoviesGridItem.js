import React from 'react';

const MoviesGridItem = ( { id, title, img } ) => {
  return (
    <div>
      <img src={ img } alt={ title }></img>
      <h3>{ title } ({ id })</h3>
    </div>
  )
}

export default MoviesGridItem;