const express= require('express');
const mongoose= require('mongoose');
const cors= require('cors');
const authenticationModel= require('./models/authentication1')

const app=express();
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://localhost:27017/authentication");

app.post('/login', (req,res)=> {
    const {email, password}= req.body;
    authenticationModel.findOne({email: email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("sucess");
            }
            else{
                res.json("Incorrect password")
            }
        }
        else{
            res.json("No record exists")
        }
    })
})

app.post('/register',(req, res)=>{
    authenticationModel.create(req.body)
    .then(users => res.json(users))
    .catch(err=> console.log(err))
})

app.listen(3001, ()=>{
    console.log("server running at port 3001");
    
})