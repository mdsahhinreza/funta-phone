import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const ReportedItems = () => {
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://funta-phone-server.vercel.app/reported/products`
      );
      const data = await res.json();
      return data;
    },
  });
  const deleteProduct = (id) => {
    fetch(`https://funta-phone-server.vercel.app/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          refetch();
          toast.success("Product Deleted Successful");
        }
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase my-2">Reported Products :</h2>
      <div className="overflow-x-auto">
        <table className="table w-[95%]">
          <thead>
            <tr>
              <th></th>
              <th>Image</th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Post Date</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={product._id} className="hover">
                <th>{i + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={product.productPhoto} alt="" />
                    </div>
                  </div>
                </td>
                <td>{product.productName}</td>
                <td>{product.resalePrice}</td>
                <td>{product.postTime}</td>
                <td>{product?.isSold ? "Sold" : "Available"}</td>
                <td>
                  <button
                    onClick={() => deleteProduct(product._id)}
                    className="btn btn-error btn-sm rounded-md mr-2"
                  >
                    Delete
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

export default ReportedItems;
