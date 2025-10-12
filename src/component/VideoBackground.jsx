import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMoviesTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((Store) => Store.movies?.trailerVideo);
  // console.log("Trailer from store:", trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="w-full z-0">
      <iframe
        className="w-full h-full aspect-video"
        src={
          "https://www.youtube-nocookie.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&loop=1&playlist=" +
          trailerVideo?.key
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share;"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default VideoBackground;
