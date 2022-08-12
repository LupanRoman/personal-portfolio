import React from 'react';
import { Link } from 'react-scroll';
import { BiHomeAlt } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { MdWorkOutline } from 'react-icons/md';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineGithub, AiOutlineInstagram } from 'react-icons/ai';


const Navbar = () => {
  return (
    <>
        <div className="nav-bar-component">

            <div className="links">
                <ul className='nav-list'>

                    <Link to='/' 
                    spy={true} 
                    smooth={true}  
                    duration={500}>
                    <li><BiHomeAlt/></li>
                    </Link>

                    <Link to='about' 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    <li><CgProfile /></li>
                    </Link>

                    <Link to='projects' 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    <li><MdWorkOutline /></li>
                    </Link>

                    <Link to='contacts' 
                    spy={true} 
                    smooth={true} 
                    duration={500}>
                    <li><AiOutlineMail /></li>
                    </Link>

                </ul>
            </div>

            <div className="social-media-links-nav">
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
    </>
  )
}

export default Navbar