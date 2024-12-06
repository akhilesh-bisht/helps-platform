import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { addPostRequest } from "../redux/PostSlice";

const PostRequest = () => {
  const [userLocation, setUserLocation] = useState({ lat: null, lon: null });
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;
      setUserLocation({ lat: latitude, lon: longitude });
    });
  }, []);

  const onSubmit = (data) => {
    const postData = {
      subject: data.subject,
      time: data.time,
      location: `Lat: ${userLocation.lat}, Lon: ${userLocation.lon}`, // Display lat and lon
      email: data.Email,
      category: data.category,
      phone: data.phone,
    };

    dispatch(addPostRequest(postData));
    localStorage.setItem("postRequest", JSON.stringify(postData));
    reset();
    alert("Request posted successfully!");
  };

  return (
    <div className="max-w-lg mx-auto mt-16 bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Post a Request</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Subject
          </label>
          <input
            {...register("subject", { required: "Subject is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="e.g., Need a drill"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm">{errors.subject.message}</p>
          )}
        </div>

        {/* Time Field */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">Time</label>
          <input
            {...register("time", { required: "Time is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="e.g., For 2 hours"
          />
          {errors.time && (
            <p className="text-red-500 text-sm">{errors.time.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Email
          </label>
          <input
            {...register("Email", { required: "Email or phone is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="e.g., example@gmail.com"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm">{errors.Email.message}</p>
          )}
        </div>

        {/* Phone No. */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Phone No.
          </label>
          <input
            {...register("phone", { required: "Phone is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
            placeholder="e.g., +999999999"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Category Selection */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Category
          </label>
          <select
            {...register("category", { required: "Category is required" })}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="">Select a category</option>
            <option value="Tools">Tools</option>
            <option value="Transport">Transport</option>
            <option value="Emergency">Emergency</option>
            <option value="Food">Food</option> {/* Fixed value */}
          </select>
          {errors.category && (
            <p className="text-red-500 text-sm">{errors.category.message}</p>
          )}
        </div>

        {/* Location Field (Displaying Lat and Lon) */}
        <div>
          <label className="block text-gray-700 font-semibold mb-2">
            Location
          </label>
          <input
            type="text"
            value={
              userLocation.lat && userLocation.lon
                ? `Lat: ${userLocation.lat}, Lon: ${userLocation.lon}`
                : "Loading..."
            } // Show lat and lon or "Loading..."
            readOnly
            className="w-full p-3 border border-gray-300 rounded-md bg-gray-200"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-3 rounded-md hover:bg-blue-600"
        >
          Post Request
        </button>
      </form>
    </div>
  );
};

export default PostRequest;
