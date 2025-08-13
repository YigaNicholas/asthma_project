import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Qr() {

const[text, setText]= useState('');
const[qrValue, setQrValue]= useState('')

function handleGenerator(){
  setQrValue(text)
  setText('')
}

  return(
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
        <h1 className="text-2xl mb-4 text-center font-bold">qr code generator</h1>
        <div>
            <input type="text" name="qr-code" placeholder="enter your value" 
            onChange={(e)=>setText(e.target.value)}
            value={text}
            className="border border-gray-500 p-1 rounded-lg text-center mb-4 focus:outline-none 
            focus:ring-2 focus:ring-red-100"/>
            <button onClick={handleGenerator} 
            disabled={text.trim()=== ''}
            className="bg-blue-500 text-white px-1 py-2 rounded w-full mb-4 
             hover:bg-blue-600
             disabled:bg-gray-400 disabled:cursor-not-allowed">generate</button>
        </div>
        <div>
            <QRCodeCanvas value={qrValue} size={400} bgColor="white"/>
        </div>
    </div>
  )
}
