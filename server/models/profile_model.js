import mongoose from "mongoose";

const ProfileSchema = new mongoose.Schema({
    address: String,
    username: String,
    discord: String,
    twitter: String,
    profile_url: String,
    bio: String,
}, { timestamps: true });

const ProfileModel = mongoose.model("Profile", ProfileSchema);

export default ProfileModel;