import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function Contact() {
  return (
    <>
    <div className="conatiner contact" id='contact'>
      <h1>CONTACT ME</h1>
      <div className="contact-icon" data-aos="zoom-in-up" data-aos-duration="500">
        <a href="mailto:as2003born@gmail.com" target='_blank' className="items"><CgMail className="icons"/> </a>
        <a href="https://www.linkedin.com/in/abhishek-gupta-b129061a9/" target='_blank' className="items"><CiLinkedin className="icons"/></a>
        <a href="https://github.com/abhishekteamalpha" target='_blank' className="items"><FaGithub className="icons"/></a>
        <a href="" target='_blank' className="items"><FaInstagramSquare className="icons"/></a>
        
      </div>
    </div>
    </>
  )
}
