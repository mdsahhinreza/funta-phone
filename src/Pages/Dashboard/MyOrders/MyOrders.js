import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);
  const { data: orders = [] } = useQuery({
    queryKey: ["orders"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/bookings?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase my-2">My Orders :</h2>
      <div className="overflow-x-auto">
        <table className="table w-[95%]">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Booking Date</th>
              <th>Booking Location</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, i) => (
              <tr key={order._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={order.productImg} alt="" />
                    </div>
                  </div>
                </td>
                <td>{order.productName}</td>
                <td>{order.resalePrice}</td>
                <td>{order.bookingTime}</td>
                <td>{order.bookingTime}</td>
                <td>
                  <button className="btn btn-primary btn-sm rounded-md">
                    <AiFillCreditCard className="mr-2" /> Payment
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
