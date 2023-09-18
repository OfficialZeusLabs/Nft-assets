"use client";
import EditableSection from "@/common/EditableSection";
import { orbitron } from "@/fonts/fonts";
import { setProject, getProject } from "@/reducers/userSlice";
import { useDispatch, useSelector } from "react-redux";

export const SectionOneForm = () => {
  const dispatch = useDispatch();
  const project = useSelector(getProject);

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
          dispatch(setProject({ ...project, title: value }));
        }}
      />
      <EditableSection
        title={"Project Description"}
        placeholder={"Description"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, description: value }));
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
          dispatch(setProject({ ...project, whitepaper: value }));
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
          dispatch(setProject({ ...project, goal: value }));
        }}
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
        Project Details
      </h2>
      <EditableSection
        title={"Discord Link"}
        placeholder={"https:###"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setProject({ ...project, discord_link: value }));
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
          dispatch(setProject({ ...project, website: value }));
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
          dispatch(setProject({ ...project, discord_id: value }));
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
          dispatch(setProject({ ...project, email: value }));
        }}
        subTitle="Please provide Email address of main contact"
      />
    </div>
  );
};
