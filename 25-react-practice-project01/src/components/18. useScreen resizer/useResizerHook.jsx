import { useEffect, useLayoutEffect, useState } from "react";


export default function(){

  const [windowSize, setWindowSize] = useState({width:0,height:0})
 function reSizer(){
      setWindowSize({ width: window.innerWidth, height:window.innerHeight})
    }
  useLayoutEffect(()=>{
   reSizer()
    window.addEventListener('resize',reSizer)

    return ()=>{
      window.removeEventListener('resize',reSizer)
    }
  },[])
return windowSize
  // const [width,setWidth] = useState(window.innerWidth)
  // const [height,setHeight] = useState(window.innerHeight)

  // useEffect(()=>{
  //   function reSizer(){
  //     setWidth(window.innerWidth)
  //     setHeight(window.innerHeight)
  //   }
  //   window.addEventListener('resize',reSizer)

  //   return()=>{
  //     window.removeEventListener('resize',reSizer)
  //   }
  // }
  
  // ),[]
  // return{width,height}
}