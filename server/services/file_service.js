import { v2 as cloudinary } from 'cloudinary'
import fs from 'fs';

class FileService {
    static async uploadToCloudinary(imageFile) {
        cloudinary.config({
            cloud_name: process.env.CLOUDINARY_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
            secure: true
        })
        try {
            let uploadImage = await cloudinary.uploader.upload(imageFile);
            let uploadedImage = await uploadImage.secure_url;
            return uploadedImage;
        }
        catch (error) {
            console.error(error);
        }
    }

    static unlinkFileSync(filePath) {
        try {
            fs.unlinkSync(filePath);
        } catch (err) {
            console.error(`Error deleting file: ${err.message}`);
        }
    };
}

export default FileService;