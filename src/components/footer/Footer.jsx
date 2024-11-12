import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-navFooterGray py-14 text-textSecondary font-mono ' >
      <div className='max-w-screen-xl mx-auto ' >
        <footer>
          <div className='grid  lg:grid-cols-4 md:grid text-center ' >
            <div>
              <h1 className='md:text-2xl text-xl' >Passion</h1>
              <ul className='my-4' >
                <p className='md:text-start  ' >
                  A MERN stack developer builds full-stack applications using MongoDB, Express, React, and Node.js, handling both frontend and backend development.
                </p>
              </ul>
            </div>
            <div>
              <h1 className='md:text-2xl text-xl'  >Services</h1>
              <ul className='my-4' >
                <li> <NavLink to={""}>Web Design</NavLink> </li>
                <li> <NavLink to={""}>Web Development</NavLink> </li>
                <li> <NavLink to={""}>E-Commerce Solution</NavLink> </li>
                <li> <NavLink to={""}>Backend Development</NavLink> </li>
              </ul>
            </div>
            <div>
              <h1 className='md:text-2xl text-xl'  >Legal</h1>
              <ul className='my-4  ' >
                <li> <NavLink to={"/disclaimer"}>Disclaimer</NavLink> </li>
                <li> <NavLink to={"/intectual"}>Intellectual Property</NavLink> </li>
                <li> <NavLink to={"/data-privacy"}>Data Privacy and Compliance</NavLink> </li>
                <li> <NavLink to={"/limatation"}>Limitations of Liability</NavLink> </li>
              </ul>
            </div>
            <div>
              <h1 className='md:text-2xl text-xl'  >News Letter </h1>
              <ul className='my-4' >
                <li> <NavLink to={""}>Terms Of Use</NavLink> </li>
                <li> <NavLink to={""}>Privacy Policy</NavLink> </li>
                <li> <NavLink to={""}>Cookie Policy</NavLink> </li>
              </ul>
            </div>
          </div>
          <aside>
            <p className='text-center' >Copyright © {new Date().getFullYear()} - All right reserved by Md : Ishan Rana  </p>
          </aside>
        </footer>
      </div>
    </div>
  )
}

export default Footer
