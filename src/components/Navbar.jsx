import React from 'react'
import clapboard from '../clapboard.png'

import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex border-2 space-x-8 pl-3 py-3'>
        <img src={clapboard} className='w-[40px] ' alt="" />

        <Link to="/" className='text-blue-400 text-3xl font-bold '>Movies</Link>

        <Link to="/watchlist" className='text-blue-400 text-3xl font-bold'>Watchlist</Link>
    </div>
  )
}

export default Navbar