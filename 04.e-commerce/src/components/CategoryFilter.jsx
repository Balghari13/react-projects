import React from 'react'
import { initialProducts } from '../data/product'
import { Tag } from 'lucide-react';

const availableCategories = ["All", ...new Set(initialProducts.map(p=>p.category))]

// console.log(availableCategories);


const CategoryFilter = ({selectedCategory,setSelectedCategory}) => {
  // const selectedCategory = 'Phone'
  return (
    <>
      <div className='flex flex-wrap gap-3 border-b border-gray-800 pb-6'>
       <Tag className='w-5 h-5 mt-2 mr-2 text-orange-500 hidden sm:block'/>
      {availableCategories.map((category)=><button onClick={()=>setSelectedCategory(category)} className={`px-5 py-2 rounded-full font-bold text-sm transition duration-200 shadow-md ${selectedCategory === category ? 'bg-orange-500 shadow-orange-800/50' : 'bg-gray-800 text-gray-300 border-gray-700 hover:bg-gray-700 hover:text-orange-400'} `} key={category}>{category}</button>)}
      </div>
    </>
  )
}

export default CategoryFilter
