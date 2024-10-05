import React from 'react';
import { motion } from 'framer-motion';

const WavyUnderline = () => {
  return (
    <div style={{ display: 'inline-block', position: 'relative' }}>
      {/* Motion component for animation */}
      <h1
        style={{  color: '#FF6500', fontWeight : "700", marginBottom: '10px', position: 'relative', zIndex: 1 }}
        
        className='lg:text-h1 text-h1SmallDevice text-center  '
      >
        I am Ishan Rana
      </h1>

      {/* SVG wavy underline */}
      <svg
        viewBox="0 0 300 20" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ position: 'absolute', bottom: '-5px', left: '0', width: '300', height: '20px', zIndex: '0' }}
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
