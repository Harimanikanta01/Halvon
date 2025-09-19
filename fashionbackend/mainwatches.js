const mongoose=require("mongoose")
const mianwatches=mongoose.Schema({
    name:{
        type:String
    },
    img1:{
        type:String
    },
    price:{
type:Number
    },
    img2:{
        type:String
    },
    img3:{
        type:String
    }
})
module.exports=mongoose.model("mainwatches",mianwatches)