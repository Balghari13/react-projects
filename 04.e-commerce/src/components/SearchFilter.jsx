import { Search } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useCart } from "../context/CardContext";
const SearchFilter = ({searchData, setSearchData}) => {

  
  return (
    <>
      <div className='mb-5 p-5 bg-gray-900 rounded-2xl shadow-xl border border-y-gray-800 '>
         <div className='flex items-center border border-gray-700 rounded-xl overflow-hidden focus-within:ring-4 focus-within:ring-orange-600/50 transition duration-300 bg-gray-800 '>
         <Search className='w-5 h-5 ml-4 text-gray-500 '/>
          <input value={searchData} onChange={(e)=>setSearchData(e.target.value)}
           type="text" placeholder='Enter search item' className='w-full p-4 outline-none text-white bg-gray-800 placeholder-gray-400 text-base font-medium'/>
         </div>
      </div>
      </>
  )
}

export default SearchFilter