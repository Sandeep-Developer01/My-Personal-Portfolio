import React from "react";
import "./Skills.css";
import WebDesign from "../../assets/web_design.jpg";
import AppDesign from "../../assets/app_design.jpeg";

const Skills = () =>{
    return (
         <section id="skills">
            <span className="skillTitle">What I know</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={WebDesign} alt="WebDesign" className="skillBar-img" />
                    <div className="skillBarText">
                        <h2>Website Design</h2>
                        <p>I am a passionate and detail-oriented website designer with a keen eye for aesthetics and user experience.
                             With a strong foundation in MERN (MongoDB, Express.js, React.js, Node.js) stack, I bring creativity and 
                             functionality together to craft visually appealing and user-friendly websites. </p>
                    </div>
                </div>
                {/* <div className="skillBar">
                    <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                    <div className="skillBarText">
                        <h2>App Design</h2>
                        <p>My goal is to seamlessly blend functionality with aesthetics, ensuring that each app I design not only 
                            meets the functional requirements but also delivers a delightful and memorable user experience.
                             Constantly staying updated on industry trends and emerging design technologies, I am committed to 
                             pushing the boundaries of innovation and contributing to the evolution of user interface design in 
                             the ever-changing landscape of mobile applications.</p>
                    </div>
                </div> */}
                <div className="skillDetails">
            <div className="card-extra">
              <div className="card-extra-details">
              <h3 style={{color: "lightskyblue"}}>Frontend</h3><hr></hr>
              <div className="card-details">
             <div className="card-text-details" style={{border: "2px solid yellow", marginLeft: "40px"}} >HTML</div>
             <div className="card-text-details" style={{border: "2px solid lightgreen"}}>CSS</div>
             </div>
             <div className="card-details">
             <div className="card-text-details" style={{border: "2px solid orange"}}>Tailwind</div>
             <div className="card-text-details" style={{border: "2px solid yellow", padding: "0px 20px"}}>Javascript</div>
             </div>
             <div className="card-details">
             <div className="card-text-details" style={{border: "2px solid #00ffff", marginLeft: "27px"}}>ReactJS</div>
             <div className="card-text-details" style={{border: "2px solid green"}}>MUI</div>
             </div>
             <div className="card-text-details" style={{border: "2px solid #8a2be2", margin: "1px 75px"}}>Bootstrap</div>
             </div>
           </div>
           <div className="card-extra">
              <div className="card-extra-details">
              <h3 style={{color: "lightpink"}}>Backend</h3><hr></hr>
              <div className="card-text-details" style={{border: "2px solid green", margin: "13px 75px"}}>NodeJs</div>
              <div className="card-text-details" style={{border: "2px solid yellow", margin: "13px 75px"}}>ExpressJS</div>
             </div>
           </div>
           <div className="card-extra">
              <div className="card-extra-details">
              <h3 style={{color: "lightseagreen"}}>Database</h3><hr></hr>
              <div className="card-text-details" style={{border: "2px solid lightgreen", margin: "13px 75px"}}>MongoDB</div>
              <div className="card-text-details" style={{border: "2px solid #7fffd4", margin: "13px 75px"}}>MySQL</div>
             </div>
           </div>
          </div>
         </div>
       </section>
    )
}

export default Skills;