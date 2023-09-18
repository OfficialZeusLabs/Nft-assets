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
import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { UserInterface } from "@/interfaces/user_interface";
import Endpoints from "@/http/endpoints";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
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
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const title = useSelector(getTitle);
  const description = useSelector(getDescription);
  const email = useSelector(getEmail);

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
        email
      }
      setLoading(true);
      axios
      .post(Endpoints.LAUNCHPAD_CREATE_PACKAGE, requestBody)
      .then((response) => {
        setLoading(false);
        let message = response?.data?.message;
        toast.success(message, {theme: 'colored'});
        router.push('/marketplace', {scroll: false});
      })
      .catch((error) => {
        let message = error?.response?.data?.error;
        toast.error(message, {theme: 'colored'});
        setLoading(false);
      });
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
      <div className="w-[98%] ">{previewCurrentPage()}</div>
      {currentPage > 1 && (
        <div className="flex justify-end mt-5">
          <Button
            handleClick={handleNextPage}
            className="bg-gradient-linear px-6 py-3"
          >
            {isLastPage ? 
            loading ?  <ClipLoader color="text-white"/> : 
            <p>Submit</p>
            : <p> Proceed</p>}
          </Button>
        </div>
      )}
    </div>
  );
};

export default Apply;
