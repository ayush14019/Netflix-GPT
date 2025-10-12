import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addHorrorMovie } from "../utils/movieSlice";
import { useEffect } from "react";

const useHorrorMovie = () => {
  // Fetch Data from TMDB API and update store
  const dispatch = useDispatch();

  const horrorMovies = useSelector((store) => store.movies.horrorMovies);
  const getHorrorMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=18bbab6c971d2506b1963c9b86b4aa57&with_genres=27&page=1"
    );

    const json = await data.json();
    dispatch(addHorrorMovie(json.results));
  };

  useEffect(() => {
    !horrorMovies && getHorrorMovies();
  }, []);
};

export default useHorrorMovie;
