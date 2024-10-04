import React from 'react';
import { motion } from 'framer-motion';

const CarvedHeading = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Motion component for animation */}
      <motion.h2
        className="text-h2  font-bold text-textSecondary relative z-10"
        initial={{ opacity: 0, x: -400 }} // Start faded out and shifted left
        animate={{ opacity: 1, x: 0 }}    // Fade in and move to position
        transition={{ duration: 2, ease : "easeInOut" }}      // Adjust the duration of the animation
      >
        I am MERN Stack Web Developer
      </motion.h2>

      {/* SVG for Carve Effect */}
      <svg
        viewBox="0 0 500 30"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-1 left-0 w-full"
        style={{ height: '20px' }}
      >
        <path
          d="M0 15 Q 150 25, 300 15 T 500 15"
          fill="none"
          stroke="#4A00E0" // Adjust the stroke color as needed
          strokeWidth="3"
        />
      </svg>
    </div>
  );
};

export default CarvedHeading;
