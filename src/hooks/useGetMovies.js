import {useEffect, useState} from 'react';
import getMovies from '../helpers/getMovies';

const useGetMovies = ( query ) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  })

  useEffect( () => {
    if(query !== ''){
      getMovies(query)
        .then( movies => {
          setState({
            data: movies,
            loading: false
          })
        })
      }
  }, [query])

  return state;
}

export default useGetMovies;