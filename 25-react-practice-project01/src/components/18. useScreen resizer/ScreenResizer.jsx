import React, {useState,useEffect} from 'react'
import useResizerHook from './useResizerHook'

const ScreenResizer = () => {
//  const {width,height} = useResizerHook()
const {width,height} = useResizerHook()
  return (
    <div>
      <h1>ScreenResizer</h1>
    {width} {height}

    </div>
  )
}

export default ScreenResizer