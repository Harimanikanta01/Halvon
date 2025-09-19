const mongoose=require("mongoose")
const Watches=mongoose.Schema({
    image:{
        type:String
    }
})
module.exports=mongoose.model('Watches',Watches)