import { format } from "date-fns";
import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { BsBookmarkCheck, BsFillCheckCircleFill } from "react-icons/bs";
import { FaFlag, FaHeart } from "react-icons/fa";
import { AuthContext } from "../../context/AuthProvider";

const ProductCart = ({ product, setBooking }) => {
  const { user } = useContext(AuthContext);
  const currentTime = format(new Date(), "PP");
  const [isUserVerified, setIsUserVerified] = useState(false);
  const {
    productPhoto,
    productName,
    postTime,
    price,
    resalePrice,
    sellerLocation,
    sellerName,
    usedYear,
  } = product;

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${product.sellerEmail}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0].userType);
        setIsUserVerified(data[0].isVerified);
      });
  }, [product.sellerEmail]);

  const handleReportedItem = (product) => {
    // console.log(product);
    fetch(`http://localhost:5000/report/product/${product._id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Reported Successful!");
        }
      });
  };

  const handleWishItem = (product) => {
    // console.log(product);
    const wishItem = {
      buyerEmail: user.email,
      addedTime: currentTime,
      productName: product.productName,
      productImg: product.productPhoto,
      productId: product._id,
      resalePrice: product.resalePrice,
    };

    fetch("http://localhost:5000/wish", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(wishItem),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Product Added to Wish List");
        }
      });
  };
  return (
    <div className="card bg-base-100 shadow-xl m-5">
      <figure className="">
        <img className="lg:w-1/2" src={productPhoto} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-left">{productName}</h2>
        <p className="m-0 text-left">
          Location: <b>{sellerLocation}</b>
        </p>
        <p className="m-0 text-left">
          Resale Price: <b className="text-accent">{resalePrice} BDT</b>
        </p>
        <p className="m-0 text-left">
          Original Price: <b className="text-gray-500">{price} BDT</b>
        </p>
        <p className="m-0 text-left">
          Uses Duration: <b className="text-gray-500">{usedYear} Years</b>
        </p>
        <p className="m-0 text-left flex my-auto">
          Owner: <b className="pl-1">{sellerName}</b>
          {isUserVerified ? (
            <span
              className="text-blue-600 pl-2 tooltip"
              data-tip="✅ Verified Seller"
            >
              <BsFillCheckCircleFill></BsFillCheckCircleFill>
            </span>
          ) : (
            ""
          )}
        </p>
        <p className="m-0 text-left">
          postTime Publish Date: <b>{postTime}</b>
        </p>
        <div className="card-actions mt-5 text-center m-auto">
          <label
            htmlFor="bookingModal"
            onClick={() => {
              setBooking(product);
            }}
            className="btn btn-sm btn-primary"
          >
            <BsBookmarkCheck className="mr-2"></BsBookmarkCheck>Book Now
          </label>
          <button
            onClick={() => handleReportedItem(product)}
            className="btn btn-outline btn-sm btn-error"
          >
            <FaFlag className="mr-2" />
            Report
          </button>
          <button
            onClick={() => handleWishItem(product)}
            className="btn btn-outline btn-sm btn-success"
          >
            <FaHeart></FaHeart>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
