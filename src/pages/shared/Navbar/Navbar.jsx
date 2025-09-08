import { NavLink } from "react-router-dom";
import logo from "../../../../src/assets/Icc-logo.png";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <details>
          <summary>Department</summary>
          <ul className="p-2">
            <li>
              <a>Science</a>
            </li>
            <li>
              <a>Business Studies</a>
            </li>
            <li>
              <a>Humanities</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <a>Notice Board</a>
      </li>
      <li>
        <a>Faculty</a>
      </li>
      <li>
        <a>Gallery</a>
      </li>
      <li>
        <a>Admission</a>
      </li>
    </>
  );
  
  return (
    <>
      <div className="navbar px-20 py-7  mx-auto shadow-sm bg-[#d0e3ffd7]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-50 rounded-box z-1 mt-3 w-52 p-2 shadow  font-bold text-[#00212abb]"
            >
              {navOptions}
            </ul>
          </div>
          <img className="w-20" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1  font-bold text-[#00212abb]">
            {navOptions}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-[#00212A] text-white">Sign In</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
