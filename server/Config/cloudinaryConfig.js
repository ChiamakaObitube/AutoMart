import cloudinary from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  url: process.env.CLOUDINARY_URL,
});

const cloudinaryImage = (req, res, next) => {
  cloudinary.v2.uploader.upload(req.file.path, (error, result) => {
    req.body.image_url = result.secure_url;
    return next();
  });
};

export default cloudinaryImage;
