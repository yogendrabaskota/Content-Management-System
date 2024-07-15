const app = require("express")();
// const mongoose = require("mongoose")

const { connectDatabase } = require("./database/database");

connectDatabase()




app.get("/",(req,res)=> {
    res.json({
        status : 200,
        message : "success"
    })
})


app.listen(2000, ()=> {
    console.log("Nodejs has started at port 2000") 
})

// 1hr 7s min of vdo day 6 