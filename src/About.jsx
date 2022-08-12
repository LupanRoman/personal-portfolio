import React from 'react';
import { Link } from 'react-scroll';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

const About = () => {
  return (
    <>
        <div className="about-component" id='about'>
        <div className="text">
            <h4>About me</h4>
            <p>I've been passionate about coding for a while, now doing it for a living. I'm a front end developer, developing e-commerce, CRUD type websites, from small to big businesses. I'm an ambitious and well organized person, motivated, optimistic and creative. I'm the one, to get the job done.</p>
            <div className="social-media-links">
            <ul className='social-media'>

              <li>
              <a className='linkedin' target={"_blank"} 
              href="https://www.linkedin.com/in/lupan-roman-8a5572228">
              <AiOutlineLinkedin /></a>
              </li>

              <li>
              <a className='github' target={"_blank"} 
              href="https://github.com/LupanRoman">
              <AiOutlineGithub /></a>
              </li>

              <li>
              <a className='instagram' target={"_blank"} 
              href="https://instagram.com/lupan.roman?igshid=YmMyMTA2M2Y=">
              <AiOutlineInstagram /></a>
              </li>

            </ul>
            </div>
        </div>
        
        <div className="btns">
          <Link to='contacts' 
          spy={true} 
          smooth={true} 
          offset={5} 
          duration={500}>
          <button className='contact-me' >Contact Me</button>
          </Link>

          <button className='see-my-cv'><a target={"_blank"} href="https://www.rabota.md/ro/resume/it/339503">See my CV</a></button>
        </div>
            
        </div>
    </>
  )
}

export default About