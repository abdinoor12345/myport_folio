 
 import React from 'react';
 import './Services.css';
 import my_services from '../my_services'; // Adjust the path if needed
  import arrow  from'../../assets/arrow.png'
  import line  from'../../assets/line.jpg'


 const Services = () => {
   const servicesData = my_services(); // Call the function to get the array of services
 
   return (
     <div  id="services"className='services'>
       <div className='services-title'>
         <h1>My Services</h1>
         <img src={line} alt=''/>
       </div>
       <div className="services-container">
         {servicesData.map((service, index) => (
           <div key={index} className="services-format">
             <h3>{service.name}</h3>
             <h2>{service.description}</h2>
             <div className="services-readmore">
               <p>Read more</p>
               <img src={arrow} alt=''/>
             </div>
           </div>
         ))}
       </div>
     </div>
   );
 };
 
 export default Services;
 