import React from 'react';
import { useFetch } from "../Hooks/Hooks-Movies"
import MovieDetails from '../movie-details/MovieDetails';

const MovieList = () => {
  const movies = useFetch("https://jsonplaceholder.typicode.com/photos?albumId=1");
  console.log(movies);
  
  return (
    <div>
      {
        movies.map((movie, index) => <MovieDetails movie={movie} />)
      }
    </div>
  );
};

export default MovieList;