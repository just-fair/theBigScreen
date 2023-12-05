const mongoose= require('mongoose');

const reserveSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    people:{
        type:Number,
        required:true
    },
    seat:{
        type:Number,
        required:true
    },
    payment:{
        type:String,
        required:true
    },
    createAt:{
        type:Date,
        default:Date.now
    }
})

module.exports=Reservation=mongoose.model("Reservation", reserveSchema)