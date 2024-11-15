// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { MdDelete, MdOutlineEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { IoIosAddCircleOutline } from "react-icons/io";

// const Bloglist = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [message, setMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);

//     const fetchBlogs = async () => {
//       try {
//         const headers = token ? { Authorization: `Bearer ${token}` } : {};
//         const response = await axios.get(
//           "http://localhost:8000/api/blog/getblog",
//           { headers }
//         );
//         if (response.status === 200) {
//           setBlogs(response.data);
//         } else {
//           setMessage("Failed to fetch blogs.");
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         setMessage("Error fetching blogs.");
//       }
//     };
//     fetchBlogs();
//   }, []);

//   const handleDeleteBlog = async (id) => {
//     try {
//       const res = await axios.delete(
//         `http://localhost:8000/api/blog/deleteblog/${id}`
//       );
//       if (res.status === 200) {
//         setBlogs((prev) => prev.filter((blog) => blog._id !== id));
//         alert("Blog Deleted");
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleEdit = (id) => {
//     navigate(`/blogedit/${id}`);
//   };

//   const handleAddBlog = () => {
//     navigate("/blogadd");
//   };

//   return (
//     <div className="p-6 bg-gray-100 min-h-screen">
//       <h1 className="text-4xl font-bold text-center text-indigo-600 mb-8">
//         All Blogs
//       </h1>
//       {message && (
//         <div className="p-4 bg-red-100 text-center text-red-600 rounded-md shadow-md mb-4">
//           {message}
//         </div>
//       )}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {blogs.length === 0 ? (
//           <p className="text-center text-gray-500 col-span-full">
//             No blogs available.
//           </p>
//         ) : (
//           blogs.map((blog) => (
//             <div
//               key={blog._id}
//               className="bg-white p-5 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-[30rem] flex flex-col"
//             >
//               <h2 className="text-xl font-semibold text-indigo-600 truncate mb-1">
//                 {blog.title}
//               </h2>
//               <p className="text-sm text-gray-500 mb-3">
//                 By: {blog.author?.name || "Unknown"}
//               </p>
//               <p className="text-gray-700 text-sm line-clamp-4 mb-3 overflow-hidden">
//                 {blog.content}
//               </p>
//               {blog.image && (
//                 <div className="overflow-hidden rounded-lg mb-3">
//                   <img
//                     src={`http://localhost:8000/${blog.image}`}
//                     alt={blog.title}
//                     className="w-full h-40 object-cover rounded-lg"
//                   />
//                 </div>
//               )}
//               {isLoggedIn && (
//                 <>
//                   <p className="text-xs text-gray-400 mt-2">
//                     Created At: {new Date(blog.createdAt).toLocaleString()}
//                   </p>
//                   <div className="flex justify-between items-center mt-auto pt-4">
//                     <button
//                       onClick={handleAddBlog}
//                       className="flex items-center text-green-500 bg-green-100 p-2 rounded-md hover:bg-green-200 transition"
//                     >
//                       <IoIosAddCircleOutline size={20} className="mr-1" />
//                       <span className="text-xs font-medium">Add</span>
//                     </button>
//                     <button
//                       onClick={() => handleEdit(blog._id)}
//                       className="flex items-center text-blue-500 bg-blue-100 p-2 rounded-md hover:bg-blue-200 transition"
//                     >
//                       <MdOutlineEdit size={20} className="mr-1" />
//                       <span className="text-xs font-medium">Edit</span>
//                     </button>
//                     <button
//                       onClick={() => handleDeleteBlog(blog._id)}
//                       className="flex items-center text-red-500 bg-red-100 p-2 rounded-md hover:bg-red-200 transition"
//                     >
//                       <MdDelete size={20} className="mr-1" />
//                       <span className="text-xs font-medium">Delete</span>
//                     </button>
//                   </div>
//                 </>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default Bloglist;
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { MdDelete, MdOutlineEdit } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
// import { IoIosAddCircleOutline } from "react-icons/io";

// const Bloglist = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [message, setMessage] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false);

//   const navigate = useNavigate();

//   useEffect(() => {
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);

//     const fetchBlogs = async () => {
//       try {
//         const headers = token ? { authorization: `Bearer ${token}` } : {};
//         const response = await axios.get(
//           "http://localhost:8000/api/blog/getblog",
//           { headers }
//         );
//         if (response.status === 200) {
//           setBlogs(response.data);
//         } else {
//           setMessage("Failed to fetch blogs.");
//         }
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//         setMessage("Error fetching blogs.");
//       }
//     };
//     fetchBlogs();
//   }, []);

//   const handleDeleteBlog = async (id) => {
//     try {
//       const res = await axios.delete(
//         `http://localhost:8000/api/blog/deleteblog/${id}`
//       );
//       if (res.status === 200) {
//         setBlogs((prev) => prev.filter((blog) => blog._id !== id));
//         alert("Blog Deleted");
//       }
//     } catch (error) {
//       console.log(error.message);
//     }
//   };

//   const handleEdit = (id) => {
//     navigate(`/blogedit/${id}`);
//   };

//   const handleAddBlog = () => {
//     navigate("/blogadd");
//   };

