import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import registeGif from "../../assets/Register/register.gif";
import { Link } from "react-router-dom";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [registerError, setRegisterError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const imgbbKey = process.env.REACT_APP_imgbb_key;

  const handleRegister = (data) => {
    const img = data.photo[0];
    const formData = new FormData();
    formData.append("image", img);
    const url = `https://api.imgbb.com/1/upload?key=${imgbbKey}`;
    // console.log(data);

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.success) {
          const userData = {
            name: data.name,
            img: result.data.url,
            email: data.email,
            userType: data.userType,
          };

          createUser(data.email, data.password)
            .then((result) => {
              const user = result.user;
              console.log(user);
            })
            .catch();
        }
      });
  };
  return (
    <div className="py-5">
      <div className="hero h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="bg-base-200 p-7 rounded-md md:w-2/4">
            <h3 className="text-3xl font-bold">Register</h3>
            <form className="w-full" onSubmit={handleSubmit(handleRegister)}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>

                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.name && "input-error"
                  }`}
                  placeholder="First name"
                  type="text"
                  name="name"
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name?.message}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Profile Photo</span>
                </label>

                <input
                  {...register("photo", {
                    required: "Photo is required",
                  })}
                  className={`file-input file-input-bordered w-full ${
                    errors.photo && "input-error"
                  }`}
                  placeholder="First name"
                  type="file"
                  name="photo"
                />
                {errors.photo && (
                  <p className="text-red-500">{errors.photo?.message}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>

                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.email && "input-error"
                  }`}
                  placeholder="First name"
                  type="email"
                  name="email"
                />
                {errors.email && (
                  <p className="text-red-500">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                  })}
                  className={`input input-bordered w-full ${
                    errors.password && "input-error"
                  }`}
                  placeholder="First name"
                  type="password"
                  name="password"
                />
                {errors.password && (
                  <p className="text-red-500">{errors.password?.message}</p>
                )}
                {registerError && (
                  <p className="text-red-500">{registerError}</p>
                )}
                <small>
                  <Link className="text-primary">Forget Password ?</Link>
                </small>
              </div>
              <div className="flex justify-between py-3 items-center">
                <label htmlFor="">Account Type</label>
                <div className="flex justify-center">
                  <div className="flex items-center mr-5">
                    <label className="label">
                      <span className="label-text">Buyer</span>
                    </label>
                    <input
                      {...register("userType")}
                      type="radio"
                      name="user-type"
                      value={"buyer"}
                      defaultChecked
                      className="radio radio-warning"
                    />
                  </div>
                  <div className="flex items-center">
                    <label className="label">
                      <span className="label-text">Seller</span>
                    </label>
                    <input
                      {...register("userType")}
                      type="radio"
                      name="user-type"
                      value={"saler"}
                      className="radio radio-warning"
                    />
                  </div>
                </div>
              </div>
              <input className="btn w-full mt-5" type="submit" />
              <p className="text-center mt-2">
                Already Member ? Please{" "}
                <Link className="text-primary" to="/login">
                  Login
                </Link>
              </p>
              <div className="divider">OR</div>
              <button className="btn btn-outline btn-secondary uppercase w-full">
                Continue With Google
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <img className="w-2/3" src={registeGif} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;