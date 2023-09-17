import mongoose from "mongoose";

const AccountSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: { type: String, required: true },
    whitepaper: String,
    goal: String,
    discord_link: String,
    website: String,
    discord_id: String,
    email: String,
    members: String,
    twitter: String,
    linkedin: String,
    artwork: [String],
    nft_type: {
        type: String,
        enum: ['nft', 'crypto']
    },
    mint_date: String,
    mint_price: Number,
    mint_supply: String,
    marketing_plan: String,
    more_info: String,
    presale: String

}, { timestamps: true });

const AccountModel = mongoose.model("Account", AccountSchema);

export default AccountModel;