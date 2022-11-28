import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ product }) => {
  const { user } = useContext(AuthContext);
  const { productName, resalePrice } = product;
  const { register, handleSubmit } = useForm();

  const currentData = new Date();

  const handleBooking = (data) => {
    console.log(currentData);
  };
  return (
    <div>
      <input type="checkbox" id="bookingModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <div>
            <form className="w-full" onSubmit={handleSubmit(handleBooking)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  {...register("name")}
                  className={`input input-bordered w-full`}
                  placeholder="Full name"
                  type="text"
                  name="name"
                  readOnly
                  defaultValue={user.displayName}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email")}
                  className={`input input-bordered w-full`}
                  placeholder="First name"
                  type="email"
                  name="email"
                  readOnly
                  defaultValue={user.email}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  {...register("productName")}
                  className={`input input-bordered w-full`}
                  placeholder="First name"
                  type="text"
                  name="productName"
                  readOnly
                  defaultValue={productName}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  {...register("resalePrice")}
                  className={`input input-bordered w-full`}
                  placeholder="First name"
                  type="text"
                  name="productName"
                  readOnly
                  defaultValue={resalePrice}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Phone Number</span>
                </label>
                <input
                  {...register("phoneNumber", {
                    required: "Email Address is required",
                  })}
                  className={`input input-bordered w-full`}
                  placeholder="Your Contact Phone Number"
                  type="text"
                  name="phoneNumber"
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Meeting Location</span>
                </label>
                <input
                  {...register("meetingLocation", {
                    required: "Email Address is required",
                  })}
                  className={`input input-bordered w-full`}
                  placeholder="Where you want meet with saler?"
                  type="text"
                  name="meetingLocation"
                />
              </div>

              <div>
                <label htmlFor="bookingModal" className="btn btn-error mr-2">
                  Cancel Booking
                </label>
                <input
                  className="btn  mt-5"
                  type="submit"
                  value="Confirm Booking"
                />
              </div>
              <button className="btn btn-accent mt-5 w-full" type="Submit">
                Submit
              </button>
            </form>
          </div>
          {/* <div className="modal-action">
            <label htmlFor="bookingModal" className="btn btn-error">
              Cancel Booking
            </label>
            <label htmlFor="bookingModal" className="btn btn-primary">
              Confirm Booking!
            </label>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
