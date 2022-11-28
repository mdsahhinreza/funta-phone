import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const PrivetRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
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
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivetRoute;
