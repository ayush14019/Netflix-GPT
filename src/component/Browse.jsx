import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();

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
