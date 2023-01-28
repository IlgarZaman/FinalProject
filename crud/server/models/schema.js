const mongoose  = require("mongoose");

const FlowerSchema=new mongoose.Schema({
    img:{
        type:String
    },
    name:{
        type:String
    },
    price:{
        type:Number
    },
})

const Flower =mongoose.model("flower",FlowerSchema)
module.exports={Flower}