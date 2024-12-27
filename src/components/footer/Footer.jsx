import { NavLink } from 'react-router-dom';
import Animation from '../../animation/Animation';

const Footer = () => {
  return (
    <Animation>
      <div className='bg-gradient-to-br from-emerald-500 via-teal-400 via-cyan-300 to-blue-500 shadow-md shadow-green-200 font-mono font-bold p-4 md:py-14 text-textSecondary'>
        <div className=' w-11/12 mx-auto'>
          <footer className='' >
            <div className='grid lg:grid-cols-4 md:grid text-center'>

              {/* Passion Section */}
              <div>
                <h1 className='md:text-2xl underline mt-2'>Passion</h1>
                <ul className='md:my-4'>
                  <p className='md:text-start md:text-xl text-[10px]'>
                    A MERN stack developer builds full-stack applications using MongoDB, Express, React, and Node.js, handling both frontend and backend development.
                  </p>
                </ul>
              </div>

              {/* Services Section */}
              <div>
                <h1 className='md:text-2xl underline mt-2'>Services</h1>
                <ul className='md:my-4'>
                  <li><NavLink className="md:text-xl text-[10px]" to="/web-design">Web Design</NavLink></li>
                  <li><NavLink className="md:text-xl text-[10px]" to="/web-development">Web Development</NavLink></li>
                  <li><NavLink className="md:text-xl text-[10px]" to="/e-commerce">E-Commerce Solution</NavLink></li>
                  <li><NavLink className="md:text-xl text-[10px]" to="/backend-development">Backend Development</NavLink></li>
                </ul>
              </div>

              {/* Legal Section */}
              <div>
                <h1 className='md:text-2xl underline mt-2'>Legal</h1>
                <ul className='md:my-4'>
                  <li><NavLink className="md:text-lg text-[9px]" to="/disclaimer">Disclaimer</NavLink></li>
                  <li><NavLink className="md:text-lg text-[9px]" to="/intectual">Intellectual Property</NavLink></li>
                  <li><NavLink className="md:text-lg text-[9px]" to="/data-privacy">Data Privacy and Compliance</NavLink></li>
                  <li><NavLink className="md:text-lg text-[9px]" to="/limatation">Limitations of Liability</NavLink></li>
                </ul>
              </div>

              {/* Newsletter Section */}
                <div className='' >
                  <h1 className='md:text-2xl underline mt-2'>Newsletter</h1>
                  <ul className='md:my-4'>
                    <li><NavLink className="md:text-lg text-[9px]" to="">Terms Of Use</NavLink></li>
                    <li><NavLink className="md:text-lg text-[9px]" to="">Privacy Policy</NavLink></li>
                    <li><NavLink className="md:text-lg text-[9px]" to="">Cookie Policy</NavLink></li>
                  </ul>
                </div>
            </div>

            {/* Footer Text */}
            <aside>
              <p className='text-center md:text-2xl mt-8'>
                © {new Date().getFullYear()} - All rights reserved by Md: Ishan Rana
              </p>
            </aside>
          </footer>
        </div>
      </div>
    </Animation>
  );
}

export default Footer;
