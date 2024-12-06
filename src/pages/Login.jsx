import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  signupRequest,
  signupSuccess,
  signupFailure,
  loginRequest,
  loginSuccess,
  loginFailure,
} from "../redux/AuthSlice";

const Login = () => {
  const [isSignup, setIsSignup] = useState(true);
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  useEffect(() => {
    if (error) {
      dispatch(clearError());
    }
  }, [isSignup, dispatch]);

  const onSignupSubmit = (data) => {
    dispatch(signupRequest());
    setTimeout(() => {
      if (data.password === data.confirmPassword) {
        dispatch(
          signupSuccess({
            name: data.name,
            email: data.email,
            password: data.password,
          })
        );
        alert("Signup Successful! Please log in.");
        setIsSignup(false);
      } else {
        dispatch(signupFailure("Passwords do not match"));
      }
    }, 1000);
  };

  const onLoginSubmit = (data) => {
    dispatch(loginRequest());
    setTimeout(() => {
      if (
        user &&
        user.email === data.email &&
        user.password === data.password
      ) {
        dispatch(loginSuccess(user));
        alert("Login Successful!");
        navigate("/");
      } else {
        dispatch(loginFailure("Invalid credentials"));
      }
    }, 1000);
  };

  return (
    <div className="max-w-md mx-auto mt-32 p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">
        {isSignup ? "Signup" : "Login"}
      </h2>

      <form
        onSubmit={handleSubmit(isSignup ? onSignupSubmit : onLoginSubmit)}
        className="space-y-4"
      >
        {isSignup && (
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full p-3 border border-gray-300 rounded-md"
              type="text"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>
        )}

        <div>
          <label className="block text-gray-700">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
            type="email"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-gray-700">Password</label>
          <input
            {...register("password", { required: "Password is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
            type="password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        {isSignup && (
          <div>
            <label className="block text-gray-700">Confirm Password</label>
            <input
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full p-3 border border-gray-300 rounded-md"
              type="password"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        )}

        <button
          type="submit"
          className={`w-full p-3 rounded-md ${
            loading ? "bg-gray-400" : "bg-blue-500"
          }`}
          disabled={loading}
        >
          {loading ? "Loading..." : isSignup ? "Signup" : "Login"}
        </button>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <div className="text-center mt-4">
          <p>
            {isSignup ? "Already have an account?" : "Don't have an account?"}
            <button
              type="button"
              onClick={() => setIsSignup(!isSignup)}
              className="text-blue-500"
            >
              {isSignup ? "Login" : "Signup"}
            </button>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
