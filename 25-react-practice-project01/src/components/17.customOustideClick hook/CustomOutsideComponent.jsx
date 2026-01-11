import React, { useState } from 'react'
import { useRef } from 'react'
import useOutsideClickHook from './useOustidehook'

const CustomOutsideComponent = () => {
  const [showData, setShowData] = useState(false)
  const ref = useRef()
  useOutsideClickHook(ref, ()=>setShowData(false))
  return (
    <div>
      <h1>CustomOutsideComponent</h1>    
{showData ? <div ref={ref}>
  <h1>Random Content</h1>
  <p>To close this click outside this..!</p>
</div>: <button onClick={()=>setShowData(true)}>Show Data</button>}
    </div>
  )
}

export default CustomOutsideComponent