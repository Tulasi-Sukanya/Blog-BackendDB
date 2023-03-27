const dotenv = require("dotenv");
dotenv.config();
const express=require("express");
const bodyParser=require("body-parser");
const blogRouter=require("./Routes/Blogdata");


const app=express();
app.use(bodyParser.json());
app.use(blogRouter);

app.listen(6000,()=>{
    console.log("Server running at port...");
})