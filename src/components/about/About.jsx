import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-bgPrimary">
      <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-318px)] flex items-center p-4 ">
        <p
          className="text-textSecondary text-smallDevice md:text-p text-center font-mono "
         // Animation duration and easing
        >
          My name is Ishan Rana. I am from Biral, Dinajpur. I passed my SSC in 2020. Currently, I am studying in the Computer Department at Thakurgaon Polytechnic Institute. I am also doing an internship at Universe Soft Tech, focusing on the MERN stack. Alongside my internship, I am completing a course in MERN development with a mentor. I have been studying in the Computer Department for the past four years. During this time, I have developed a strong foundation in various computer science concepts and practices. I am passionate about coding and constantly strive to enhance my skills and knowledge in this ever-evolving field.
        </p>
      </div>
    </div>
  );
}

export default About;
