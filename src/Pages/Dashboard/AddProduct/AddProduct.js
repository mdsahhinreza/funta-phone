import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const postTime = format(new Date(), "PP");

  const { data: categories = [] } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });
  const imgbbKey = process.env.REACT_APP_imgbb_key;

  const handleAddProduct = (data) => {
    const img = data.productPhoto[0];
    const formData = new FormData();
    formData.append("image", img);

    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        const imgUrl = result.data.url;
        const productData = {
          productPhoto: imgUrl,
          productName: data.productName,
          sellerLocation: data.location,
          resalePrice: data.resalePrice,
          OriginalPrice: data.originalPrice,
          usedYear: data.usedYear,
          postTime: postTime,
          sellerName: user.displayName,
          sellerEmail: user.email,
          productCategory: data.category,
          productCondition: data.phoneCondition,
        };

        fetch("http://localhost:5000/products", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(productData),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              toast.success("Product Added Successful");
              reset();
              navigate("/dashboard/my-products");
            }
          });
      });
  };

  return (
    <div>
      <form
        className="md:w-[40%] mx-auto"
        onSubmit={handleSubmit(handleAddProduct)}
      >
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Photo</span>
          </label>
          <input
            {...register("productPhoto", {
              required: "Product Photo is required",
            })}
            className={`file-input file-input-bordered w-full`}
            type="file"
            name="productPhoto"
          />
          {errors.productPhoto && (
            <p className="text-red-500 text-left">
              {errors.productPhoto?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Product Name</span>
          </label>
          <input
            {...register("productName", {
              required: "Product Name is required",
            })}
            className={`input input-bordered w-full`}
            placeholder="Product Name"
            type="text"
            name="productName"
          />
          {errors.productName && (
            <p className="text-red-500 text-left">
              {errors.productName?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Resale Price</span>
          </label>
          <input
            {...register("resalePrice", {
              required: "Resale Price is required",
            })}
            className={`input input-bordered w-full`}
            placeholder="Resale Price"
            type="text"
            name="resalePrice"
          />
          {errors.resalePrice && (
            <p className="text-red-500 text-left">
              {errors.resalePrice?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Used Year</span>
          </label>
          <input
            {...register("usedYear", {
              required: "Used Year is required",
            })}
            className={`input input-bordered w-full`}
            placeholder="Type Number of Year"
            type="number"
            name="usedYear"
          />
          {errors.resalePrice && (
            <p className="text-red-500 text-left">
              {errors.resalePrice?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Contact</span>
          </label>
          <input
            {...register("contact", {
              required: "Contact is required",
            })}
            className={`input input-bordered w-full`}
            placeholder="Contact Number"
            type="text"
            name="contact"
          />
          {errors.contact && (
            <p className="text-red-500 text-left">{errors.contact?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            {...register("location", {
              required: "location is required",
            })}
            className={`input input-bordered w-full`}
            placeholder="Your location"
            type="text"
            name="location"
          />
          {errors.location && (
            <p className="text-red-500 text-left">{errors.location?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Phone Condition</span>
          </label>
          <select
            {...register("phoneCondition", {
              required: "Phone Condition is required",
            })}
            className="select select-bordered w-full"
            name="phoneCondition"
          >
            <option>Select Phone Condition</option>
            <option value="good">Good</option>
            <option value="fair">Fair</option>
            <option value="excellent">Excellent</option>
          </select>
          {errors.phoneCondition && (
            <p className="text-red-500 text-left">
              {errors.phoneCondition?.message}
            </p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <select
            {...register("category", {
              required: "Category is required",
            })}
            className="select select-bordered w-full"
            name="category"
          >
            <option>Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && (
            <p className="text-red-500 text-left">{errors.category?.message}</p>
          )}
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Original Price</span>
          </label>
          <input
            {...register("originalPrice", {
              required: "Original Price is required",
            })}
            className={`input input-bordered w-full`}
            placeholder="Original Price"
            type="text"
            name="originalPrice"
          />
          {errors.originalPrice && (
            <p className="text-red-500 text-left">
              {errors.originalPrice?.message}
            </p>
          )}
        </div>

        <div className="text-center">
          <button className="btn btn-error mr-2" type="reset">
            Clear Data
          </button>
          <input className="btn  mt-5" type="submit" value="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
