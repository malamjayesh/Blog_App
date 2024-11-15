const express = require("express");
const {createBlog,getBlogs,getBlogById, getsingleBlog, updateBlog, likeBlog} = require("../controller/blogController")
const multer = require("multer");
const path = require("path");
const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); 
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });


router.post("/createblog",upload.single("image"),createBlog)
router.get("/getblog",getBlogs)
router.delete("/deleteblog/:id",getBlogById)
router.get("/getsingleblog/:id", getsingleBlog)
router.put("/updateblog/:id",upload.single("image"), updateBlog)
router.post("/bloglike/:id", likeBlog)
module.exports = router

