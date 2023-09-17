const mongoose = require("mongoose");

const ContractSchema = new mongoose.Schema({
    owner_id: String,
    contract_address: String,
}, { timestamps: true });

const ContractModel = mongoose.model("Contract", ContractSchema);
export default ContractModel;
