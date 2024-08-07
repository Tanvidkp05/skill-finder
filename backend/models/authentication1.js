const mongoose= require('mongoose');

const authenticationSchema= new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const authenticationModel=mongoose.model("users", authenticationSchema)

module.exports=authenticationModel