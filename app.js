const express = require("express");
const app = express();

// const mongoose = require("mongoose")

const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");

connectDatabase()




app.get("/",(req,res)=> {
    res.json({
        status : 200,
        message : "success"
    })
})


app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.post("/createBlog",async (req,res)=> {
    console.log(req.body)  // to show everything that filled in form to terminal

   // await Blog.create {
        
    //}


    res.json({
        statis : 201,
        message : "Successfully showing"
    })
})


app.listen(2000, ()=> {
    console.log("Nodejs has started at port 2000") 
})

// 1hr 7s min of vdo day 6 