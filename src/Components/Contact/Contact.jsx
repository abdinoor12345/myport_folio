import React ,{useState}from 'react'
import './Contact.css'
import call_icon  from'../../assets/call_icon.jpg'
import gmail  from'../../assets/gmail.png'
import location from'../../assets/location.png'

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "588a04bf-390d-4b71-8a9f-feb198f65d60");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div id="contact" className='contact'>
        <div className="contact-title">
            <h1>Get In Touch</h1>
        </div>
      <div className="contact-section">
        <div className="contact-left"><h1>Let's talk</h1>
        <p>Im currently available for new projects,So feel free to ask anythinG that you want. You can contact anytime.</p>
        <div className="contact-details">
        <div className="contact-detail"><img src={gmail} alt=''/><p>mohamedabdinoor701@gmail.com</p></div>
        <div className="contact-detail"><img src={call_icon} alt=""/><p>+254790957169</p></div>
        <div className="contact-detail"> <img src={location} alt=''/><p>MOMBASA,KENYA</p></div>

        </div>
        </div>
        <form  onSubmit={onSubmit} className="contact-right">
            <label htmlFor="">  Your Name</label>
            <input type=" text" placeholder='enter your name'  name ='name' />
            <label htmlFor="email"> Your Email</label>
            <input type="email" placeholder='your email' name="email" />
            <label htmlFor="">Enter Your Message Here </label>
            <textarea name="message"   rows="8" placeholder='enter your message'></textarea>
            <button className='contact-submit' type='submit'>submit</button>
        </form>
        <span>{result}</span>

      </div>
    </div>
  )
}

export default Contact
