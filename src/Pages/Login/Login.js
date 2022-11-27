import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import loginGif from "../../assets/Login/login.gif";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const [loginError, setLoginError] = useState(null);
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const handleLogin = (data) => {
    login(data.email, data.password);
  };
  return (
    <div className="py-5">
      <div className="hero h-[70vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="bg-base-200 p-7 rounded-md">
            <h3 className="text-3xl font-bold">Login</h3>
            <form className="w-full" onSubmit={handleSubmit(handleLogin)}>
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
                {loginError && <p className="text-red-500">{loginError}</p>}
                <small>
                  <Link className="text-primary">Forget Password ?</Link>
                </small>
              </div>
              <input className="btn w-full mt-5" type="submit" />
              <p className="text-center mt-2">
                New to Funta-Mobile ?{" "}
                <Link className="text-primary" to="/register">
                  Create new account
                </Link>
              </p>
              <div className="divider">OR</div>
              <button className="btn btn-outline btn-secondary uppercase w-full">
                SignIn With Google
              </button>
            </form>
          </div>
          <div className="hidden md:block">
            <img className="w-2/3" src={loginGif} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
