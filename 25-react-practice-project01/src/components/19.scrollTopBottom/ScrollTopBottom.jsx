import React, { useEffect, useRef, useState } from 'react'

const ScrollTopBottom = () => {
  const [users, setUsers] = useState({})
const bottomRef = useRef(null)
  const fetchUsers = async()=>{
    try{
      const response = await fetch("https://dummyjson.com/products?limit=100")
      const data = await response.json()
      console.log(data.products);
      
      setUsers(data.products)
    }catch(e){
      console.log(e);
      
    }
  }
  useEffect(()=>{
    fetchUsers()
  },[])

  function handleScrollToTop(){
    window.scrollTo({
      top:0, left:0, behavior: 'smooth'
    })
  }
  function handleScrollToBottom(){
bottomRef.current.scrollIntoView({behavior:'smooth'})
  }

  return (
    <div>
      <h1>Scroll Top & Bottom</h1>
      <button onClick={handleScrollToBottom} className='border'>Scroll to Bottom</button>
      <div>
{users && users.length>0 ? users.map((name)=><h1 key={name.id}>{name.title}</h1>) : null}
      </div>
      <button onClick={handleScrollToTop} className='border'>Scroll to Top</button>
      <h1 ref={bottomRef}>This is bottom of page</h1>
    </div>
  )
}

export default ScrollTopBottom
