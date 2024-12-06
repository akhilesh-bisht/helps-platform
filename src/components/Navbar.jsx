import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutSuccess } from "../redux/AuthSlice";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false); // State for hover effect
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutSuccess());
    navigate("/"); // Redirect to home after logout
  };

  return (
    <nav className="bg-black/70 text-white p-4 fixed top-0 left-0 w-full z-10">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">Community Help</div>
        <button
          className="text-xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
        <ul
          className={`flex flex-col md:flex-row md:space-x-6 absolute md:static w-full md:w-auto bg-black/80 md:bg-transparent p-4 md:p-0 ${
            isOpen ? "top-14 left-0" : "hidden md:flex"
          }`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/connections"
              className={({ isActive }) =>
                `block py-2 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
             Connection
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/post-request"
              className={({ isActive }) =>
                `block py-2 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Post Request
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 ${isActive ? "text-yellow-400" : ""}`
              }
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          {user ? (
            <>
              {/* Profile Link with Hover Effect */}
              <li
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative"
              >
                <NavLink
                  to="/profile"
                  className={({ isActive }) =>
                    `block py-2 ${isActive ? "text-yellow-400" : ""}`
                  }
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </NavLink>
                {isHovered && (
                  <div className="absolute top-full left-0 bg-black text-white p-2 mt-2 rounded-md shadow-lg">
                    <p className="font-bold">{user.name}</p>
                    <p>{user.email}</p>
                  </div>
                )}
              </li>
              {/* Logout Button */}
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="block py-2 bg-red-500 text-white rounded-md px-4"
                >
                  Logout
                </button>
              </li>
            </>
          ) : (
            /* Login Link */
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 ${isActive ? "text-yellow-400" : ""}`
                }
                onClick={() => setIsOpen(false)}
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
