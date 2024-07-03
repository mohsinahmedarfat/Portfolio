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
    <div className="navbar bg-black backdrop-blur-md fixed bg-opacity-30 text-white">
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
        <a className="btn btn-ghost text-xl">Mohsin_AA</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      <div className="navbar-end">
        <button className="btn">
          <LuDownload /> Resume
        </button>
      </div>
    </div>
  );
};

export default Navbar;
