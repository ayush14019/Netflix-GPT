import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMoviesResults } from "../utils/gptSlice";
import { GROQ_KEY } from "../utils/constants";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    console.log(searchText.current.value);
    // Make an api call to GPT API and get movie results

    const groqQuery =
      "Act as a  Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me name of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar , Sholay , Don , Golmaal , Koi Mil Gaya";

    const groqResults = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${GROQ_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [{ role: "user", content: groqQuery }],
        }),
      }
    );

    const data = await groqResults.json();
    // console.log("Groq API Response:", data);

    if (!groqResults.ok) {
      console.error("HTTP error:", groqResults.status);
      return;
    }

    if (!data.choices?.[0]?.message?.content) {
      console.error("Invalid API response");
      return;
    }

    const groqMovies = data.choices[0].message.content
      .split(",")
      .map((m) => m.trim());
    console.log("Movies:", groqMovies);
    // [we will get 5 movies in comma seperated]

    // For each movies I will search TMDB API
    const promiseArray = groqMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(
      addGptMoviesResults({
        movieNames: groqMovies,
        movieResults: tmdbResults,
      })
    );
  };

  return (
    <div className="pt-[35%] md:pt-[10%] mx-auto flex justify-center items-center">
      <form
        className="w-full md:w-1/2  bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-4 m-4 bg-white col-span-9 rounded-md"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 m-4 bg-red-600 text-white rounded-lg col-span-3 hover:bg-red-500"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
