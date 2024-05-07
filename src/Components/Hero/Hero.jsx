import React from 'react'
import './Hero.css'
import noor  from'../../assets/noor1.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id="home" className='hero'>
 <img src={noor} alt="Noor" style={{ borderRadius: '50%', height: '100px', width: '100px' }} />
      <h1><span>I'M Abdinoor mohamed</span>  Full stack developer based in Kenya</h1>
      <p>Iam full stack developer from Mombasa Kenya, with 5 years experience With various certificates from Micrsoft, Google </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchorlink' offset={50}href='#contact'>connect with me</AnchorLink></div>
        <div className="hero-resume">my resume</div>
      </div>
    </div>
  )
}

export default Hero
