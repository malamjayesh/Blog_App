import React, { useState } from "react";
import axios from "axios";

const Blogadd = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null); // Image state
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("You're not authenticated.");
      return;
    }
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);
    try {
      const response = await axios.post(
        "http://localhost:8000/api/blog/createblog",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );
      if (response.status === 201) {
        setMessage("Blog created successfully!");
        setTitle("");
        setContent("");
        setImage(null);
      } else {
        setMessage("Failed to create the blog.");
      }
    } catch (error) {
      setMessage("Error creating blog.");
      console.error(error);
    }
  };
  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/images/login.jpg')" }}
    >
      <div className="flex justify-center items-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
            Create Blog
          </h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-lg font-medium text-gray-700"
              >
                Title:
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div>
              <label
                htmlFor="content"
                className="block text-lg font-medium text-gray-700"
              >
                Content:
              </label>
              <textarea
                id="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                rows="6"
              ></textarea>
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-lg font-medium text-gray-700"
              >
                Upload Image:
              </label>
              <input
                type="file"
                id="image"
                onChange={(e) => setImage(e.target.files[0])}
                className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full py-3 mt-4 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition-all"
              >
                Submit
              </button>
            </div>
          </form>
          {message && (
            <div className="mt-4 p-4 bg-green-200 text-center rounded-md">
              <p>{message}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Blogadd;
