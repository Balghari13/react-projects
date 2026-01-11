
import React, { useEffect, useState } from 'react'

const useFetchhook = (url, options={}) => {

  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
const fetchData = async(url)=>{
  setLoading(true)
  try{
    const response = await fetch(url, {...options})
      if (!response.ok) throw new Error(response.statusText);
    const data = await response.json()
  //console.log(data.products);
  
    setData(data.products)
    setLoading(false)
    setError(null)
  }catch(error){
    setError(error.message)
    setLoading(false)
  }
}
useEffect(()=>{
  fetchData(url)
},[url])

  return (
    {data, loading, error}
  )
}

export default useFetchhook