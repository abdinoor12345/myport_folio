import React from 'react'
import './Footer.css'
import user from'../../assets/user.png'
import footer from'../../assets/footer.jpg'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="footer-top-left">
                <img src={footer}alt="" />
                <p>I am a Full Stack Developer based in Mombasa, Kenya, with over 5 years of professional experience. I have honed my skills through hands-on projects and have earned several certifications from industry leaders such as Google and Microsoft.</p>
            </div>
            <div className="footer-top-right">
                <div className="footer-email-input">
                    <img src={user} alt="" />
                    <input type="email"  placeholder='Enter Your Email'/>
                </div>
                <div className="footer-subcribe">Subcribe</div>
            </div>
        </div>
      <hr/>
      <div className="footer-bottom"><p className="footer-bottom-left">
      &copy; 2024 Abdinoor Ali. All rights reserved   </p>
      <div className="footer-bottom-right">
      <p>Terms Of Service</p>
      <p>Privacy Policy</p>
      <p>Connect with me</p>
      <p><a href='https://www.linkedin.com/in/abdinoor-mohamed-3935b0229?
      utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' >linkedln profile</a></p>
      </div></div>
    </div>
  )
}

export default Footer
