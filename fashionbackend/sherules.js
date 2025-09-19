const mongoose=require("mongoose")
const She=mongoose.Schema({
    image:{
        type:String
    }
})
module.exports=mongoose.model('She',She)