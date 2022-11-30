import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Header from "../Pages/Shared/Header/Header";
import {
  FaFolderPlus,
  FaHeart,
  FaShoppingCart,
  FaUserAlt,
  FaUserTie,
} from "react-icons/fa";
import { AuthContext } from "../context/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import { AiFillFolder } from "react-icons/ai";

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const { data: userInfo = [] } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await fetch(
        `https://funta-phone-server.vercel.app/users?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  if (!userInfo) {
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
          <ul className="menu p-4 w-80 bg-base-200 text-base-content list-decimal">
            {userInfo[0]?.userType === "admin" && (
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
                <li className="mt-2">
                  <Link to="/dashboard/all-buyer">
                    <FaUserTie /> All Buyer
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/dashboard/reported-products">
                    <FaUserAlt /> Reported Items
                  </Link>
                </li>
              </>
            )}

            {userInfo[0]?.userType === "seller" && (
              <>
                <li>
                  <Link to="/dashboard/add-product">
                    <FaFolderPlus /> Add Product
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/dashboard/my-products">
                    <AiFillFolder /> My Products
                  </Link>
                </li>
                {/* <li className="mt-2">
                  <Link>
                    <FaUsers /> My Buyers
                  </Link>
                </li> */}
              </>
            )}

            {userInfo[0]?.userType === "buyer" && (
              <>
                <li>
                  <Link to="/dashboard/my-order">
                    <FaShoppingCart></FaShoppingCart> My Orders
                  </Link>
                </li>
                <li className="mt-2">
                  <Link to="/dashboard/my-wish-items">
                    <FaHeart />
                    Wish List
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default DashboardLayout;
