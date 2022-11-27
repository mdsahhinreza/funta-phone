import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const Header = () => {
  const { user } = useContext(AuthContext);
  const menus = (
    <>
      <li>
        <Link>Home</Link>
      </li>
      <li>
        <Link>Products</Link>
      </li>
      {user ? (
        <>
          <li>
            <Link to="/login">LogOut</Link>
          </li>
        </>
      ) : (
        <>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-100 flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menus}
          </ul>
        </div>
        <Link className="btn btn-ghost normal-case text-xl" to="/">
          Funta-Phone
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menus}</ul>
      </div>
    </div>
  );
};

export default Header;
