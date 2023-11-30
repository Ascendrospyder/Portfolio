import React, { useRef } from 'react';
import '../Parallax/parallax.scss';
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = ({ type, text }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const xStars = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const nebulaSize = useTransform(scrollYProgress, [0, 1], [1, 3]);

  return (
    <div className='parallax' ref={ref}>
      {type === 'Projects' ? (
        <motion.h1 style={{ y: yText, color: 'black' }}>{text}</motion.h1>
      ) : (
        <motion.h1 style={{ y: yText }}>{text}</motion.h1>
      )}
      <motion.div className='mountains'></motion.div>
      <motion.div className='planets' style={{ y: yBg }}></motion.div>
      {type === 'Projects' ? (
        <motion.div className='stars'></motion.div>
      ) : (
        <motion.div className='stars' style={{ x: xStars }}></motion.div>
      )}
      {type === 'Projects' ? (
        <motion.div
          className='nebula'
          style={{ scale: nebulaSize }}
        ></motion.div>
      ) : null}
    </div>
  );
};

export default Parallax;
