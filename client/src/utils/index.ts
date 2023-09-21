import { readContract as readContractData } from "@wagmi/core";
import { Factory, SimpleCollectible } from "../../constants";

export const readFactoryContract = async (
  functionName: string,
  args: [] = []
) => {
  const data = await readContractData({
    address: Factory.address,
    abi: Factory.abi,
    functionName,
    args,
  });

  return data;
};

export const readSimpleCollectibleContract = async (
  address: `0x${string}`,
  functionName: string,
  args: any[] = []
) => {
  const data = await readContractData({
    address,
    abi: SimpleCollectible.abi,
    functionName,
    args,
  });

  return data;
};

export const getNFTDetails = async () => {};
