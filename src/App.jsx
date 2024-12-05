import { WatchlistProvider } from './context/WatchlistContext'
import './App.css'
import Banner from './components/Banner';
import Movies from './components/Movies'
import Navbar from './components/Navbar'
import Watchlist from './components/Watchlist'

import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {

  return (
    <>
     <WatchlistProvider>
      <BrowserRouter>
        <Navbar/>
          <Routes>
            <Route path="/" element={<> <Banner/> <Movies/> </>} />
            <Route path="/watchlist" element={<Watchlist/>} />
          </Routes>
      </BrowserRouter>
     </WatchlistProvider>
    </>
  )
}

export default App
