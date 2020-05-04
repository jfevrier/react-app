import React from 'react';
import './Home.scss';
import Header from './header/Header';
// import MovieDetails from './movie-details/MovieDetails';
import MovieList from './movie-list/MovieList';

function Home() {
  return (
    <div className="Home">
      <Header />
      <h1>Page home loaded !</h1>
      <MovieList />
    </div>
  );
}

export default Home;
