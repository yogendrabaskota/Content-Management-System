const app = require("express")();


app.get("/",(req,res)=> {
    res.json({
        status : 200,
        message : "success"
    })
})


//just practicing
app.get("/home",(req,res)=> {
    res.send("This is home page")
})

app.listen(2000, ()=> {
    console.log("Nodejs has started at port 2000") 
})

// 18 min of vdo day 6 