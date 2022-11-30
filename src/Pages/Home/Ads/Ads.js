import { useQuery } from "@tanstack/react-query";
import React from "react";

const Ads = () => {
  const { data: products = [] } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/ads/products`);
      const data = await res.json();
      return data;
    },
  });
  //   console.log(products);
  return (
    <div className="w-full  md:w-3/5 mx-auto mb-10">
      <div className="divider pb-10">
        <h2 className="text-3xl  uppercase font-bold">Advertise Items</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-11/12 m-auto">
        {products.map((product) => (
          <div key={product._id} className="card bg-base-100 shadow-xl m-5">
            <figure className="">
              <img
                className="lg:w-1/2"
                src={product.productPhoto}
                alt="Album"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-left">{product.productName}</h2>
              <p className="m-0 text-left">
                Location: <b>{product.sellerLocation}</b>
              </p>
              <p className="m-0 text-left">
                Resale Price:{" "}
                <b className="text-accent">{product.resalePrice} BDT</b>
              </p>
              <p className="m-0 text-left">
                Original Price:{" "}
                <b className="text-gray-500">{product.price} BDT</b>
              </p>
              <p className="m-0 text-left">
                Uses Duration:{" "}
                <b className="text-gray-500">{product.usedYear} Years</b>
              </p>
              <p className="m-0 text-left">
                Publish Date: <b>{product.postTime}</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ads;
