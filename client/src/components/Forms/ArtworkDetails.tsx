"use client";
import React, { useState, useRef } from "react";
import { orbitron } from "@/fonts/fonts";
import DropdownSelect from "@/common/Dropdown";
import EditableSection from "@/common/EditableSection";
import FileUploader from "@/common/FileUploader";
import { poppins } from "@/fonts/fonts";


const ArtworkDetailsForm: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [mintDate, setMintDate] = useState<string | number>("");
  const [mintSupply, setMintSupply] = useState<number>(0);
  const [mintPrice, setMintPrice] = useState<number | string>(0);

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Metadata and Description
      </h2>
      <DropdownSelect
        item={["nft", "crypto"]}
        title={"Metadata and Description "}
        subTitle="Detailed Metadata and Description for the NFT (Title, Description, Tags, Keywords)"
        onChangeHandler={(value: string | number): void => {
          setMintDate(value);
        }}
      />
      <div className={`${poppins.className} mb-5 flex flex-col`}>
        <h2 className=" block text-white text-sm font-bold mb-2">Upload Image</h2>
        <p className="text-sm text-gray-700">Upload Images, Videos, or Audio Files for the NFT</p>
        <FileUploader ref={fileRef} />
      </div>
    </div>
  );
};

export default ArtworkDetailsForm;
