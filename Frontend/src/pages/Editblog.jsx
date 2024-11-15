import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const Editblog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [existingImage, setExistingImage] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8000/api/blog/getsingleblog/${id}`
        );
        const blog = response.data;
        setTitle(blog.title);
        setContent(blog.content);
        setExistingImage(blog.image);
      } catch (error) {
        console.error("Error fetching blog data:", error);
      }
    };
    fetchBlogData();
  }, [id]);

  const handleUpdateBlog = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    if (image) formData.append("image", image);

    try {
      const res = await axios.put(
        `http://localhost:8000/api/blog/updateblog/${id}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      if (res.status === 200) {
        alert("Blog updated successfully!");
        navigate("/bloglist");
      } else {
        alert("Failed to update blog.");
      }
    } catch (error) {
      console.error("Error updating blog:", error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-semibold text-center text-indigo-600 mb-6">
          Edit Blog
        </h1>
        <form onSubmit={handleUpdateBlog} className="space-y-4">
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
            {existingImage && (
              <div className="mb-3">
                <p>Current Image:</p>
                <img
                  src={`http://localhost:8000/${existingImage}`}
                  alt="Current"
                  className="h-32 w-32 object-cover rounded"
                />
              </div>
            )}
            <label
              htmlFor="image"
              className="block text-lg font-medium text-gray-700"
            >
              Upload New Image:
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
              Update Blog
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editblog;
