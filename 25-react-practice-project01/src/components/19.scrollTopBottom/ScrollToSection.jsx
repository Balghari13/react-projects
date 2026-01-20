import React, { useRef } from 'react'

const ScrollToSection = () => {
  const section3Ref = useRef(null)
  const handle3 =()=>{
    section3Ref.current.scrollIntoView({behavior:'smooth'})
  }
  return (
    <div>
      <h1>ScrollToSection</h1>
<button onClick={handle3}>Go To 3</button>
      <div className="bg-amber-500 w-full h-90">Section 1</div>
      <div className="bg-green-500 w-full h-90">Section 2</div>
      <div ref={section3Ref} className="bg-yellow-500 w-full h-90">Section 3</div>
      <div className="bg-pink-500 w-full h-90">Section 4</div>
      </div>
  )
}

export default ScrollToSection