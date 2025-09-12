import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovie from "../hooks/useTopRatedMovie";
import useUpcomingMovie from "../hooks/useUpcomingMovie";
import useHorrorMovie from "../hooks/useHorrorMovie";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  useHorrorMovie();

  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/*
          MainContainer
          - VideoBackground
          - VideoTitle
          SecondaryContainer
          - MovieList * n
          - cards * n
      */}
    </div>
  );
};

export default Browse;
