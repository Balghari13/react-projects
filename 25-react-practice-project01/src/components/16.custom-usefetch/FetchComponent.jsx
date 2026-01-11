import React, { useState } from 'react'
import useFetchhook from './customFetchhook'

const FetchComponent = () => {
  const {data, loading, error} = useFetchhook( "https://dummyjson.com/products?limit=100",{});
  console.log(data, loading, error)
  // if(loading){
  //   return <h1>Loading....</h1>
  // }
  // if(error !==null){
  //   return <h1>{error}</h1>
  // }
  return (
    <div>
      <h1>Fetching Data...</h1>
      {loading ? <h1>Loading....</h1> :null}
      {error? <h1>{error}</h1> : null}
      {data && data.length>0 ? data.map(name=><div key={name.id}>{name.title}</div>) : null}
    </div>
  )
}

export default FetchComponent
