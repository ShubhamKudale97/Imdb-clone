import { useDebugValue, useEffect, useState } from 'react';
import './App.css'
import Banner from './components/Banner';
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'

import {BrowserRouter, json, Route, Routes} from 'react-router-dom';

function App() {
 
  let [watchList, setWatchList] = useState([]);

  let handleWatchlist= (movieObj)=>{
    let newWatchList = [...watchList,movieObj ]
    localStorage.setItem('moviesApp' , JSON.stringify(newWatchList))
    setWatchList(newWatchList)
    // console.log(newWatchList)
  }

  let handleRemoveFromWatchlist = (movieObj)=>{
    let filterWatchList = watchList.filter((movie)=>{
      return movie.id != movieObj.id
    })
    localStorage.setItem('moviesApp' , JSON.stringify(filterWatchList))
    setWatchList(filterWatchList);
    // console.log(watchList)
    // console.log(filterWatchList)
  }

  useEffect(()=>{
    let moviesFromLocalStorage = localStorage.getItem('moviesApp')
    if (!moviesFromLocalStorage) {
        return     
    }
    setWatchList(JSON.parse(moviesFromLocalStorage));
  },[])

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element=
      {<>
       <Banner/> 
       <Movies handleWatchlist={handleWatchlist}
                handleRemoveFromWatchlist={handleRemoveFromWatchlist}
                watchList={watchList}/> 
       </>
      } />
      <Route path='/watchlist' element={<Watchlist watchList={watchList} setWatchList={setWatchList} handleRemoveFromWatchlist={handleRemoveFromWatchlist} />}/>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
