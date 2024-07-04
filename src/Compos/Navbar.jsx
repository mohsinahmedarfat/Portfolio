import { LuDownload } from "react-icons/lu";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      {/* <li>
        <NavLink>Item 1</NavLink>
      </li>
      <li>
        <NavLink>Item 2</NavLink>
      </li>
      <li>
        <NavLink>Item 3</NavLink>
      </li> */}
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Projects</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#CADEFC] backdrop-blur-md fixed bg-opacity-70 text-white z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl font-bold text-[#769FCD]">
          Mohsin Ahmed Arfat
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-[#B9B4C7] ">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
        <button className="btn btn-sm bg-gradient-to-r from-[#CCA8E9] to-[#CADEFC] border-none">
          <LuDownload /> Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
