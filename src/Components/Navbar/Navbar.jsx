import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/portfolio.jpg";
import contactImg from "../../assets/contact.jpg";
import Menu from "../../assets/menu1.png";

import { Link } from "react-scroll";

const Navbar = () => {
const [showMenu, setShowMenu] = useState(false);

    return (
        <nav className="navbar navbar-extradetails">
            <img src={logo} alt="Logo" className="logo"></img>
            <div className="desktopMenu">
                 <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Home</Link>
                 <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">About</Link>
                 <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Projects</Link>
                 <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="desktopMenuListItem">Portfolio</Link>
                 <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="desktopMenuListItem">Clients</Link>
            </div>
            <button className="desktopMenuBtn" onClick={() => {
                document.getElementById("contact").scrollIntoView({behavior: "smooth"});
            }}>
                <img className="desktopMenuImg" src={contactImg}></img>Contact Me
            </button>

            <img src={Menu} alt="Menu" className="mobMenu" onClick={()=>setShowMenu(!showMenu)}></img>
            <div className="navMenu" style={{display: showMenu? "flex":"none"}}>
                 <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Home</Link>
                 <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                 <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                 <Link activeClass="active" to="works" spy={true} smooth={true} offset={-100} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Portfolio</Link>
                 <Link activeClass="active" to="clients" spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Clients</Link>
                 <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link> 
            </div>
        </nav>
    )
}

export default Navbar;