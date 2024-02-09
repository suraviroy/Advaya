const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
       
    },
    clg:{
        type:String,
        //required:true
    },
    email:{
        type:String,
        //default:false
    },
    studentid:{
        type:String,
        //default:false
    },
    department:{
        type:String,
        //default:false
    },
    phone:{
        type:Number,
        //required:true
    },
    profilepic:{
        type:String,
        //default:false
    },
    certificate:{
        type:String,
        //default:false
    },
    skills:{
        type:String,
        //default:false
    },
    badge:{
        type:String,
        //default:false
    },
});


module.exports = mongoose.model("student", studentSchema);