const app = require("express")();


app.get("/",(req,res)=> {
    res.json({
        status : 200,
        message : "success"
    })
})


app.listen(2000, ()=> {
    console.log("Nodejs has started at port 2000")
})