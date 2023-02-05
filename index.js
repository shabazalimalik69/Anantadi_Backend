require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const connectDB = require("./Config/db")
const Router = require("./AllRoutes/routes");
const path = require("path")
const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json())
app.use("/",Router);
app.use("/public",express.static(path.join(__dirname,"public")));

app.get("/",(req,res)=>{
    res.send("Home Page")
});

app.listen(PORT,async()=>{
    await connectDB();
    console.log(`Running on http://localhost:${PORT}`);
});