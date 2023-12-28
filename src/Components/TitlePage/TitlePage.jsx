import React, { useState } from 'react';
import '../TitlePage/titlePage.scss';
import scrollDownIcon from '../TitlePage/Images/scroll.png';
import { motion } from 'framer-motion';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

const TitlePage = () => {
  const [meme, setMeme] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const fadeInVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 3 } },
  };

  const buttonVariants = {
    hover: { y: -10, filter: 'invert(100%)', transition: { duration: 0.5 } },
    tap: { scale: 0.9 },
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  /**
   * The following function makes an async call to an opensource reddit meme api
   * and sets the meme
   */
  const fetchJokes = async () => {
    try {
      const response = await fetch('https://meme-api.com/gimme/wholesomememes');
      const data = await response.json();
      setMeme(data.url);
      setOpenDialog(true);
    } catch (error) {
      console.error('Error:', error);
    }
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

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    contactSection.scrollIntoView({ behavior: 'smooth' });
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
              <span> Student Software Engineer at UNSW 😊 </span>
              <span style={terminalGreen}>&#47;&gt;</span>
            </h1>
            <div className='buttons'>
              <motion.button
                whileHover='hover'
                whileTap='tap'
                variants={buttonVariants}
                onClick={scrollToContact}
              >
                Contact Me!
              </motion.button>
              <motion.button
                whileHover='hover'
                whileTap='tap'
                variants={buttonVariants}
                onClick={fetchJokes}
              >
                Bored? Click me for a surprise!
              </motion.button>
            </div>
            <div className='scrollDownIconContainer'>
              <motion.img
                variants={textVariants}
                animate='scrollButton'
                src={scrollDownIcon}
                alt='scroll down button'
              />
            </div>
          </motion.div>
          <motion.div
            className='slidingTextContainer'
            animate={{
              x: ['100%', '-100%'],
            }}
            transition={{
              duration: 15,
              ease: 'linear',
              repeat: Infinity,
              repeatType: 'mirror',
            }}
          >
            I like video games! music! programming!
          </motion.div>
        </div>
      </div>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        sx={{ borderRadius: '10%' }}
      >
        <DialogTitle sx={{ color: 'black' }}>
          You recieved wholesome memes 😊
        </DialogTitle>
        <DialogContent style={{ backgroundColor: '#FFFFFF' }}>
          {meme && <img src={meme} alt='Meme' style={{ maxWidth: '100%' }} />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TitlePage;
