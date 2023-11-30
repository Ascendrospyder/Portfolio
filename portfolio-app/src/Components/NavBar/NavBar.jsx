import React from 'react';
import './navBar.scss';
import discordLogo from '../NavBar/images/discord-logo.png';
import linkedinLogo from '../NavBar/images/linkedin-logo.png';
import githubLogo from '../NavBar/images/github-logo.png';
import { motion } from 'framer-motion';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='nav-bar'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='wrapper'>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className='nav-name'
        >
          Arindam.Dev
        </motion.span>
        <div className='social'>
          <a href='https://www.linkedin.com/in/arindam-mukherjee-3b9477249/'>
            <img src={linkedinLogo} alt='Linkedin logo' />
          </a>
          <a href='http://discordapp.com/users/713166366005264534'>
            <img
              src={discordLogo}
              alt='Discord Logo'
              className='discord-logo'
            ></img>
          </a>
          <a href='https://github.com/Ascendrospyder'>
            <img src={githubLogo} alt='Github Logo'></img>
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
