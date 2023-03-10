const mongoose = require('mongoose');


const EmailVerification = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required: true
    },
    token:{
        type:String,
        required:true
    },
    createdAt:{
        type: Date,
        expires:1800,
        default: Date.now()
    }
})

module.exports = mongoose.model('EmailVerification' , EmailVerification)