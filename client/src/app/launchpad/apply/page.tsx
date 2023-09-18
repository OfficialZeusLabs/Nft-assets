"use client";
import Button from "@/common/Button";
import ArtworkDetailsForm from "@/components/Forms/ArtworkDetails";
import GetStarted from "@/components/Forms/GetStarted";
import Minting from "@/components/Forms/Social";
import Onborading from "@/components/Forms/Onborading";
import {
  SecondSectionForm,
  SectionOneForm,
} from "@/components/Forms/ProjectDetails";
import SalesPlanForm from "@/components/Forms/Minting";
import TeamInformationForm from "@/components/Forms/TeamInformation";
import React, { useState, useEffect } from "react";
import Social from "@/components/Forms/Social";
import { toast } from "react-toastify";
import Endpoints from "@/http/endpoints";
import axios from "axios";
import { useRouter } from "next/navigation";
import { ClipLoader } from "react-spinners";
import {
  getProject,
  getSales,
  getArtworks,
  getTeam,
} from "@/reducers/userSlice";
import { useSelector } from "react-redux";

const Apply: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const project = useSelector(getProject);
  const sales = useSelector(getSales);
  const team = useSelector(getTeam);
  const artworks = useSelector(getArtworks);

  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    if (currentPage < 8) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    if (currentPage >= 6) {
      const requestBody = {
        ...project,
        ...team,
        ...sales,
        ...artworks,
      };
      setLoading(true);
      axios
        .post(Endpoints.LAUNCHPAD_CREATE_PACKAGE, requestBody)
        .then((response) => {
          setLoading(false);
          let message = response?.data?.message;
          toast.success(message, { theme: "colored" });
          router.push("/marketplace", { scroll: false });
        })
        .catch((error) => {
          let message = error?.response?.data?.error;
          toast.error(message, { theme: "colored" });
          setLoading(false);
        });
    }
  };
  const isLastPage = currentPage === 6;

  const previewCurrentPage = () => {
    switch (currentPage) {
      case 1:
        return <Onborading nextPage={handleNextPage} />;
      case 2:
        return <GetStarted nextPage={handleNextPage} />;
      case 3:
        return <SectionOneForm />;
      case 4:
        return <SecondSectionForm />;
      case 5:
        return <TeamInformationForm />;
      case 6:
        return <ArtworkDetailsForm />;
      case 7:
        return <Minting />;
      case 8:
        return <Social />;
      default: 
        return;
    }
  };
  return (
    <div className="flex flex-col justify-start h-screen mt-10 mb-10">
      <div className="w-[98%] ">{previewCurrentPage()}</div>
      {currentPage > 2 && (
        <div className="w-[98%] flex justify-end mt-5">
          {isLastPage ? (
            <Button
              handleClick={handleNextPage}
              className="bg-gradient-linear px-6 mb-5 py-3"
            >
              <p>Submit</p>
            </Button>
          ) : (
            <Button
              handleClick={handleNextPage}
              className="bg-gradient-linear px-6 mb-5 py-3"
            >
              <p> Proceed</p>
            </Button>
          )}
        </div>
      )}
    </div>
  );
};

export default Apply;
