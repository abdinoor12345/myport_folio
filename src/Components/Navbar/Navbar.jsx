import React,{useRef, useState} from 'react'
import './Navbar.css'
import logo from'../../assets/logo.jpg'
import menu_open from'../../assets/menu_open.png'
import menu_close from'../../assets/menu_close.png'

import underline from'../../assets/underline.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [menu, setMenu]=useState("home");
  const menuRef=useRef();
  const openMenu=()=>{
    menuRef.current.style.right="0";
  }
  const closeMenu=()=>{
    menuRef.current.style.right="-350px";
  }
  return (
    <div className='navbar'>
      <img  height="40px" width="40px"src={logo} alt=""></img>
      <img    height="40px" width="40px"src={menu_open} onClick={openMenu} alt="" className='nav-mob-open'></img>

      <ul  ref={menuRef}className='nav-menu'>
 <img src={menu_close} alt="" className="nav-mob-close"  onClick={closeMenu}/> 
    <li><AnchorLink className='anchorlink' href="#home"> <p onClick={()=>setMenu("home")}>home</p></AnchorLink>{menu==="home" ?<img src={underline} alt=""/>:<></>}</li>
      <li><AnchorLink className='anchorlink' offset={50} href='#work'><p onClick={()=>setMenu("work")}>portfolio</p></AnchorLink>{menu==="work" ?<img src={underline} alt=""/>:<></>} </li>
      <li><AnchorLink className='anchorlink' offset={50} href='#about'> <p onClick={()=>setMenu("about")}>about me</p></AnchorLink>{menu==="about" ?<img src={underline} alt=""/>:<></>}</li>
      <li><AnchorLink className='anchorlink' offset={50} href='#services'> <p onClick={()=>setMenu("services")}>services</p></AnchorLink>{menu==="services" ?<img src={underline} alt=""/>:<></>} </li>
      <li><AnchorLink className='anchorlink' offset={50}href='#contact'> <p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu==="contact" ?<img src={underline} alt=""/>:<></>}</li>
      </ul>
      <div className="nav-connect"><AnchorLink className='anchorlink' offset={50}href='#contact'>connect with me</AnchorLink></div>
    </div>
  )
}

export default Navbar
