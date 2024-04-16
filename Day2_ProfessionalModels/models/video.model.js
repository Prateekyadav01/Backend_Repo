import mongoose  from "mongoose";


const videoSchema = new mongoose.Schema({
    videoFile:{
        // cloudinary
        type:String,  
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean
    },
    owner:{
        type: mongoose.Types.ObjectId,
        ref: "User"
        
    }
},{timestamps:true})