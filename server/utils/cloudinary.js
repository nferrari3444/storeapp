const dotenv = require("dotenv")
const cloudinaryModule = require("cloudinary")

dotenv.config()
const cloudinary = cloudinaryModule.v2

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

// Configuration 
// cloudinary.config({
//     cloud_name: "dtahqmzan",
//     api_key: "722351665611423",
//     api_secret: "zQb0d43wdKn058v6C5HqQ24wb0A"
//   });

  
module.exports = cloudinary

// cloudinary.config({
//     cloud_name: "dtahqmzan",
//     api_key: "722351665611423",
//     api_secret: "zQb0d43wdKn058v6C5HqQ24wb0A"
//   });