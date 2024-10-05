import React from 'react';
import { motion } from 'framer-motion';

const CarvedHeading = () => {
  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {/* Motion component for animation */}
      <h2
        className="lg:text-h2 text-h2SmallDevice md:text-center text-center  font-bold text-textSecondary relative z-10"
              // Adjust the duration of the animation
      >
        I am MERN Stack Web Developer
      </h2>

      {/* SVG for Carve Effect */}
      <svg
        viewBox="0 0 200 30"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute -bottom-1 right-20 w-full"
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
