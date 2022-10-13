import React from 'react'
import Me from "../../assets/me1.png"


export default function About() {
    
    return (
        <div className='text-center'>
            
            <p className='text-center page-title'>About</p>
            <img className='pic-of-me' src={Me} alt='Pic of Mike Levy'></img>
            <p className=' about'><strong><em>Hello there.</em></strong> My name is Mike Levy and welcome to my React Portfolio! I am an aspiring full-stack developer looking to showcase some of my work. Please explore my website and contact me if you have any questions. When I'm not coding, I enjoy music, hanging with friends, and bothering my cat Luna.</p>
        </div>
    )
}
