import React from "react";
import "./Intro.css";
import bg from "../../assets/bg.jpg";
import { Link } from "react-scroll";
import btnImg from "../../assets/handshake.png";

const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
              <span className="hello">Hello</span>
              <span className="introText">I'm <span className="introName">SANDEEP</span><br></br>Full Stack Web Developer</span>
              <p className="introPara">Transitioning from a diverse background, I am now a full stack web developer,<br></br> passionate about crafting seamless digital experiences and solving <br></br>complex challenges.</p>
              <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}><button className="btn"><img className="btnImg" src={btnImg}></img>Hire Me</button></Link>
            </div>
            <img src={bg} alt="" className="bg" />
        </section>
    )
}

export default Intro;