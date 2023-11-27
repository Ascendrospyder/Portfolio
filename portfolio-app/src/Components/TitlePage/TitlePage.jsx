import React from 'react';
import '../TitlePage/titlePage.scss';
import titleImage from '../NavBar/images/title-image.jpg';
import scrollDownIcon from '../TitlePage/Images/scroll.png';
import { motion } from 'framer-motion';

const TitlePage = () => {
  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const buttonVariants = {
    hover: { y: -10, filter: 'invert(100%)', transition: { duration: 0.5 } },
    tap: { scale: 0.9 },
  };

  const textVariants = {
    initial: {
      x: -500,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
        staggerChildren: 0.1,
      },
    },
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };

  const terminalGreen = {
    color: '#00FF00',
  };

  return (
    <div className='title'>
      <div className='wrapper'>
        <div className='imageContainer'>
          <motion.div
            className='textContainer'
            variants={textVariants}
            initial='initial'
            animate='animate'
          >
            <motion.h2
              initial='hidden'
              animate='visible'
              variants={fadeInVariants}
            >
              Arindam Mukherjee
            </motion.h2>
            <h1>
              <span style={terminalGreen}>&lt;</span>
              <span> Student Software Engineer </span>
              <span style={terminalGreen}>&#47;&gt;</span>
            </h1>
            <div className='buttons'>
              <motion.button
                whileHover='hover'
                whileTap='tap'
                variants={buttonVariants}
              >
                Contact Me!
              </motion.button>
              <motion.button
                whileHover='hover'
                whileTap='tap'
                variants={buttonVariants}
              >
                Bored? Click me for a surprise!
              </motion.button>
            </div>
            <motion.img
              variants={textVariants}
              animate='scrollButton'
              src={scrollDownIcon}
              alt='scroll down button'
            />
          </motion.div>
          <motion.div
            className='slidingTextContainer'
            animate={{
              x: ['100%', '-100%'],
            }}
            transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'loop',
            }}
          >
            I like video games! music! programming! {/* Your sliding text */}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TitlePage;
