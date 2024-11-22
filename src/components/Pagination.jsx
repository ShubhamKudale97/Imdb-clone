import React from 'react'

function Pagination({PrevPage, PageNo, NextPage}) {
  return (
    <div className='bg-gray-400 mt-8 w-full flex justify-center' >
        <div className='p-4 cursor-pointer' onClick={PrevPage}>&lt; Prev</div>
        <div className='p-4 ' >{PageNo}</div>
        <div className='p-4 cursor-pointer' onClick={NextPage}>Next &gt;</div>
    </div>
  )
}

export default Pagination   