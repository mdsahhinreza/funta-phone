import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { AuthContext } from "../../context/AuthProvider";

const BookingModal = ({ product, setBooking }) => {
  const { user } = useContext(AuthContext);
  const { _id, productName, resalePrice, productPhoto } = product;
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const bookingTime = format(new Date(), "PP");

  const handleBooking = (data) => {
    const booking = {
      buyerName: data.name,
      buyerEmail: data.email,
      productName,
      productImg: productPhoto,
      productId: _id,
      resalePrice,
      buyerPhoneNumber: data.phoneNumber,
      bookingTime,
    };

    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        setBooking(null);

        fetch(`http://localhost:5000/product/sold/${_id}`, {
          method: "PUT",
        })
          .then((res) => res.json())
          .then((result) => {
            console.log(result);
          });

        toast.success("Booking Successful!");
      });

    // console.log(booking);
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
                    required: "Phone Number is required",
                  })}
                  className={`input input-bordered w-full`}
                  placeholder="Your Contact Phone Number"
                  type="text"
                  name="phoneNumber"
                />
                {errors.phoneNumber && (
                  <p className="text-red-500 text-left">
                    {errors.phoneNumber?.message}
                  </p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Meeting Location</span>
                </label>
                <input
                  {...register("meetingLocation", {
                    required: "Meeting Location is required",
                  })}
                  className={`input input-bordered w-full`}
                  placeholder="Where you want meet with saler?"
                  type="text"
                  name="meetingLocation"
                />
                {errors.meetingLocation && (
                  <p className="text-red-500 text-left">
                    {errors.meetingLocation?.message}
                  </p>
                )}
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
