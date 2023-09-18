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
import React, { useState } from "react";
import Social from "@/components/Forms/Social";

const Apply: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleNextPage = () => {
    if (currentPage < 8) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const isLastPage = currentPage === 8;

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
      default:
        return <Social />;
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
