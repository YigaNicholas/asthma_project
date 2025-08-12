import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

export default function Qr() {

const[text, setText]= useState('');
const[input, setInput]= useState('')

  return(
    <div>
        <h1>qr code generator</h1>o
        <div>
            <input type="text" name="qr-code" placeholder="enter your value" 
            onChange={(e)=>setText(e.target.value)}
            value={text}/>
            <button onClick={handleGenerator}>generate</button>
        </div>
        <div>
            <QRCodeCanvas value={text}/>
        </div>
    </div>
  )
}
