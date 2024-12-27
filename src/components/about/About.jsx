import { Helmet } from "react-helmet-async";
import Animation from "../../animation/Animation";

const About = () => {
  window.scrollTo(0, 0);
  return (
    <>
      <Animation>
        <Helmet>
          <title>Portfilio || About Page</title>
        </Helmet>
        <div className="bg-gradient-to-br from-teal-400 via-sky-300 via-blue-200 to-purple-500 bg-opacity-100">
          <div className="max-w-screen-xl mx-auto min-h-[calc(100vh-318px)] flex items-center p-4 ">
            <p
              className="text-gray-900  md:text-2xl text-[10px]  text-center font-mono "
            // Animation duration and easing
            >
              My name is Ishan Rana. I am from Biral, Dinajpur. I passed my SSC in 2020. Currently, I am studying in the Computer Department at Thakurgaon Polytechnic Institute. I am also doing an internship at Universe Soft Tech, focusing on the MERN stack. Alongside my internship, I am completing a course in MERN development with a mentor. I have been studying in the Computer Department for the past four years. During this time, I have developed a strong foundation in various computer science concepts and practices. I am passionate about coding and constantly strive to enhance my skills and knowledge in this ever-evolving field.
            </p>
          </div>
        </div>
      </Animation>
    </>
  );
}

export default About;
