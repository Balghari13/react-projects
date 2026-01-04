import React, { useState } from 'react'
import QRCode from "react-qr-code";
const QRcodeComponent = () => {
  const [qrCode, setQrCode]= useState('')
  const [inputValue, setinputValue] = useState('')

  const generateQR =()=>{
      setQrCode(inputValue)
      setinputValue('')
  }
  return (
    <div>
      <h1>QRcode Generator</h1>
        <input type="text" 
        value={inputValue} 
        onChange={(e)=>setinputValue(e.target.value)}
         className='border'/>

        <button className='bg-green-800' disabled={inputValue && inputValue.trim() !==''?false:true} onClick={generateQR}>Generate QR</button>
<div>
 
</div>
 {qrCode && <QRCode id='qr-code-value' value={qrCode}/>}
    </div>
  )
}

export default QRcodeComponent