//   return (
//     <div className="p-6 bg-gray-300 min-h-screen flex flex-col items-center">
//       <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">
//         All Blogs
//       </h1>
//       {message && (
//         <div className="p-4 bg-red-100 text-center text-red-600 rounded-md shadow-md mb-6 w-full max-w-6xl">
//           {message}
//         </div>
//       )}
//       <div className="w-full max-w-5xl mx-auto">
//         {blogs.length === 0 ? (
//           <p className="text-center text-gray-500">No blogs available.</p>
//         ) : (
//           blogs.map((blog) => (
//             <div
//               key={blog._id}
//               className="bg-white p-8 rounded-lg shadow-2xl mb-10"
//             >
//               <h2 className="text-4xl font-bold text-indigo-600 mb-4">
//                 {blog.title}
//               </h2>
//               <p className="text-lg text-gray-500 mb-6">
//                 By: {blog.author?.name || "Unknown"}
//               </p>
//               <div className="mb-6">
//                 {/* Add this class to ensure the text wraps properly */}
//                 <p className="text-lg text-gray-700 leading-relaxed break-words">
//                   {blog.content}
//                 </p>
//               </div>
//               {blog.image && (
//                 <div className="overflow-hidden rounded-lg mb-6">
//                   <img
//                     src={`http://localhost:8000/${blog.image}`}
//                     alt={blog.title}
//                     className="w-full h-96 object-cover rounded-lg"
//                   />
//                 </div>
//               )}
//               {isLoggedIn && (
//                 <div className="flex justify-between items-center mt-6">
//                   <button
//                     onClick={handleAddBlog}
//                     className="flex items-center text-green-500 bg-green-100 p-4 rounded-md hover:bg-green-200 transition"
//                   >
//                     <IoIosAddCircleOutline size={20} className="mr-2" />
//                     <span className="text-lg font-medium">Add</span>
//                   </button>
//                   <button
//                     onClick={() => handleEdit(blog._id)}
//                     className="flex items-center text-blue-500 bg-blue-100 p-4 rounded-md hover:bg-blue-200 transition"
//                   >
//                     <MdOutlineEdit size={20} className="mr-2" />
//                     <span className="text-lg font-medium">Edit</span>
//                   </button>
//                   <button
//                     onClick={() => handleDeleteBlog(blog._id)}
//                     className="flex items-center text-red-500 bg-red-100 p-4 rounded-md hover:bg-red-200 transition"
//                   >
//                     <MdDelete size={20} className="mr-2" />
//                     <span className="text-lg font-medium">Delete</span>
//                   </button>
//                 </div>
//               )}
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };
// export default Bloglist;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { MdDelete, MdOutlineEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { IoIosAddCircleOutline } from "react-icons/io";

const Bloglist = () => {
  const [blogs, setBlogs] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const fetchBlogs = async () => {
      try {
        const headers = token ? { authorization: `Bearer ${token}` } : {};
        const response = await axios.get(
          "http://localhost:8000/api/blog/getblog",
          { headers }
        );
        if (response.status === 200) {
          setBlogs(response.data);
        } else {
          setMessage("Failed to fetch blogs.");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setMessage("Error fetching blogs.");
      }
    };
    fetchBlogs();
  }, []);

  const handleDeleteBlog = async (id) => {
    try {
      const res = await axios.delete(
        `http://localhost:8000/api/blog/deleteblog/${id}`
      );
      if (res.status === 200) {
        setBlogs((prev) => prev.filter((blog) => blog._id !== id));
        alert("Blog Deleted");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleEdit = (id) => {
    navigate(`/blogedit/${id}`);
  };

  const handleAddBlog = () => {
    navigate("/blogadd");
  };
  return (
    <div className="p-6 bg-gray-300 min-h-screen flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center text-orange-600 mb-10">
        All Blogs
      </h1>
      {message && (
        <div className="p-4 bg-red-100 text-center text-red-600 rounded-md shadow-md mb-6 w-full max-w-6xl">
          {message}
        </div>
      )}
      <div className="w-full max-w-5xl mx-auto">
        {blogs.length === 0 ? (
          <p className="text-center text-gray-500">No blogs available.</p>
        ) : (
          blogs.map((blog) => (
            <div
              key={blog._id}
              className="bg-white p-8 rounded-lg shadow-2xl mb-10"
            >
              <h2 className="text-4xl font-bold text-indigo-600 mb-4">
                {blog.title}
              </h2>
              <p className="text-lg text-gray-500 mb-6">
                By: {blog.author?.name || "Unknown"}
              </p>
              <div className="mb-6">
                <p className="text-lg text-gray-700 leading-relaxed break-words">
                  {blog.content || "No content available."}
                </p>
              </div>
              {blog.image && (
                <div className="overflow-hidden rounded-lg mb-6">
                  <img
                    src={`http://localhost:8000/${blog.image}`}
                    alt={blog.title}
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              )}
              {isLoggedIn && (
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 space-y-4 md:space-y-0 md:space-x-4">
                  <button
                    onClick={handleAddBlog}
                    className="flex items-center text-green-500 bg-green-100 p-4 rounded-md hover:bg-green-200 transition"
                  >
                    <IoIosAddCircleOutline size={20} className="mr-2" />
                    <span className="text-lg font-medium">Add</span>
                  </button>
                  <button
                    onClick={() => handleEdit(blog._id)}
                    className="flex items-center text-blue-500 bg-blue-100 p-4 rounded-md hover:bg-blue-200 transition"
                  >
                    <MdOutlineEdit size={20} className="mr-2" />
                    <span className="text-lg font-medium">Edit</span>
                  </button>
                  <button
                    onClick={() => handleDeleteBlog(blog._id)}
                    className="flex items-center text-red-500 bg-red-100 p-4 rounded-md hover:bg-red-200 transition"
                  >
                    <MdDelete size={20} className="mr-2" />
                    <span className="text-lg font-medium">Delete</span>
                  </button>
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Bloglist;
