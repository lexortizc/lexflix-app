const getMovies = async ( query ) => {
  const API_KEY = '2c6f5815f22f5c25c6d4047ce80dbda7';
  const URL = `https://api.themoviedb.org/3/search/movie?api_key=${ API_KEY }&query=${ encodeURI( query ) }`;
  const resp = await fetch(URL);
  const data = await resp.json();
  const movies = data.results.map( movie => {
    return {
      id: movie.id,
      title: movie.title,
      img: 'https://image.tmdb.org/t/p/w342' + movie.poster_path
    }
  })
  return movies;
}

export default getMovies;