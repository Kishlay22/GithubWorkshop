const mongoose=require("mongoose");

const schemaregs=new mongoose.Schema({
    First_Name:{
        type:String,
        required:true
    },
    Last_Name:{
        type:String,
        required:true
    },
    Email_Id:{
        type:String,
        required:true,
        unique:true
    },
    Mobile_Number:{
        type:String,
        required:true
    },
    Gender:{
        type:String,
        required:true
    },
    Batch:{
        type:String,
        required:true
    },
    Branch:{
        type:String,
        required:true
    },
    Locallite:{
        type:String,
        required:true
    }
})

const Register= new mongoose.model("registration",schemaregs);
module.exports=Register;