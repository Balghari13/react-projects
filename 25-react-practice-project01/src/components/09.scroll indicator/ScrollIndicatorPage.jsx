import React, { useEffect, useState } from 'react';
import  './style.css'
const ScrollIndicatorPage = ({url}) => {
  const [data,setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [scrollPercentage, setScrollPercentage] = useState(0) 

  const fetchData = async(url)=>{
    setLoading(true)
    try{
const response = await fetch(url)
const data = await response.json()

if(data && data.products && data.products.length>0){
setData(data.products)
setLoading(false)
}

    }catch(error){
      console.log(error);
      
      setErrorMsg(error.message)
      setLoading(false)
    }
  }

 useEffect(()=>{
  fetchData(url)
 },[url])
function handleScrollPercentage(){
// console.log(
//   document.body.scrollTop,
//   document.documentElement.scrollTop,
//   document.documentElement.scrollHeight,
//   document.documentElement.clientHeight

// );
const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop
const height = document.documentElement.scrollHeight - document.documentElement.clientHeight 
setScrollPercentage((howMuchScrolled/height)*100)
}
 useEffect(()=>{
  window.addEventListener('scroll', handleScrollPercentage)
  return ()=>{
    window.removeEventListener('scroll',()=>{})
  }
 },[])
console.log(scrollPercentage);

 if(loading) return <h1>Loading.....</h1>
 if(errorMsg !== null) return <h1>Errors Message : {errorMsg}</h1>
  return (
    <div>
      <div className='progress-tracking'>
       
          <h1>ScrollIndicatorPage</h1>
           <div className='current-progress' style={{width:`${scrollPercentage}vw`}}></div>
      </div>
    
      <div>
        {data &&  data.length>0 ? data.map((item)=><h2 key={item.id}>{item.title}</h2>): null}
      </div>
      </div>
  )
}

export default ScrollIndicatorPage