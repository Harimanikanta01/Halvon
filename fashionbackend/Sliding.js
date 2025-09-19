const mongoose=require("mongoose")
const Sliding=mongoose.Schema({
    image:{
        type:String
    }
})
module.exports=mongoose.model('Sliding',Sliding)