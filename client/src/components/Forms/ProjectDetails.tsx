"use client";
import EditableSection from "@/common/EditableSection";
import { orbitron } from "@/fonts/fonts";
import { setProject, getProject } from "@/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";
import TextArea from "@/common/TextArea";

export const SectionOneForm = () => {
  const dispatch = useDispatch();
  const project = useSelector(getProject);

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
          dispatch(setProject({ ...project, title: value }));
        }}
      />
       <TextArea
        title={"Project Description"}
        placeholder={"Description"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, description: value }));
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
          dispatch(setProject({ ...project, whitepaper: value }));
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
          dispatch(setProject({ ...project, goal: value }));
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
  const dispatch = useDispatch();
  const project = useSelector(getProject);

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
      Business Information
      </h2>
      <EditableSection
        title={"Business Information"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, discord_link: value }));
        }}
        // subTitle="Will be linked with launchpad"
      />
      <EditableSection
        title={"Business Type"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, website: value }));
        }}
        subTitle="Business Type (e.g., Small Business, Microenterprise, Startup)"
      />
      <EditableSection
        title={"Business Registration Number"}
        placeholder={"BS1120589"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, discord_id: value }));
        }}
        subTitle="(if applicable)"
      />

      <EditableSection
        title={" Business Website"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, email: value }));
        }}
        subTitle="(if available)"
      />
      <EditableSection
        title={"Business Location"}
        placeholder={"Lagos, Nigeria"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, email: value }));
        }}
        subTitle="(Address, City, Country)"
      />
    </div>
  );
};
