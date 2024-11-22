import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination";

function Movies({ handleWatchlist, handleRemoveFromWatchlist, watchList }) {
  const [Movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1);

  const apiKey = import.meta.env.VITE_TMDB_API_KEY;  // Vite expects your env variables should starts with VITE
  

  const PrevPage = () => {
    if (pageNo == 1) {
      setPageNo(pageNo);
    } else {
      setPageNo(pageNo - 1);
    }
  };

  const NextPage = () => {
    setPageNo(pageNo + 1);
  };

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
      console.log(apiKey,"apikey")
  }, [pageNo]);

  return (
    <div className="p-4">
      <div className="font-bold text-center text-2xl m-4">Trending Movies</div>
      <div className="flex flex-row flex-wrap justify-around gap-8">
        {Movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              handleWatchlist={handleWatchlist}
              handleRemoveFromWatchlist = {handleRemoveFromWatchlist} 
              watchList = {watchList} 
              poster_path={movieObj.poster_path}
              name={movieObj.title}
            />
          );
        })}
      </div>

      <Pagination PageNo={pageNo} PrevPage={PrevPage} NextPage={NextPage} />
    </div>
  );
}

export default Movies;