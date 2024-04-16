import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userName:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
        index:true,  /*index is used to search an userName in the database) */
    },
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        trim:true,
    },
    fullName:{
        type:String,
        required:true,
        trim:true,
        index:true
    },
    avatar:{
        type:String,
        required:true
    },
    coverImage:{
        type:String
    },
    password:{
        type:String,
        required:true
    },
    refreshToken:{
        type:String,
        required:true
    },
    watchHistor:{
        type:mongoose.Types.ObjectId,
        ref:"Video"
    }

},{timestamps:true});