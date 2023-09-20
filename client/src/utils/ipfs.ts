import { Web3Storage } from "web3.storage";

export const uploadToIPFS = async (files: FileList | null) => {
  const client = await new Web3Storage({ token: process.env.WEB3_STORAGE_KEY });

  const rootCid = await client.put(files);
  console.log(rootCid);
};
