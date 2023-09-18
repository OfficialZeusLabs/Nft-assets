import EditableSection from "@/common/EditableSection";
import { orbitron } from "@/fonts/fonts";
import {
  setMarketingPlan,
  setMoreInfo,
  setPresale,
} from "@/reducers/userSlice";
import React from "react";
import { useDispatch } from "react-redux";

const SalesPlanForm: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <h2 className={`${orbitron.className} text-primary text-2xl mb-5`}>
        Sales plan
      </h2>
      <EditableSection
        title={"Marketing Plan"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setMarketingPlan(value));
        }}
        subTitle="Please provide information on project marketing plan"
      />

      <EditableSection
        title={"Are you interested in presale"}
        placeholder={"Start typing"}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setPresale(value));
        }}
        subTitle="This is a tool that allows you to sell prior to mint to help the supporter get access to the project"
      />

      <h1>More Info</h1>
      <EditableSection
        title={""}
        placeholder={""}
        onChangeHandler={(value: string): void => {
          if (!value) {
            value = " ";
          }
          dispatch(setMoreInfo(value));
        }}
        subTitle="Please provide any additional information"
      />
    </div>
  );
};

export default SalesPlanForm;
