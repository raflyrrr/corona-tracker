import React, { useState } from "react";
import { IoHome } from "react-icons/io5";
import {HiOutlinePhone} from 'react-icons/hi'
import {CgDanger} from 'react-icons/cg'
import{AiOutlineInfoCircle} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import './Navbar.css'


function Navbar(props) {
  const [nav, setNav] = useState(false);
  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <a href="/#" className="logo">
        Covices     
      </a>
      <input type="checkbox" className="menu-btn" id="menu-btn" />
      <label htmlFor="menu-btn" className="menu-icon">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li className={props.classHome}>
        <Link to="/"><IoHome style={{fontSize:"20px",margin:"10px 0px",marginRight:"5px"}}></IoHome>Home</Link>
        </li>
        <li className={props.classInfo}>
          <Link to="/info"><AiOutlineInfoCircle style={{fontSize:"20px",margin:"10px 0px",marginRight:"5px"}}></AiOutlineInfoCircle>Info</Link>
        </li>
        <li className={props.classHotline}>
          <Link to="/hotline"><HiOutlinePhone style={{fontSize:"20px",margin:"10px 0px",marginRight:"5px"}}></HiOutlinePhone>Hotline</Link>
        </li>
        <li>
          <Link to="/hoax" className="nav-hoax-active" style={{backgroundColor:'red'}}><CgDanger style={{fontSize:"20px",margin:"10px 0px",marginRight:"5px"}}></CgDanger>Hoax Buster</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
