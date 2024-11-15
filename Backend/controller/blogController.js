const Blog = require("../model/blogModel");
const jwt = require("jsonwebtoken");

const createBlog = async (req,res)=>{
    const {title,content,image} = req.body;
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        return res.status(401).json({message: 'Authorization token required'})
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const author = decoded.id;
        const imagePath = req.file ? req.file.path : null;
        const newBlog =await Blog.create({title,content,author,image:imagePath});
        res.status(201).json({message:"Blog created successfully",newBlog});
    } catch (error) {
        res.status(500).json({message:"Internal Server Error",error});
    }
}
const getBlogs = async (req, res) => {
    const token = req.headers.authorization?.split(" ")[1];
    try {
        if (!token) {
            const blogs = await Blog.find().populate("author", "name email");
            return res.status(200).json(blogs);
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const blogs = await Blog.find({ author: userId }).populate("author", "name email");
        res.status(200).json(blogs);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
};

const getBlogById = async (req, res) => {
    const blogId = req.params.id;
    try {
        const deleteBlog = await Blog.findByIdAndDelete(blogId);
        res.status(200).json({message:"Blog deleted successfully",deleteBlog});
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });  
    }
}

const getsingleBlog = async (req, res) => {
    const blogId = req.params.id;
    try {
        const blog = await Blog.findById(blogId);
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const updateBlog = async (req, res) => {
    const blogId = req.params.id;
    const { title, content } = req.body;
    const imagePath = req.file ? req.file.path : null;
    try {
        const updatedBlog = await Blog.findByIdAndUpdate(blogId, { title, content, image: imagePath }, { new: true });
        res.status(200).json(updatedBlog);
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}

const likeBlog = async (req, res) => {
    const blogId = req.params.id;
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({message:"Authorization token required"});
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded.id;
        const blog = await Blog.findById(blogId);
        if(!blog){
            return res.status(404).json({message:"Blog not found"});
        }
        const isLiked = blog.likes.includes(userId);
        if(isLiked){
            blog.likes = blog.likes.filter((id) => id !== userId);
            await blog.save();
            return res.status(200).json({message:"Blog unliked successfully",likes:blog.likes.length});
        }else{
            blog.likes.push(userId);
            await blog.save();
            return res.status(200).json({message:"Blog liked successfully",likes:blog.likes.length});
        }
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error", error });
    }
}
module.exports = {
    createBlog,
    getBlogs,
    getBlogById,
    getsingleBlog,
    updateBlog,
    likeBlog
}