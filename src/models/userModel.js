import mongoose from "mongoose";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please Provide username"],
        unique:true,
    },
    email:{
        type:String,
        required:[true,"Please Provide email"],
        unique:true,
       
    },
    password:{
        type:String,
        required:[true, "Please Provide a password"]
    },
    isVerfied:{
        type:Boolean,
        default:false,
    },
    role:{
        isAdmin:{
            type:Boolean,
            default:false,
        },
        //this is string token
        forgotPasswordToken: String,
        forgotPasswordTokenExpiry: Date,
        verifyToken: String,
        verifyTokenExpiry:Date,
    }
})

const User=mongoose.models.users || mongoose.model('users', userSchema);


export default User;