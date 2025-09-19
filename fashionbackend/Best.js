const mongoose=require("mongoose")
const Best=mongoose.Schema({
    image:{
        type:String
    }
})
module.exports=mongoose.model('Best',Best)