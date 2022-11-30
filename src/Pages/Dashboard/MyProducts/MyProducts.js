import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider";

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/products?email=${user.email}`
      );
      const data = await res.json();
      return data;
    },
  });
  const deleteProduct = (id) => {
    fetch(`http://localhost:5000/products/${id}`, {
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
  const adsProduct = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/product/ads/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        toast.success("Product Added to Advertisement");
        refetch();
      });
  };
  return (
    <div>
      <h2 className="text-2xl font-bold uppercase my-2">My Products :</h2>
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
                  <button
                    onClick={() => adsProduct(product._id)}
                    disabled={product?.isAds || product?.isSold}
                    className="btn btn-success btn-sm rounded-md"
                  >
                    ADS
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

export default MyProducts;
