import React, { useRef } from 'react';
import '../Parallax/parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const xStars = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div className='parallax' ref={ref}>
      <motion.h1 style={{ y: yText }}>What I do?</motion.h1>
      <motion.div className='mountains'></motion.div>
      <motion.div className='planets' style={{ y: yBg }}></motion.div>
      <motion.div className='stars' style={{ x: xStars }}></motion.div>
    </div>
  );
};

export default Parallax;
