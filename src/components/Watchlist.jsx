import React, { useEffect, useState, useContext } from "react";
import genreids from "../Utility/genre";
import { WatchlistContext } from "../context/WatchlistContext";

function Watchlist() {
  const [search, setSearch] = useState("");
  const [genreList, setGenreList] = useState(["All Genres"]);
  const [curGenre, setCurGenre] = useState("All Genres");

  const { watchList, setWatchList, handleRemoveFromWatchlist } = useContext(WatchlistContext);

  let handleSearch = (e) => {
    setSearch(e.target.value);
  };

  let handleFilter = (genre) => {
    setCurGenre(genre);
  };

  useEffect(() => {
    let temp = watchList.map((movieObj) => {
      return genreids[movieObj.genre_ids[0]];
    });
    temp = new Set(temp); // set removes duplicates
    setGenreList(["All Genres", ...temp]);
    // console.log(temp);
  }, [watchList]);

  let sortIncreasing = () => {
    let sortedIncreasing = watchList.sort((MovieA, movieB) => {
      return MovieA.vote_average - movieB.vote_average;
    });
    setWatchList([...sortedIncreasing]);
  };

  let sortDecreasing = () => {
    let sortedDecreasing = watchList.sort((MovieA, movieB) => {
      return movieB.vote_average - MovieA.vote_average;
    });
    setWatchList([...sortedDecreasing]);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap m-5">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                curGenre == genre
                  ? "flex justify-center items-center cursor-pointer bg-blue-300 rounded-xl text-gray-600 font-bold w-[10rem] h-[3rem] mx-4"
                  : "flex justify-center items-center cursor-pointer bg-gray-300 rounded-xl text-gray-600 font-bold w-[10rem] h-[3rem] mx-4"
              }
            >
              {genre}
            </div>
          );
        })}
        {/* <div className="flex justify-center items-center bg-gray-300 rounded-xl text-gray-600 font-bold w-[10rem] h-[3rem] mx-4">
          Romantic
        </div> */}
      </div>

      <div className="flex justify-center my-4">
        <input
          className="h-[3rem] w-[18rem] bg-gray-200 px-4"
          type="text"
          name="Search"
          placeholder="Search Movies"
          onChange={handleSearch}
          id=""
        />
      </div>

      <div className="overflow-hidden rounded-lg border border-gray-300 m-8">
        <table className="w-full text-center text-gray-800">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex justify-center">
                <div className="pr-2 cursor-pointer" onClick={sortIncreasing}>
                  &#8593;
                </div>
                <div>Ratings</div>
                <div className="pl-2 cursor-pointer" onClick={sortDecreasing}>
                  &#8595;
                </div>
              </th>
              <th>Popularity</th>
              <th>Genre</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {watchList
              .filter((movieObj) => {
                if (curGenre == "All Genres") {
                  return true;
                } else {
                  return genreids[movieObj.genre_ids[0]] == curGenre;
                }
              })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(search.toLocaleLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr lassName="border-b-2">
                    <td className="flex items-center px-6 py-4">
                      <img
                        className="w-[6rem] h-[10rem]"
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                        alt="Movie Poster"
                      />
                      <div className="mx-10"> {movieObj.title} </div>
                    </td>
                    <td>{movieObj.vote_average}</td>
                    <td>{movieObj.popularity}</td>
                    <td>{genreids[movieObj.genre_ids[0]]}</td>
                    <td
                      onClick={() => handleRemoveFromWatchlist(movieObj)}
                      className="text-red-900 font-bold cursor-pointer"
                    >
                      Delete
                    </td>
                  </tr>
                );
              })}

            {/* <tr lassName='border-b-2'>
            <td className='flex items-center px-6 py-4'>
              <img className='w-[6rem] h-[10rem]' src={`https://image.tmdb.org/t/p/original/34xo1C94jzsUPBpXZGxerUetGTn.jpg`} 
              alt="Movie Poster" />
              <div className='mx-10'> Premalu </div>
            </td>
            <td>5.1</td>
            <td>35498465</td>
            <td>Romantic</td>
            <td className='text-red-900 font-bold'>Delete</td>
          </tr> */}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Watchlist;
