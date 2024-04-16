import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';
          
cloudinary.config({ 
  cloud_name: 'ds2uzrfki', 
  api_key: '978389278882422', 
  api_secret: 'jpDZwjVQ2umBrWa2PT3MEAhG2nk' 
});


const uploadCloudinary = async (localFile)=>{
    try {
        if(!localFile) return null;
        const responsse = await cloudinary.uploader.upload(localFile,{
            resource_type:"auto",
        })
        console.log('file is uploaded successfully' ,responsse);
        console.log(responsse.url);
    } catch (error) {
        //  remove the locally saved file when the uploader is failed to upload
        fs.unlinkSync(localFile);
        return null;
    }
}

// cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
//   { public_id: "olympic_flag" }, 
//   function(error, result) {console.log(result); });


export {uploadCloudinary}