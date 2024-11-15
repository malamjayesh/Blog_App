import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  function handleSignOut() {
    localStorage.removeItem("token");
    alert("Signed out successfully!");
    navigate("/");
  }

  return (
    <div className="flex justify-center items-center bg-gray-800 p-4 sticky top-0 z-50">
      <ul className="flex space-x-8">
        <li>
          <Link to="/" className="text-white hover:text-gray-300">
            Home
          </Link>
        </li>
        {!token ? (
          <>
            <li>
              <Link to="/signup" className="text-white hover:text-gray-300">
                Sign Up
              </Link>
            </li>
            <li>
              <Link to="/signin" className="text-white hover:text-gray-300">
                Sign In
              </Link>
            </li>
            <li>
              <Link to="/bloglist" className="text-white hover:text-gray-300">
                Blogs
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/blogadd" className="text-white hover:text-gray-300">
                Add Blog
              </Link>
            </li>
            <li>
              <Link to="/bloglist" className="text-white hover:text-gray-300">
                My blog
              </Link>
            </li>
            {/* <li>
              <Link to="/bloglist" className="text-white hover:text-gray-300">
                Blogs
              </Link>
            </li> */}
          </>
        )}
      </ul>
      {token && (
        <button
          onClick={handleSignOut}
          className="text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded ml-auto"
        >
          Sign Out
        </button>
      )}
    </div>
  );
}

export default Navbar;
