import React from 'react';
import '../TitlePage/titlePage.scss';
import titleImage from '../NavBar/images/title-image.jpg';
import scrollDownIcon from '../TitlePage/Images/scroll.png';
import { motion } from 'framer-motion';

const TitlePage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } }
  };

  const buttonVariants = {
    hover: { y: -10, filter: 'invert(100%)', transition: { duration: 0.5 } },
    tap: { scale: 0.9 }
  }

  const terminalGreen = {
    color: '#00FF00'
  };

  return (
    <div className='title'>
      <div className='wrapper'>
        <div className='imageContainer'>
          <div className='textContainer'>
            <motion.h2 initial='hidden' animate='visible' variants={fadeInVariants}>Arindam Mukherjee</motion.h2>
            <h1>
              <span style={terminalGreen}>&lt;</span>
              <span> Student Software Engineer </span>
              <span style={terminalGreen}>&#47;&gt;</span>
            </h1>
            <div className='buttons'>
              <motion.button whileHover='hover'
                whileTap='tap'
                variants={buttonVariants}>Contact Me!</motion.button>
              <motion.button whileHover='hover'
                whileTap='tap'
                variants={buttonVariants}>Bored? Click me for a surprise!</motion.button>
            </div>
            <img src={scrollDownIcon} alt='scroll down button' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
