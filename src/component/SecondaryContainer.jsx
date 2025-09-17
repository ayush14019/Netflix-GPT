import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

// MovieList - Popular
//   MovieCard * n
// MovieList - Now Playing
// MovieList - Trending
// MovieList - Horror

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className=" bg-black">
        <div className="mt-0 md:-mt-52 pl-4 md:pl-12 relative z-20">
          <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
          <MovieList title={"Popular"} movies={movies.popularMovies} />
          <MovieList title={"Top Rated"} movies={movies.topRatedMovies} />
          <MovieList title={"Upcoming Movie"} movies={movies.upcomingMovies} />
          <MovieList title={"Horror"} movies={movies.horrorMovies} />
        </div>
      </div>
    )
  );
};

export default SecondaryContainer;
