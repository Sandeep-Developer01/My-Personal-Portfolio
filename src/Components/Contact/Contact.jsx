import React, { useRef } from "react";
import "./Contact.css";
import LinkedInIcon from "../../assets/linkedin_icon.jpg";
import TwitterIcon from "../../assets/twitter_icon.jpeg";
import GithubIcon from "../../assets/github_icon.jpg";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm(import.meta.env.REACT_APP_SERVICE_ID, import.meta.env.REACT_APP_TEMPLATE_ID, form.current, {
            publicKey: import.meta.env.REACT_APP_PUBLIC_KEY,
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset();
              alert("Email sent");
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section id="contactPage">
            <div className="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                As a fresher in the field of web development, I am a motivated and aspiring professional eager to embark
                 on a journey of growth and learning. While I may not have hands-on experience with clients yet, my enthusiasm 
                 for coding and web development is evident in the projects I've undertaken during my education and personal exploration.
                </p>
                </div>
                <div id="contact">
                    <h1 className="contactPageTitle">Contact Me</h1>
                    <span className="contactDesc">Please fill out the form below to discuss any work opportunities</span>
                    <form className="contactForm" ref={form} onSubmit={sendEmail}>
                        <input type="text" className="name" placeholder="Your Name" name="from_name" required></input>
                        <input type="email" className="email" placeholder="Your Email" name="from_email" required></input>
                         <textarea className="msg" name="message" placeholder="Your Message" required></textarea>
                         <button type="submit" value="Send" className="submitBtn">Submit</button>
                     <div className="links">
                        <a href="https://www.linkedin.com/in/sandeep-saini-5bb993298/" target="_blank"><img src={LinkedInIcon} className="link"></img></a>
                        <a href="https://twitter.com/Sandeep_Sainiii" target="_blank"><img src={TwitterIcon} className="link"></img></a>
                        <a href="https://github.com/Sandeep-Developer01" target="_blank"><img src={GithubIcon} className="link"></img></a>
                     </div>
                    </form>
                    </div> 
        </section>
    )
}

export default Contact;