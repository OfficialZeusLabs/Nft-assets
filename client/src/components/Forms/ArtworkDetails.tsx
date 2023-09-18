"use client";
import DropdownSelect from "@/common/Dropdown";
import EditableSection from "@/common/EditableSection";
import FileUploader from "@/common/FileUploader";
import { orbitron } from "@/fonts/fonts";
import React, { useRef } from "react";
import {
  setArtworks, 
  getArtworks
} from "@/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

const ArtworkDetailsForm: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();
  const artworks = useSelector(getArtworks);

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Artwork Details
      </h2>
      <FileUploader ref={fileRef} />
      <DropdownSelect
        item={["nft", "crypto"]}
        title={"NFT Type"}
        subTitle="Select NFT type"
        onChangeHandler={(value: string | number): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setArtworks({...artworks, nft_type: value}));
        }}
      />
      <EditableSection
        title={"Mint Date"}
        placeholder={"Placeholder"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setArtworks({...artworks, mint_date: value}));
        }}
        subTitle="Please provide expected NFT minting date"
      />
      <DropdownSelect
        item={["100", "200", "300"]}
        title={"Mint Price"}
        subTitle="Please share your best estimate"
        onChangeHandler={(value: string | number): void => {
          dispatch(setArtworks({...artworks, mint_price: value}));
        }}
      />
      <EditableSection
        title={"Mint Supply"}
        placeholder={"123456"}
        onChangeHandler={(value: string): void => {
          dispatch(setArtworks({...artworks, mint_supply: parseInt(value)}));
        }}
      />
    </div>
  );
};

export default ArtworkDetailsForm;
