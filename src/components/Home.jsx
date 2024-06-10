import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/Resume.pdf'
import hero from './Data/hero.json'
import Typed from 'typed.js'


export default function Home() {
  const typeRef = useRef(null)
 useEffect(() => {  
  const options = {
    strings: ['Welcome to my Profile!', "My name is Abhishek Gupta." , "Web Developer in React JS."],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
  }

  const typed = new Typed(typeRef.current, options)
 
   return () => {
     typed.destroy()
   }
 }, [])
 
  return (
    <>
    <div className="conatiner home" id='home'>
      <div className="left" data-aos="fade-up-right" data-aos-duration="500">
        <h1 ref={typeRef}>Web Developer (React JS)</h1>
        <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
      </div>
      <div className="right" data-aos="fade-up-left" data-aos-duration="500">
       <div className="img">
        <img src={`/Images/${hero.imgSrc}`} alt="hero" />
       </div>
      </div>
    </div>
    </>
  )
}
