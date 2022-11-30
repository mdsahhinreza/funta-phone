import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AiFillCreditCard } from "react-icons/ai";
import { AuthContext } from "../../../context/AuthProvider";

const MyWishItems = () => {
  const { user } = useContext(AuthContext);

  const { data: wishItems = [] } = useQuery({
    queryKey: ["wishItems"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/wish?email=${user.email}`);
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase my-2">My Wish Items :</h2>
      <div className="overflow-x-auto">
        <table className="table w-[95%]">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Added Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {wishItems.map((item, i) => (
              <tr key={item._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={item.productImg} alt="" />
                    </div>
                  </div>
                </td>
                <td>{item.productName}</td>
                <td>{item.resalePrice}</td>
                <td>{item.addedTime}</td>
                <td>
                  <button className="btn btn-primary btn-sm rounded-md">
                    <AiFillCreditCard className="mr-2" /> Book Now
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

export default MyWishItems;
