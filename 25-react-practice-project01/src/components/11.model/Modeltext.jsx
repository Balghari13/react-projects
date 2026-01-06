import React, { useState } from 'react'
import CustomModelPopup from './CustomModelPopup'

const Modeltext = () => {
  const[showModelData, setShowModelData]  = useState(false)

  function handleClick(){
    setShowModelData(!showModelData)
  }
  function closeModel(){
    setShowModelData(!showModelData)
  }
  return (
    <div>
    <button className ='bg-amber-400 p-2 m-4 rounded-2xl' onClick={handleClick}>Open Model Popup</button>
    {showModelData && <CustomModelPopup body={<div>body</div>} closeModel={closeModel}/>}
    </div>
  )
}

export default Modeltext
