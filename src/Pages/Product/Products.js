import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import ProductCart from "./ProductCart";

const Products = () => {
  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch(
        "https://funta-phone-server.vercel.app/categories"
      );
      const data = await res.json();
      return data;
    },
  });
  const [booking, setBooking] = useState(null);
  const products = useLoaderData();
  return (
    <section>
      <div className="drawer drawer-mobile">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <div className="grid grid-cols-1 md:grid-cols-3 md:w-11/12 m-auto">
            {products.map((product) => (
              <ProductCart
                key={product._id}
                setBooking={setBooking}
                product={product}
              ></ProductCart>
            ))}
          </div>
          {booking && (
            <BookingModal
              product={booking}
              setBooking={setBooking}
            ></BookingModal>
          )}
          <label
            htmlFor="sidebar"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side ">
          <label htmlFor="sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-200 text-base-content border">
            {/* Sidebar content here  */}
            <li>
              <Link to={`/products/category/allProducts`}>All Products</Link>
            </li>
            {categories.map((category) => (
              <li key={category._id}>
                <Link to={`/products/category/${category._id}`}>
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Products;
