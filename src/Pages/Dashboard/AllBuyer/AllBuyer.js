import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

const AllBuyer = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://funta-phone-server.vercel.app/users?userType=buyer"
      );
      const data = await res.json();
      return data;
    },
  });
  const handleDeleteUser = (id) => {
    fetch(`https://funta-phone-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User Deleted Successful");
        refetch();
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase my-2">All Buyers :</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Photo</th>
              <th>Name</th>
              <th>Email</th>
              <th>User Type</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-16 rounded">
                      <img src={user.img} alt="" />
                    </div>
                  </div>
                </td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="capitalize">{user.userType}</td>
                <td className="text-center">
                  <button
                    onClick={() => handleDeleteUser(user._id)}
                    className="btn btn-error text-white btn-sm ml-2"
                  >
                    <FaRegTrashAlt className="mr-1" /> Delete
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

export default AllBuyer;
