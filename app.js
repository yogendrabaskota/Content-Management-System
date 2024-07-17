const express = require("express");
const app = express();

// const mongoose = require("mongoose")

const { connectDatabase } = require("./database/database");
const Blog = require("./model/blogModel");
connectDatabase()



app.use(express.json())   // form ko data dekhine,, navaye undefine auxa
app.use(express.urlencoded({extended:true}))// "  "



app.get("/",(req,res)=> {
    res.json({
        status : 200,
        message : "success"
    })
})

// GET API for all blogs
app.get("/blogs",async(req,res)=>{
    const blogs = await Blog.find()  // Blog maa store vako data 'blogs' maa janxa...[ Blog maa vako data vaneko form maa enter gareko data ho]
// .find() maa jahile ni data array format maa auxa.
    if(blogs.length == 0){
        res.json({
            status : 404,
            message : "Empty blogs"
        })
    }
    else{
        res.json({
            status : 200,
            message : "Blogs fetched successfully",
            data : blogs // blogs ko data show garxa 
        })
    }
})


// GET API for single blogs
app.get("/blogs/:id",async(req,res) => {
 //   // console.log(req.params.id)
 // YAHA DEKHI
     const id = req.params.id
    // const blog = await Blog.find({_id : id})
    // if(blog.length == 0){
    // res.json({
    //     status : 404,
    //     message : "couldnot found blogs with provided id"
    // })
    // }else {
 
    //     res.json({
    //     status : 200,
    //     message : "Blog fetched successfully",
    //     data : blog
    //     })
    // }
// YAHA SAMMA 

 // ALTERNATIVE for : const blog = await Blog.find({_id : id}) line
 //  

    const blog = await Blog.findById(id)  // it gives o/p in object format 
    if(blog){           // so for object format, no need to check length
        res.json ({
            status : 200,
            message : "Blog fetched successfully",
            data : blog

        })
    }else {
        res.json ({
            status : 404,
            message : "No blogs found with given ID"
           
        })
    }

})


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


PORT = 2000
app.listen(PORT, ()=> {
    console.log("Nodejs has started at port", PORT) 
})

// 