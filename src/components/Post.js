import React from 'react'
import './post.css';
import postImg from "./img/download.jpeg"
import imoB from "./img/heartB.png"
import imoR from "./img/heartR.png"
import { useState } from 'react';


export default function Post(props) {

    const Poststyle = {
        
    }

    const changeImg = ()=>{
      console.log("clicked")
        if (imo === imoB){
          setImo(imoR)
        } else{
          setImo(imoB)
        }
    }

    const [imo, setImo] = useState(imoB)

  return (
    <>
      <div className="container">
        <p className='id'>{props.id}</p>

      <div className="img">  
        <img src={postImg} alt="post image" />
        </div>
        <div className="inputDiv">
        <input className='input' type="text" name="text" id="" placeholder='Enter your comment! '/>
        <img className='ImgImo' src={imo} alt="" onClick={changeImg}/>
        </div>
      </div>
    </>
  )
}
