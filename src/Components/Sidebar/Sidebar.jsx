import React, { useState } from 'react';
import ListIcon from '@mui/icons-material/List';
import CloseIcon from '@mui/icons-material/Close';
import './sidebar.scss';
import { motion } from 'framer-motion';

const Sidebar = ({ isOpen, setIsOpen }) => {
  const sections = ['Home', 'Skills', 'Projects', 'Contact'];

  const sidebarVariants = {
    open: {
      width: '30vw',
      x: 0,
      opacity: 1,
    },
    closed: {
      width: 0,
      x: '-100%',
      opacity: 0,
    },
  };

  return (
    <div className='sidebar'>
      {!isOpen && (
        <div className='sidebar-icon' onClick={() => setIsOpen(!isOpen)}>
          <ListIcon sx={{ fontSize: '2em' }} />
        </div>
      )}
      {isOpen && (
        <motion.div
          className='sidebar-menu'
          variants={sidebarVariants}
          animate={isOpen ? 'open' : 'closed'}
          initial='closed'
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <div className='close-button' onClick={() => setIsOpen(false)}>
            <CloseIcon sx={{ '& path': { fill: 'black' }, fontSize: '2em' }} />
          </div>
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.toLowerCase()}`}
              className='sidebar-link'
            >
              {section}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Sidebar;
