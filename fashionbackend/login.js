const mongoose=require("mongoose")
const Login=mongoose.Schema({
    name:{
        type:String,
        required:true

    },
    password:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Login",Login)