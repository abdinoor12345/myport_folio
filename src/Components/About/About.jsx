import React from 'react'
import './About.css'
import noor from '../../assets/noor1.jpg'
import logo from '../../assets/logo.jpg'

const About = () => {
    return (
        <div  id="about"className='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img height="40px" width="50px" src={logo} alt=""></img>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={noor} alt="Noor" style={{ borderRadius: '70%', height: '100px', width: '100px' }} />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p> I am a skilled full-stack developer proficient in both front-end and back-end technologies,
                            with experience in creating robust and efficient web applications</p><p>
                            I have a strong foundation in HTML, CSS, JavaScript, and backend languages like Python, php, enabling me to deliver end-to-end solutions tailored to client needs.
                        </p></div>
                        <div className="about-skills">
                            <div className="about-skill"><p>HTML&CSS</p><hr style={{width:"70%"}}/></div>
                            <div className="about-skill"><p>PHP(LARAVEL)</p><hr style={{width:"70%"}}/></div>
                            <div className="about-skill"><p>JAVASCRIPT</p><hr style={{width:"50%"}}/></div>
                            <div className="about-skill"><p>REACT JS</p><hr style={{width:"80%"}}/></div>

                        </div>
                </div>
            </div>
 <div className="about-achievements"><div className="about-achievement">
    <h1>5+</h1> 
    < p>YEARS OF EXPERIENCE</p></div><hr/>
    <div className="about-achievement">
    <h1>90+</h1> 
    < p>PROJECTS COMPLETED</p></div><hr/>
    <div className="about-achievement">
    <h1>15+</h1> 
    < p>HAPPY CLIENTS</p></div><hr/>
    </div>      
   </div>
    )
}

export default About
