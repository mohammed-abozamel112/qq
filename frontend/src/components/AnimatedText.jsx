import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AnimatedText = ({ text, className = '' }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  });

  const characters = text.split('');

  return (
    <p ref={ref} className={`relative ${className}`}>
      {characters.map((char, i) => {
        const start = i / characters.length;
        const end = start + 1 / characters.length;

        return (
          <Character 
            key={i} 
            char={char} 
            scrollYProgress={scrollYProgress}
            start={start}
            end={end}
          />
        );
      })}
    </p>
  );
};

const Character = ({ char, scrollYProgress, start, end }) => {
  const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="invisible">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute top-0 left-0"
      >
        {char}
      </motion.span>
    </span>
  );
};

export default AnimatedText;
