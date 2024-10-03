import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Header = () => {
  const {pathname} = useLocation();
  console.log(pathname)
  return (
    <div className=' bg-textGray shadow-md shadow-green-200 text-textSecondary ' >
      <div className="navbar max-w-screen-xl mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li>
                <NavLink  to={"/"} > Home </NavLink>
              </li>
              <li>
                <NavLink to={"/about "} >About</NavLink>
              </li>
              <li>
                <NavLink to={"/skill"} > Skills </NavLink>
              </li>
              <li>
                <NavLink to={"/service"} > Services </NavLink>
              </li>
              <li>
                <NavLink to={"/project"} > Projects </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} > Blog </NavLink>
              </li>
              <li>
                <NavLink to={"/contact"} > Contact </NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className='' >
              <NavLink className={``} to={"/"} > Home </NavLink>
            </li>
            <li>
              <NavLink to={"/about"} >About</NavLink>
            </li>
            <li>
              <NavLink to={"/skill"} > Skills </NavLink>
            </li>
            <li>
              <NavLink to={"/service"} > Services </NavLink>
            </li>
            <li>
              <NavLink to={"/project"} > Projects </NavLink>
            </li>
            <li>
              <NavLink to={"/blog"} > Blog </NavLink>
            </li>
            <li>
              <NavLink to={"/contact"} > Contact </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </div>
  )
}

export default Header
