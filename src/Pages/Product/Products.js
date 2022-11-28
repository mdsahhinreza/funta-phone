import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import BookingModal from "./BookingModal";
import ProductCart from "./ProductCart";

const Products = () => {
  const [booking, setBooking] = useState(null);
  const products = useLoaderData();
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:w-10/12 m-auto">
        {products.map((product) => (
          <ProductCart
            key={product._id}
            setBooking={setBooking}
            product={product}
          ></ProductCart>
        ))}
      </div>
      {booking && <BookingModal product={booking}></BookingModal>}
    </section>
  );
};

export default Products;
