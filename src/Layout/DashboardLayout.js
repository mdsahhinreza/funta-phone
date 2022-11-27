import React from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const DashboardLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          {/* <label
            htmlFor="sidebar"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label> */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  text-base-content list-decimal">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link>
                <FaShoppingCart></FaShoppingCart> My Orders
              </Link>
            </li>
            <li className="mt-2">
              <Link>
                <FaHeart /> My Wish List
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
