import React from 'react';
import './navBar.scss';
import discordLogo from '../NavBar/images/discord-logo.png';
import linkedinLogo from '../NavBar/images/linkedin-logo.png';
import githubLogo from '../NavBar/images/github-logo.png';
import Sidebar from '../Sidebar/Sidebar';
import { useState } from 'react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='nav-bar'>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className='wrapper'>
        <span className='nav-name'>Arindam.Dev</span>
        <div className='social'>
          <a
            href='https://www.linkedin.com/in/arindam-mukherjee-3b9477249/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={linkedinLogo} alt='Linkedin logo' />
          </a>
          <a
            href='http://discordapp.com/users/713166366005264534'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img
              src={discordLogo}
              alt='Discord Logo'
              className='discord-logo'
            />
          </a>
          <a
            href='https://github.com/Ascendrospyder'
            target='_blank'
            rel='noopener noreferrer'
          >
            <img src={githubLogo} alt='Github Logo' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
