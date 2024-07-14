import { LuDownload } from "react-icons/lu";
import resume from "../assets/Mohsin Ahmed Arfat - Resume.pdf";
import { Link } from "react-scroll";

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
        <Link to="home" smooth={true} duration={500}>
          Home
        </Link>
      </li>
      <li>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
      </li>
      <li>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
      </li>
      <li>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
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
        <a className="ml-5 text-xl font-bold text-[#5C5470]">
          Mohsin Ahmed Arfat
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium text-[#352F44] ">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end mr-3">
        <a href={resume} download={"Resume-Mohsin-Ahmed-Arfat"}>
          <button className="btn btn-sm bg-gradient-to-r from-[#CCA8E9] to-[#CADEFC] border-none">
            <LuDownload /> Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
