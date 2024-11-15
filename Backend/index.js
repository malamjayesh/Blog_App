require("dotenv").config()
const express = require("express")
const cors = require("cors")
const ConnectDB = require("./configes/dbConfiges")
const userRoute = require("./routes/userRoute")
const blogRoute = require("./routes/blogRoute")
const app = express()
app.use(express.json())
app.use(cors())
app.use("/uploads", express.static("uploads"));
ConnectDB();
app.use("/api/auth", userRoute)
app.use("/api/blog", blogRoute)
app.listen(process.env.PORT, () => {
    console.log(`server is running at ${process.env.PORT}`);
})

