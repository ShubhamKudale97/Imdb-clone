import React from "react";

function MovieCard({
  poster_path,
  name,
  handleWatchlist,
  handleRemoveFromWatchlist,
  watchList,
  movieObj,
}) {
  //console.log(name);

  function doesContain(movieObj) {
    for (let i = 0; i < watchList.length; i++) {
      if (watchList[i].id == movieObj.id) {
        return true;
      }
    }
    return false;
  }
  return (
    <div
      className="h-[55vh] w-[38vh] bg-center bg-cover  rounded-xl hover:cursor-pointer hover:scale-110 duration-300 
      flex flex-col justify-between items-end"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => handleRemoveFromWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-600/60"
        >
          &#10060;
        </div>
      ) : (
        <div
          onClick={() => handleWatchlist(movieObj)}
          className="m-4 flex justify-center h-8 w-8 items-center rounded-lg bg-gray-600/60"
        >
          &#128526;
        </div>
      )}
      <div className="text-white text-xl w-full p-2 text-center bg-gray-900/60 rounded-xl">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
