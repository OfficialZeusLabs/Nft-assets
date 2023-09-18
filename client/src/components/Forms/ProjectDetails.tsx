"use client";
import { orbitron } from "@/fonts/fonts";
import EditableSection from "@/common/EditableSection";
import { useState } from "react";
import TextArea from "@/common/TextArea";

export const SectionOneForm = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [whitePaperText, setWhitePaperText] = useState<string>("");
  const [goalText, setGoalText] = useState<string>("");

  return (
    <div className="my-10">
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Project/Service Details
      </h2>
      <EditableSection
        title={"Project Title"}
        placeholder={"Title"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          setTitle(value);
        }}
      />
       <TextArea
        title={"Project Description"}
        placeholder={"Description"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          setDescription(value);
        }}
        subTitle="Brief Description of the Product/Service to be Minted as NFT"
      />
     
      <EditableSection
        title={"Product Category"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          setWhitePaperText(value);
        }}
        subTitle="Category (e.g Fashion, Food, Art, Digital Collectibles, Music, Digital Goods, Handyman)"
      />
      <EditableSection
        title={"Unique Features or Selling Points"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          setGoalText(value);
        }}
      />
      <EditableSection
        title={"Blockchain"}
        placeholder={"Ethereum"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          setWhitePaperText(value);
        }}
        subTitle="Preferred Blockchain for Minting (Ethereum, Binance Smart Chain, etc.)"
      />
    </div>
  );
};

export const SecondSectionForm = () => {
  const [discordLink, setDiscordLink] = useState<string>("");
  const [website, setWebsite] = useState<string>("");
  const [discordID, setDiscordID] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
      Business Information
      </h2>
      <EditableSection
        title={"Business Information"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          setDiscordLink(value);
        }}
        // subTitle="Will be linked with launchpad"
      />
      <EditableSection
        title={"Business Type"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          setWebsite(value);
        }}
        subTitle="Business Type (e.g., Small Business, Microenterprise, Startup)"
      />
      <EditableSection
        title={"Business Registration Number"}
        placeholder={"BS1120589"}
        onChangeHandler={(value: string): void => {
          setDiscordID(value);
        }}
        subTitle="(if applicable)"
      />

      <EditableSection
        title={" Business Website"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          setEmail(value);
        }}
        subTitle="(if available)"
      />
      <EditableSection
        title={"Business Location"}
        placeholder={"Lagos, Nigeria"}
        onChangeHandler={(value: string): void => {
          setEmail(value);
        }}
        subTitle="(Address, City, Country)"
      />
    </div>
  );
};
