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



app.use(express.json())   // form ko data dekhine,, navaye undefine auxa
app.use(express.urlencoded({extended:true}))// "  "

// createBlog API for creating blog
app.post("/createBlog",async (req,res)=> {
    const title = req.body.title;
    const subTitle = req.body.subTitle;
    const description = req.body.description

   // console.log(req.body)  // to show everything that filled in form to terminal


   // form ko data DB maa haleko:
    await Blog.create ({
        title : title,
        subTitle : subTitle,
        description : description

    })

    res.json({
        statis : 201,
        message : "Successfully showing"
    })
})


app.listen(2000, ()=> {
    console.log("Nodejs has started at port 2000") 
})

// 