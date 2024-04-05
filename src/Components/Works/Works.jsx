import React from "react";
import "./Works.css";
import Portfolio1 from "../../assets/portfolio1.webp";
import Portfolio2 from "../../assets/portfolio2.jpg";
import Portfolio7 from "../../assets/portfolio7.jpg";
import Portfolio4 from "../../assets/portfolio4.webp";
import Portfolio5 from "../../assets/portfolio5.webp";
import Portfolio6 from "../../assets/portfolio6.jpg";


const Works = () => {
    return (
          <section id="works">
            <h2 className="worksTitle">My Portfolio</h2>
            <span className="worksDesc">
I am a highly adaptable and collaborative full-stack web developer with a passion for crafting
 seamless digital experiences. Equipped with strong communication skills, I excel in translating 
 complex technical concepts into user-friendly solutions. My keen attention to detail ensures 
 the delivery of high-quality code, while my problem-solving abilities empower me to overcome challenges 
 efficiently. With a proactive approach to learning and staying updated on industry trends, 
  I bring a dynamic and innovative mindset to any project. My dedication to continuous improvement, 
  combined with a creative flair, allows me to contribute to the success of multifaceted web development endeavors.
            </span><br></br>
            <h4>Soft Skills</h4>
            <div className="worksImgs">
            <div className="card card-newstyle">
            <img src={Portfolio1} alt="" className="worksImg card-img-top" />
              <div className="card-body">
             <p className="card-text card-text-detail">Continuous Learning</p>
             </div>
           </div>
           <div className="card card-newstyle">
            <img src={Portfolio2} alt="" className="worksImg card-img-top" />
              <div className="card-body">
             <p className="card-text card-text-detail">Critical Thinking</p>
             </div>
           </div>
           <div className="card card-newstyle">
            <img src={Portfolio7} alt="" className="worksImg card-img-top" />
              <div className="card-body">
             <p className="card-text card-text-detail">Time Management</p>
             </div>
           </div>
           <div className="card card-newstyle">
            <img src={Portfolio4} alt="" className="worksImg card-img-top" />
              <div className="card-body">
             <p className="card-text card-text-detail">Team Collaboration</p>
             </div>
           </div>
           <div className="card card-newstyle">
            <img src={Portfolio5} alt="" className="worksImg card-img-top" />
              <div className="card-body">
             <p className="card-text card-text-detail">Adaptability</p>
             </div>
           </div>
           <div className="card card-newstyle">
            <img src={Portfolio6} alt="" className="worksImg card-img-top" />
              <div className="card-body">
             <p className="card-text card-text-detail">Conflict Resolution</p>
             </div>
           </div>
        </div>
          </section>
    );
}

export default Works;