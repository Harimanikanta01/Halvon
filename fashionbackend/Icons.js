const mongoose=require("mongoose")
const icons=mongoose.Schema({

    image:{
        type:String
    },
    name:{
        type:String
    }
})
module.exports=mongoose.model("Icons",icons)