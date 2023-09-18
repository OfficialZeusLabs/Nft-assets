"use client";
import TextArea from "@/common/TextArea";
import { orbitron } from "@/fonts/fonts";
import {
  setLinkedinUrl,
  setMembers,
  setTwitterUrl,
} from "@/reducers/userSlice";
import React from "react";
import { useDispatch } from "react-redux";

const TeamInformationForm: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Team Information
      </h2>
      <TextArea
        title={"Members & their Roles"}
        placeholder={"Start Typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setMembers(value));
        }}
        subTitle="Please provide the names each team member and their roles"
      />
      <TextArea
        title={"Twitter"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          setTwitterUrl(value);
        }}
        subTitle="Please provide the twitter link for each team member"
      />
      <TextArea
        title={"LinkedIn"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setLinkedinUrl(value));
        }}
        subTitle="Please provide the Linkedin link for each team member"
      />
    </div>
  );
};

export default TeamInformationForm;
