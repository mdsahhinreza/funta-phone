import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineCrown } from "react-icons/ai";
import { FaRegTrashAlt } from "react-icons/fa";

const AllUser = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://funta-phone-server.vercel.app/users");
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

  const handleMakeAdmin = (id) => {
    fetch(`https://funta-phone-server.vercel.app/user/admin/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Update to Admin Success!");
        refetch();
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase my-2">All User :</h2>
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
                    disabled={user.userType === "admin"}
                    onClick={() => handleMakeAdmin(user._id)}
                    className="btn btn-primary btn-sm"
                  >
                    <AiOutlineCrown className="mr-1" />
                    Make Admin
                  </button>
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

export default AllUser;
