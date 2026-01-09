import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import UserDetails from './UserDetails'

const GithubProfileDetails = () => {
  const [userDetails, setUserDetails] = useState(null)
  const [inputUser, setInputUser] = useState('balghari13');
  const [loading,setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState(null)

  const fetchData = async()=>{
    setLoading(true)
    try{
      const response = await fetch(`https://api.github.com/users/${inputUser}`)
      const data = await response.json()
      // console.log(data);
      if(response.status===404){
        setErrMsg('User Not Found')
      }else if(!response.ok){
        setErrMsg(data.message || 'Something went wrong')
      }else{
        setUserDetails(data)
        setInputUser('')
      }
      
    }
    catch(error)
    {console.log(error);
      setErrMsg(error.message)
      setLoading(false)
    }finally{
      setLoading(false)
    }
  }
function handleChange(){
  console.log('click');
  fetchData()
}
useEffect(()=>{
  fetchData()
},[])

if(loading){
  return <h1>Loading.....</h1>
}
if(errMsg != null){
  return <h1>Error is : {errMsg}</h1>
}
  return (
    <div>
      <h1>GithubProfileDetails</h1>
<div>
  <input type="text" className='border' value={inputUser} onChange= {(e)=>setInputUser(e.target.value)}/>
  <button className='bg-blue-400 ml-2 px-2 rounded' onClick={handleChange}>Search</button>
</div>
<div>
{userDetails !== null ? <UserDetails details={userDetails}/> : null}
</div>
    </div>
  )
}

export default GithubProfileDetails