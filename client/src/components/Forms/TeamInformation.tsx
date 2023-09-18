"use client";
import TextArea from "@/common/TextArea";
import { orbitron } from "@/fonts/fonts";
import { setTeam, getTeam } from "@/reducers/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const TeamInformationForm: React.FC = () => {
  const dispatch = useDispatch();
  const team = useSelector(getTeam);
  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
      Contact Information
      </h2>
      <EditableSection
        title={"Contact’s Full Name"}
        placeholder={"FullName"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setTeam({ ...team, members: value }));
        }}
        // subTitle="Please provide the names each team member and their roles"
      />
      <EditableSection
        title={"Role/Position"}
        placeholder={"Role"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setTeam({ ...team, twitter: value }));
        }}
        subTitle="Contact Person's Position/Role in the Business"
        // subTitle="Will be linked with launchpad"
      />
      <EditableSection
        title={"Email Address"}
        placeholder={"Launcpad@gmail.com"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setTeam({ ...team, linkedin: value }));
        }}
        // subTitle="Please provide the Linkedin link for each team member"
      />
      <EditableSection
        title={"Phone Number"}
        placeholder={"+234709843792"}
        onChangeHandler={(value: string): void => {
          setLinkedinUrl(value);
        }}
        // subTitle="Please provide the Linkedin link for each team member"
      />

    </div>
  );
};

export default TeamInformationForm;
