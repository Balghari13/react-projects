import React, { useEffect, useState } from "react";

const RandomColorGenerator = () => {
const [typeOfColor,setTypeOfColor] = useState('hex');
const [color, setColor] = useState('#0000')

 const randomIndex =(length)=> Math.floor(Math.random()*length)
  const handleHexColor=()=>{
    const hex = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#'
    for(let i=0;i<6; i++){
      hexColor += hex[randomIndex(hex.length)]

    }
    console.log(hexColor);
    setColor(hexColor);
  }

  useEffect(()=>{
    if(typeOfColor==='hex')handleHexColor()
    else handleRgbColor()
  },[typeOfColor])

  const handleRgbColor=()=>{
      const r = randomIndex(255)
      const g = randomIndex(255)
      const b = randomIndex(255)
      setColor(`rgb(${r},${g},${b})`)
  }

  return (
    <div style={{
      width:'100vw',height:'100vh',background:color
    }}>
     <div className='p-5'>
       <h1>Random Color Generator</h1>

      <button onClick={typeOfColor==='hex'?handleHexColor : handleRgbColor}
            className='bg-amber-300 p-2 rounded'>Generate Random Color</button>

      <button onClick={()=>setTypeOfColor('rgb')}
      className='bg-amber-300 p-2 rounded'>Generate RGB Color</button>

      <button onClick={()=>setTypeOfColor('hex')}
      className='bg-amber-300 p-2 rounded'>Generate Hexa Color</button>

      <div style={{display:'flex',alignItems:'center',justifyContent:'center', marginTop:'50px', flexDirection:'column', color:'white'}}>
        <h1>Type of {typeOfColor ==='hex'? 'Hex Color': 'RGB Color'}</h1>
        <h3>Color: {color}</h3>
      </div>
     </div>

    </div>
  )
}


export default RandomColorGenerator;
