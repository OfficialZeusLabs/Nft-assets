"use client";
import EditableSection from "@/common/EditableSection";
import { orbitron } from "@/fonts/fonts";
import {
  setDescription,
  setDiscordId,
  setDiscordLink,
  setEmail,
  setGoalText,
  setTitle,
  setWebsite,
  setWhitepaper,
} from "@/reducers/userSlice";
import { useDispatch } from "react-redux";

export const SectionOneForm = () => {
  const dispatch = useDispatch();

  return (
    <div className="my-10">
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Project Details
      </h2>
      <EditableSection
        title={"Project Title"}
        placeholder={"Title"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setTitle(value));
        }}
      />
      <EditableSection
        title={"Project Description"}
        placeholder={"Description"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setDescription(value));
        }}
        subTitle="Share your project's Pitch, Concept, Utility & Major partners involved."
      />
      <EditableSection
        title={"Whitepaper"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setWhitepaper(value));
        }}
        subTitle="Will be attached to launchpad"
      />
      <EditableSection
        title={"Goal"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setGoalText(value));
        }}
      />
    </div>
  );
};

export const SecondSectionForm = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Project Details
      </h2>
      <EditableSection
        title={"Discord Link"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setDiscordLink(value));
        }}
        subTitle="Will be linked with launchpad"
      />
      <EditableSection
        title={"Project Website"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setWebsite(value));
        }}
        subTitle="Will be linked with launchpad"
      />
      <EditableSection
        title={"Discord ID"}
        placeholder={"UserID:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setDiscordId(value));
        }}
        subTitle="Please provide discord ID of main contact"
      />

      <EditableSection
        title={"Email Address"}
        placeholder={"launchpad@mail.com"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setEmail(value));
        }}
        subTitle="Please provide Email address of main contact"
      />
    </div>
  );
};
