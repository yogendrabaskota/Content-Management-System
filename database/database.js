const mongoose = require("mongoose")
exports.connectDatabase = async()=>{
    
// connecting to DB
await mongoose.connect("mongodb+srv://hello:hello@cluster0.xzgeacd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
// await =  wait till connected to databases
console.log("database connected successfully")
    
}