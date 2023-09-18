import EditableSection from "@/common/EditableSection";
import { orbitron } from "@/fonts/fonts";
import { setSales, getSales } from "@/reducers/userSlice";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const SalesPlanForm: React.FC = () => {
  const dispatch = useDispatch();
  const sales = useSelector(getSales);
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
          dispatch(setSales({ ...sales, marketing_plan: value }));
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
          dispatch(setSales({ ...sales, presale: value }));
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
          dispatch(setSales({ ...sales, more_info: value }));
        }}
        subTitle="Please provide any additional information"
      />
    </div>
  );
};

export default SalesPlanForm;
