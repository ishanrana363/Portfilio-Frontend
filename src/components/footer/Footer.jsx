import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-navFooterGray py-14 text-textSecondary font-mono ' >
      <div className='max-w-screen-xl mx-auto ' >
        <footer>
          <div className='grid  lg:grid-cols-4 md:grid grid-cols-2 text-center ' >
            <div>
              <h1 className='md:text-2xl text-xl' >Service</h1>
              <ul className='my-4' >
                <li> <NavLink to={""}>Branding</NavLink> </li>
                <li> <NavLink to={""}>Design</NavLink> </li>
                <li> <NavLink to={""}>Markting</NavLink> </li>
                <li> <NavLink to={""}>Advertisment</NavLink> </li>
              </ul>
            </div>
            <div>
              <h1 className='md:text-2xl text-xl'  >Company</h1>
              <ul className='my-4' >
                <li> <NavLink to={""}>About Us</NavLink> </li>
                <li> <NavLink to={""}>Contack</NavLink> </li>
                <li> <NavLink to={""}>Jobs</NavLink> </li>
                <li> <NavLink to={""}>Press Kit</NavLink> </li>
              </ul>
            </div>
            <div>
              <h1 className='md:text-2xl text-xl'  >Legal</h1>
              <ul className='my-4' >
                <li> <NavLink to={""}>Terms Of Use</NavLink> </li>
                <li> <NavLink to={""}>Privacy Policy</NavLink> </li>
                <li> <NavLink to={""}>Cookie Policy</NavLink> </li>
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
