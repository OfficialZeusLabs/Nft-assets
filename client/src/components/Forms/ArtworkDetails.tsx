"use client";
import DropdownSelect from "@/common/Dropdown";
import EditableSection from "@/common/EditableSection";
import FileUploader from "@/common/FileUploader";
import { orbitron } from "@/fonts/fonts";
import React, { useRef } from "react";
import { setArtworks, getArtworks } from "@/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { poppins } from "@/fonts/fonts";


const ArtworkDetailsForm: React.FC = () => {
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Metadata and Description
      </h2>
      <FileUploader />
      <DropdownSelect
        item={["nft", "crypto"]}
        title={"Metadata and Description "}
        subTitle="Detailed Metadata and Description for the NFT (Title, Description, Tags, Keywords)"
        onChangeHandler={(value: string | number): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setArtworks({ ...artworks, nft_type: value }));
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
