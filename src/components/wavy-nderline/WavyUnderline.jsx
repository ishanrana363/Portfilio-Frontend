import React from 'react';
import { motion } from 'framer-motion';

const WavyUnderline = () => {
  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      {/* Motion component for animation */}
      <motion.h1
        style={{ fontSize: '50px', color: '#FF6500', fontWeight : "700", marginBottom: '10px', position: 'relative', zIndex: 1 }}
        initial={{ opacity: 0, y: 50 }}   // Start faded out and shifted down
        animate={{ opacity: 1, y: [0, -20, 0] }}  // Fade in and bounce along y-axis
        transition={{ 
          duration: 1.5,  // Adjust duration of bounce
          ease: "easeInOut", 
          repeat: Infinity,  // Infinite loop
          repeatType: "reverse"  // Reverse direction after each bounce
        }}
      >
        I am Ishan Rana
      </motion.h1>

      {/* SVG wavy underline */}
      <svg
        viewBox="0 0 380 20" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', bottom: '-5px', left: '0', width: '380px', height: '20px', zIndex: '0' }}
      >
        <path
          d="M0 10 Q 100 20, 250 10 T 500 10"  // Path for the wave effect
          stroke="#4A00E0"
          strokeWidth="2"
          fill="transparent"
        />
      </svg>
    </div>
  );
};

export default WavyUnderline;
