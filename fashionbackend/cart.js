const mongoose=require("mongoose")
const Cart=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    name1:{
        type:String,
        required:true
    },
    price:{
type:String,
required:true
    },
    img1:{
type:String,
required:true
    }
})
module.exports=mongoose.model("Cart",Cart)