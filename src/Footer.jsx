import React from 'react';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <>
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
    </>

  )
}

export default Footer