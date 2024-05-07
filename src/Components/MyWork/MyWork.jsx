import React from 'react';
import './MyWork.css';
import clinicalManagement from '../../assets/clinical_management.mp4';  
import ecommerceProject from '../../assets/ecommerce-project.mp4';  
import movie_website from '../../assets/movie_website.mp4';  
import arrow  from'../../assets/arrow.png'

const MyWork = () => {
  return (
    <div id="work" className='mywork'>
      <div className='mywork-title'>
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork-container">
      <div className="works"><h1>Clinical Management system</h1><video src={clinicalManagement} controls width="400" height="300"/>  </div>
      <div className="works"><h1>E-commercee Website</h1> <video src={ecommerceProject} controls width="400" height="300"/>  </div>
     <div className="works"> <h1>Batman Movies website</h1> <video src={movie_website} controls width="400" height="300"/>  </div>


      </div>
      <div className="mywork-showmore"><p>Show More</p>
      <img src={arrow} alt=''/></div>
    </div>
  );
}

export default MyWork;
