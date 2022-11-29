import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import { FaHeart, FaShoppingCart, FaUserAlt } from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return (
      <div className="h-[100vh] flex justify-center items-center">
        <div className="card w-64 bg-base-100 shadow-xl">
          <div className="card-body text-center ">
            <progress className="progress mx-auto"></progress>
            <h2 className="text-lg font-bold">Please Wait!</h2>
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
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
            {user.userType === "admin" && (
              <>
                <li className="mt-2">
                  <Link to="/dashboard/all-users">
                    <FaUserAlt /> All Users
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/dashboard/all-seller">
                    <FaUserAlt /> All Seller
                  </Link>
                </li>
              </>
            )}

            {user.userType === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/my-order">
                    <FaShoppingCart></FaShoppingCart> My Orders
                  </Link>
                </li>
                <li className="mt-2">
                  <Link>
                    <FaHeart /> My Wish List
                  </Link>
                </li>
              </>
            )}
            <li>{user.userType}</li>
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
