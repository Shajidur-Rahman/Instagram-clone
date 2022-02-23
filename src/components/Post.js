import React from 'react'
import './post.css';
import postImg from "./img/download.jpeg"

export default function Post() {

    const Poststyle = {
        
    }

  return (
    <>
    <div className="container" style={Poststyle}>
        <img src={postImg} alt="post " />
    </div>
    </>
  )
}
