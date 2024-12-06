import React, { useState } from "react";
import { ImProfile } from "react-icons/im";

function User({ name, category, email, phone, location }) {
  const [connection, setConnection] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 w-72 mx-auto mt-">
      <div className="flex flex-col items-center space-y-4">
        {/* Profile Icon */}
        <div className="bg-blue-100 text-blue-500 p-4 rounded-full">
          <ImProfile size={30} />
        </div>

        {/* User Name */}
        <h1 className="text-xl font-semibold text-gray-800">{name}</h1>

        {/* User Details */}
        <div className="text-sm text-gray-600">
          <p className="mb-2">
            <span className="font-medium text-gray-800">Category:</span>{" "}
            {category}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-800">Email:</span> {email}
          </p>
          <p className="mb-2">
            <span className="font-medium text-gray-800">Phone:</span> {phone}
          </p>
        </div>

        {/* Connection Button */}
        {connection ? (
          <button
            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
            disabled
          >
            Request Sent!
          </button>
        ) : (
          <button
            onClick={() => setConnection(true)}
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
          >
            Make Connection
          </button>
        )}
      </div>
    </div>
  );
}

export default User;
