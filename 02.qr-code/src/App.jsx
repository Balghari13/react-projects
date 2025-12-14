import { useState } from "react";
import QRCode from "qrcode";
import jsQR from "jsqr";

function App() {
  const [text, setText] = useState("");
  const [qrDataUrl, setQRdataUrl] = useState(null);
  const [scanResult, setScanResult] = useState("");

  const generateQR = async () => {
    try {
      const url = await QRCode.toDataURL(text);
      console.log(url);
      setQRdataUrl(url);
    } catch (err) {
      console.log(err.message);
    }
  };
const downloadQR =()=>{
if(!qrDataUrl) return
const link = document.createElement('a')
link.href = qrDataUrl
link.download = 'qr-code.png'
link.click()
}
  

  const handleFileUpload =(e)=>{
const file = e.target.files[0]
if((!file)) return

const img = new Image()
img.src = URL.createObjectURL(file)

img.onload=()=>{
  const canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  const ctx = canvas.getContext('2d')
  ctx.drawImage(img,0,0)

  const imageData = ctx.getImageData(0,0,canvas.width,canvas.height)
  const code = jsQR(imageData.data,canvas.width,canvas.height)

  if(code) setScanResult(code.data)
    else setScanResult('No QR code')
}

  }

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-yellow-200 text-center">
      <h1 className="text-blue-700 text-3xl font-bold mb-6">
        QR Code Generator
      </h1>
      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg mb-4 ">
        <h2 className="text-xl font-bold mb-4">Generate QR Code</h2>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border border-gray-300 w-full mb-4 p-2 rounded-lg"
          type="text"
        />

        <button
          onClick={generateQR}
          className="bg-blue-700 text-white px-4 py-2 rounded-lg mb-2"
        >
          Generate
        </button>

        <img src={qrDataUrl}  className="mx-auto mb-2"/>

        <button onClick={downloadQR}
         className="bg-green-600 text-white px-4 py-2 rounded-lg">
          Download QR
        </button>
      </div>

      <div className="bg-white w-full max-w-md p-6 rounded-2xl shadow-lg mb-4">
        <h2 className="text-xl font-bold mb-4">Scan QR Code</h2>

        <input
        onChange={handleFileUpload}
          type="file"
          accept="image/*"
          className="border border-gray-300 w-full mb-4 p-2 rounded-lg"
        />

        <p className="text-green-600 font-bold wrap-break-word">
          Scanned Result :{scanResult}
        </p>
      </div>
    </div>
  );
}

export default App;
