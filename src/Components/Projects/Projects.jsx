import React from "react";
import "./Projects.css";
import Airbnb from "../../assets/airbnb.png";
import RapidRecall from "../../assets/RapidRecall.png";
import Ecommerce from "../../assets/ecommerce.jpg";
import Connectify from "../../assets/Connectify.jpg";

const Projects = () => {
    return (
        <section id="projects">
            <h2 className="projectHeading">My Projects</h2>
            <div className="projectImgs">
                <a href="https://github.com/Sandeep-Developer01/AirbnbClone-Wanderlust" target="_blank"><div className="card card-styling" style={{width: "18rem", borderRadius: "20px"}}>
                    <img src={Airbnb} className="projectImg card-img-top"/>
                    <div className="card-body card-extra-feature">
                        <h5 className="card-title">Airbnb Clone - <h6>Wanderlust</h6></h5>
                        <p className="card-text">EJS, Javascript, HTML, CSS, Bootstrap, MongoDB, Express, NodeJs</p>
                    </div>
                </div></a>
                <a href="https://github.com/Sandeep-Developer01/RapidRecall" target="_blank"><div className="card card-styling" style={{width: "18rem", borderRadius: "20px"}}>
                    <img src={RapidRecall} className="projectImg card-img-top"/>
                    <div className="card-body card-extra-feature">
                        <h5 className="card-title">Rapid Recall -<h6>a note making app</h6></h5>
                        <p className="card-text">EJS, Javascript, HTML, CSS, MongoDB, Passport, Bootstrap, Express</p>
                    </div>
                </div></a>
                <a href="https://github.com/Sandeep-Developer01/StyleSphere-Ecommerce" target="_blank"><div className="card card-styling" style={{width: "18rem", borderRadius: "20px"}}>
                    <img src={Ecommerce} className="projectImg card-img-top"/>
                    <div className="card-body card-extra-feature">
                        <h5 className="card-title">E-Commerce Website -<h6>Style Sphere</h6></h5>
                        <p className="card-text">&nbsp;React, CSS, MongoDB, Express, NodeJs <br></br>&nbsp;</p>
                    </div>
                </div></a>
                <div className="card card-styling" style={{width: "18rem", borderRadius: "20px"}}>
                    <img src={Connectify} className="projectImg card-img-top"/>
                    <div className="card-body card-extra-feature">
                        <h5 className="card-title">Chat App -<h6>Connectify</h6></h5>
                        <p className="card-text">React, Express, NodeJs, MongoDB, Socket.IO<br></br>&nbsp;</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;