"use client";
import Button from "@/common/Button";
import ArtworkDetailsForm from "@/components/Forms/ArtworkDetails";
import GetStarted from "@/components/Forms/GetStarted";
import {
  SecondSectionForm,
  SectionOneForm,
} from "@/components/Forms/ProjectDetails";
import SalesPlanForm from "@/components/Forms/SalesPlan";
import TeamInformationForm from "@/components/Forms/TeamInformation";
import React, { useState } from "react";
import { toast } from "react-toastify";
import {
  getTitle,
  getDescription,
  getDiscordId,
  getDiscordLink,
  getGoalText,
  getEmail,
  getLinkedinUrl,
  getMarketingPlan,
  getMintDate,
  getMembers,
  getMintPrice,
  getMintSupply,
  getMoreInfo,
  getNftType,
  getPreSale,
  getTwitterUrl,
  getWebsite,
  getWhitepaper,
} from "@/reducers/userSlice";
import { useSelector } from "react-redux";

const Apply: React.FC = () => {
  const title = useSelector(getTitle);
  const description = useSelector(getDescription);
  const email = useSelector(getEmail);
  //   title: {
  // description: { type: String, required: true },
  // whitepaper: String,
  // goal: String,
  // discord_link: String,
  // website: String,
  // discord_id: String,
  // email: String,
  // members: String,
  // twitter: String,
  // linkedin: String,
  // artwork: [String],
  // nft_type: {
  // mint_date: String,
  // mint_price: Number,
  // mint_supply: String,
  // marketing_plan: String,
  // more_info: String,
  // presale: String
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    if (currentPage < 6) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    if (currentPage >= 6) {
      console.log("submitting file");
      const requestBody = {
        title,
        description,
        email,
      };
    }
  };

  const isLastPage = currentPage === 6;

  const previewCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <GetStarted nextPage={handleNextPage} />;
      case 2:
        return <SectionOneForm />;
      case 3:
        return <SecondSectionForm />;
      case 4:
        return <TeamInformationForm />;
      case 5:
        return <ArtworkDetailsForm />;
      case 6:
        return <SalesPlanForm />;
      default:
        return;
    }
  };
  return (
    <div className="flex flex-col justify-start h-screen mt-10 mb-10">
      {/* <form encType="multipart/form-data" onSubmit={handleSubmit}> */}
      <div className="w-4/5">{previewCurrentPage()}</div>
      {currentPage > 1 && (
        <div className="flex justify-end w-4/5 mt-5">
          <Button
            handleClick={handleNextPage}
            className="bg-gradient-linear px-6 py-3"
          >
            {isLastPage ? <p>Submit</p> : <p> Proceed</p>}
          </Button>
        </div>
      )}
      {/* </form> */}
    </div>
  );
};

export default Apply;
