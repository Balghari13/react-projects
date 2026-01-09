import React, { useEffect } from 'react'
import { useState } from 'react'

const SearchAutoComplete = () => {
  const [inputValue, setInputValue] = useState('')
  const [user, setUser] = useState([])
  
  const fetchUser = async()=>{
    const response = await fetch('https://dummyjson.com/users')
    const data = await response.json()
    setUser(data.users)
    
  }
  useEffect(()=>{
    fetchUser()
  },[])
  return (
    <div>
     <h1> SearchAutoComplete</h1>
     <input type="text" className='border' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
     <div>
{inputValue.trim() !=='' && user && user.length>0 ? user.filter((user)=>user.firstName.toLowerCase().includes(inputValue.toLowerCase())).map((u) => (
        <div key={u.id}>{u.firstName}</div>
      )): null}
     </div>
    </div>
  )
}

export default SearchAutoComplete
