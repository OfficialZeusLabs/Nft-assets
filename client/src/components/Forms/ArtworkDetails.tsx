"use client";
import DropdownSelect from "@/common/Dropdown";
import EditableSection from "@/common/EditableSection";
import FileUploader from "@/common/FileUploader";
import { orbitron } from "@/fonts/fonts";
import React, { useRef } from "react";
import {
  setMintDate,
  setMintSupply,
  setNftType,
  setMintPrice,
} from "@/reducers/userSlice";
import { useDispatch } from "react-redux";

const ArtworkDetailsForm: React.FC = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const dispatch = useDispatch();

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
          dispatch(setMintDate(value));
        }}
      />
      <EditableSection
        title={"Mint Date"}
        placeholder={"Placeholder"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setMintDate(value));
        }}
        subTitle="Please provide expected NFT minting date"
      />
      <DropdownSelect
        item={["100", "200", "300"]}
        title={"Mint Price"}
        subTitle="Please share your best estimate"
        onChangeHandler={(value: string | number): void => {
          dispatch(setMintPrice(value));
        }}
      />
      <EditableSection
        title={"Mint Supply"}
        placeholder={"123456"}
        onChangeHandler={(value: string): void => {
          dispatch(setMintSupply(parseInt(value)));
        }}
      />
    </div>
  );
};

export default ArtworkDetailsForm;
