import mongoose from 'mongoose';

import express from 'express';
import { dbName } from '../utils/Constant.js';


const dbConnect = async ()=>{
    try{
       const dataDb = await mongoose.connect(`${process.env.MongoDB}/${dbName}`)

       console.log(dataDb.connection.host);
    }
    catch(err){
        console.error(err);
    }
}

export  default dbConnect;
// const app = express();
// require("dotenv").config();
// ( async ()=>{
//     try{
//         const dbData = await mongoose.connect(`${process.env.MONGODB_URL}/${DBNAME}`)
//         app.on('error',(error)=>{
//             console.log(error);
//         })
//     }
//     catch(err){
//         console.log(err);
//     }
// })