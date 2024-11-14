import { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import logoStore from '../../api-request/logoStore';

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const { logoListApi, logoList } = logoStore();

  const handleToggle = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    (async () => {
      await logoListApi();
    })()
  }, [])

  return (
    <div className='bg-gradient-to-br from-emerald-500 border via-teal-400 via-cyan-300 to-blue-500shadow-md shadow-green-200 font-mono font-bold text-2xl text-textSecondary sticky top-0 z-10'>
      <div className="navbar max-w-screen-xl mx-auto">
        {/* Navbar Start */}
        <div className="navbar-start">
          {/* Toggle Button for Small Screens */}
          <div className="dropdown md:hidden">
            <label onClick={handleToggle} tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className={`menu menu-sm dropdown-content z-50 bg-bgPrimary mt-3 z-[1] p-2 shadow rounded-box w-52 ${toggle ? "block duration-700 " : "hidden duration-700 "}`}>
              <li><NavLink to={"/"}>Home</NavLink></li>
              <li><NavLink to={"/about"}>About</NavLink></li>
              <li><NavLink to={"/skill"}>Skills</NavLink></li>
              <li><NavLink to={"/service"}>Services</NavLink></li>
              <li><NavLink to={"/project"}>Projects</NavLink></li>
              <li><NavLink to={"/blog"}>Blog</NavLink></li>
              <li><NavLink to={"/contact"}>Contact</NavLink></li>
              <li><NavLink to={"/stack-overflow"}>Stack Overflow </NavLink></li>
            </ul>
          </div>
          {/* Logo for Large Screens */}
          <NavLink className="hidden md:flex" to={"/"}>
            {
              logoList.map((logo, index) => (
                <img
                  key={index}
                  src={logo.logo}
                  alt={logo.logoName}
                  className="h-14 w-14"
                />
              ))
            }
          </NavLink>
        </div>

        {/* Navbar Center for Large Screens */}
        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal text-lg px-1">
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/about"}>About</NavLink></li>
            <li><NavLink to={"/skill"}>Skills</NavLink></li>
            <li><NavLink to={"/service"}>Services</NavLink></li>
            <li><NavLink to={"/project"}>Projects</NavLink></li>
            <li><NavLink to={"/blog"}>Blog</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/stack-overflow"}>Stack Overflow </NavLink></li>
          </ul>
        </div>

        {/* Navbar End */}
        {/* <div className="navbar-end">
          <NavLink to={"login"}>Login</NavLink>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
