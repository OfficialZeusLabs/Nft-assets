import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    brand_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true
    },
    username: String,
    address: String
}, { timestamps: true });

const AccountModel = mongoose.model("Account", AccountSchema);

export default AccountModel;