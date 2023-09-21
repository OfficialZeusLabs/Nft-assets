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
import { useDebounce } from "use-debounce";
import {
  usePrepareContractWrite,
  useContractWrite,
  useWaitForTransaction,
} from "wagmi";
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
  getSocial,
} from "@/reducers/userSlice";
import { useSelector } from "react-redux";
import { Factory } from "../../../../constants";

const Apply: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const project = useSelector(getProject);
  const sales = useSelector(getSales);
  const team = useSelector(getTeam);
  const artworks = useSelector(getArtworks);
  const socials = useSelector(getSocial);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const debouncedTitle = useDebounce(project?.title, 500);
  const debouncedPrice = useDebounce(artworks?.price, 500);
  console.log(
    typeof debouncedPrice === "string" ? parseInt(String(debouncedPrice)) : 0
  );

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    address: Factory.address,
    abi: Factory.abi,
    functionName: "deploy",
    args: [
      debouncedTitle,
      typeof debouncedTitle === "string"
        ? String(debouncedTitle).substring(0, 3).toUpperCase()
        : null,
      // This should be the metadata, but since they can't specify details of each NFT, we use existing
      [
        "https://bafybeibnsjbky2l2iphqw4rix5frpae3sceexoqmzseb6wt7wj3ntu2k6a.ipfs.dweb.link/1.json",
        "https://bafybeibnsjbky2l2iphqw4rix5frpae3sceexoqmzseb6wt7wj3ntu2k6a.ipfs.dweb.link/2.json",
        "https://bafybeibnsjbky2l2iphqw4rix5frpae3sceexoqmzseb6wt7wj3ntu2k6a.ipfs.dweb.link/3.json",
      ],
      // They should be able to set the prices for the various NFTs, but for now, one for all
      [
        typeof debouncedPrice === "string"
          ? parseInt(String(debouncedPrice))
          : 0,
        typeof debouncedPrice === "string"
          ? parseInt(String(debouncedPrice))
          : 0,
        typeof debouncedPrice === "string"
          ? parseInt(String(debouncedPrice))
          : 0,
      ],
    ],
  });
  const { data, error, isError, write } = useContractWrite(config);

  const { isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  });

  const handleNextPage = () => {
    if (currentPage < 7) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
    if (currentPage >= 7) {
      setLoading(true);
      write?.();
    }
  };

  useEffect(() => {
    if (isSuccess) {
      const requestBody = {
        ...project,
        ...team,
        ...sales,
        ...artworks,
        ...socials,
      };
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
    } else if (isPrepareError || isError) {
      toast.error(prepareError?.message || error?.message, {
        theme: "colored",
      });
    }
  }, [isSuccess, isError, isPrepareError]);
  const isLastPage = currentPage === 7;

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
