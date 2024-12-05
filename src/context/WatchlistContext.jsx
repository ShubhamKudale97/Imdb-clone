import React, { createContext, useEffect, useState } from "react";

// Create Context
export const WatchlistContext = createContext();

// Provider Component
export const WatchlistProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([]);

  // Add movie to watchlist
  const handleWatchlist = (movieObj) => {
    const newWatchList = [...watchList, movieObj];
    localStorage.setItem("moviesApp", JSON.stringify(newWatchList));
    setWatchList(newWatchList);
    // console.log(newWatchList)
  };

  // Remove movie from watchlist
  const handleRemoveFromWatchlist = (movieObj) => {
    const filteredWatchList = watchList.filter((movie) => movie.id !== movieObj.id);
    localStorage.setItem("moviesApp", JSON.stringify(filteredWatchList));
    setWatchList(filteredWatchList);
    // console.log(watchList)
    // console.log(filterWatchList)
  };

  // Load watchlist from localStorage on mount
  useEffect(()=>{
      let moviesFromLocalStorage = localStorage.getItem('moviesApp')
      if (!moviesFromLocalStorage) {
          return     
      }
      setWatchList(JSON.parse(moviesFromLocalStorage));
    },[])

  return (
    <WatchlistContext.Provider
      value={{
        watchList,
        setWatchList,
        handleWatchlist,
        handleRemoveFromWatchlist,
      }}
    >
      {children}
    </WatchlistContext.Provider>
  );
};
