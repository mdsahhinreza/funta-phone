import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider";
import registerGif from "../../assets/Register/register.gif";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser, updateProfileInfo, singInWithGoogle } =
    useContext(AuthContext);
  const [registerError, setRegisterError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();

  const imgbbKey = process.env.REACT_APP_imgbb_key;

  const handleRegister = (data) => {
    const img = data.photo[0];
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
              toast.success("Registration Complete");
              updateProfileInfo(data.name, imgUrl).catch((err) =>
                console.error(err)
              );

              fetch("https://funta-phone-server.vercel.app/users", {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(userData),
              })
                .then((res) => res.json())
                .then((userData) => {
                  navigate("/");
                });
            })
            .catch();
        }
      });
  };

  const handleGoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    singInWithGoogle(googleProvider)
      .then((result) => {
        const user = result.user;

        const userData = {
          name: user.displayName,
          img: user.photoURL,
          email: user.email,
          userType: "buyer",
        };

        fetch("https://funta-phone-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((res) => res.json())
          .then((userData) => {
            // console.log(userData);
          });
        toast.success("Login Success");
        navigate("/");
      })
      .catch((err) => setRegisterError(err.message));
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
                      name="userType"
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
                      name="userType"
                      value={"seller"}
                      className="radio radio-warning"
                    />
                  </div>
                </div>
              </div>
              <input
                className="btn w-full mt-5"
                type="submit"
                value="Register"
              />
              <p className="text-center mt-2">
                Already Member ? Please{" "}
                <Link className="text-primary" to="/login">
                  Login
                </Link>
              </p>
              <div className="divider">OR</div>
            </form>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline btn-secondary uppercase w-full"
            >
              Continue With Google
            </button>
          </div>
          <div className="hidden md:block">
            <img className="w-2/3" src={registerGif} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
