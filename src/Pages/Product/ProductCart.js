import React from "react";
import { BsBookmarkCheck, BsFillCheckCircleFill } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";

const ProductCart = ({ product, setBooking }) => {
  const {
    photo,
    productName,
    category,
    postTime,
    price,
    resalePrice,
    salerLocation,
    salerName,
    usesYear,
  } = product;
  return (
    <div className="card bg-base-100 shadow-xl m-5">
      <figure className="">
        <img className="" src={photo} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-left">{productName}</h2>
        <p className="m-0 text-left">
          Location: <b>{salerLocation}</b>
        </p>
        <p className="m-0 text-left">
          Resale Price: <b className="text-accent">{resalePrice} BDT</b>
        </p>
        <p className="m-0 text-left">
          Original Price: <b className="text-gray-500">{price} BDT</b>
        </p>
        <p className="m-0 text-left">
          Uses Duration: <b className="text-gray-500">{usesYear} Years</b>
        </p>
        <p className="m-0 text-left flex my-auto">
          Owner: <b className="pl-1">{salerName}</b>
          <span className="text-blue-600 pl-2">
            <BsFillCheckCircleFill></BsFillCheckCircleFill>
          </span>
        </p>
        <p className="m-0 text-left">
          postTime Publish Date: <b>{postTime}</b>
        </p>
        <div className="card-actions">
          <label
            htmlFor="bookingModal"
            onClick={() => {
              setBooking(product);
            }}
            className="btn btn-sm btn-primary"
          >
            <BsBookmarkCheck className="mr-2"></BsBookmarkCheck>Book Now
          </label>
          <span className="btn btn-sm btn-accent">
            <BiCategory className="mr-2"></BiCategory> {category}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
