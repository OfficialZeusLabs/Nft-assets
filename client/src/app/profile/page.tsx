"use client";

import { useState, useEffect } from "react";
import { orbitron, poppins } from "@/fonts/fonts";
import Image from "next/image";
import React from "react";
import TopNavigation from "@/common/navs/top/TopNavigation";
import profile from "@/assets/images/profile.png";
import Card from "@/common/card";
import SideBar from "@/common/navs/side/SideNavigation";
import { AiOutlineMenu } from "react-icons/ai";
import ProfileSideBar from "@/common/navs/side/ProfileSidebar";
import { readFactoryContract, readSimpleCollectibleContract } from "@/utils";
import { useAccount } from "wagmi";
import axios from "axios";

const Profile: React.FC = () => {
  const { address, isConnected } = useAccount();
  const [Open, setOpen] = useState(true);
  const [name, setName] = useState("");
  const [mintFee, setMintFee] = useState<number[]>([]);
  const [images, setImages] = useState<string[]>([]);

  const menuNav = () => {
    setOpen(!Open);
  };

  useEffect(() => {
    readFactoryContract("getMarketPlaces").then((res) => {
      console.log(res);
      res.forEach((contractAddress: any) => {
        readSimpleCollectibleContract(contractAddress, "getData", [
          address,
        ]).then((data) => {
          readSimpleCollectibleContract(contractAddress, "name").then(
            (name) => {
              name && setName(String(name));
              data &&
                typeof data === "object" &&
                data.forEach((response: any, i) => {
                  console.log(response, response.uri);
                  setMintFee((existingCollections) => [
                    ...existingCollections,
                    parseFloat(response.mintFee) / 10 ** 18,
                  ]);
                  axios.get(response.uri).then((axiosResponse) => {
                    console.log(axiosResponse);
                    setImages((existingImages) => [
                      ...existingImages,
                      axiosResponse.data.image,
                    ]);
                  });
                });
            }
          );
        });
      });
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <div
        className={
          Open
            ? "flex flex-row gap-10  min-h-screen"
            : " flex flex-row min-h-screen gap-0"
        }
      >
        <div
          className={
            Open
              ? "w-[11rem] laptop:w-[15rem] h-screen"
              : "relative w-[0rem]  h-screen"
          }
        >
          {Open ? (
            <ProfileSideBar menuNav={menuNav} />
          ) : (
            <div className="absolute top-16 cursor-pointer" onClick={menuNav}>
              <AiOutlineMenu className="h-6 w-6 items-center" />
            </div>
          )}
        </div>
        {/* <div className={`${orbitron.className} px-10 mt-20`}> */}
        <div
          className={
            Open
              ? "mr-auto w-[70%] py-10 mt-20"
              : "w-[97%] mt-20 tablet_l:w-[94%] laptop_l:w-[89%]  max-w-[1280px] mx-auto py-10 "
          }
        >
          <div
            className="flex flex-col"
            style={{
              background:
                "linear-gradient(180deg, rgba(0, 0, 0, 0.47) 0%, rgba(10, 4, 9, 1) 100%)",
            }}
          >
            <Image
              src={profile}
              alt="user img_profile"
              className="rounded-full mb-4"
              height={150}
              width={150}
            />
            <div
              className={`${poppins.className} flex justify-between items-center`}
            >
              <p className="text-2xl font-light">Username</p>
              <div className="flex flex-row gap-2">
                <Image
                  src="/pen-edit.svg"
                  alt="edit-profile"
                  height={20}
                  width={20}
                />
                <span className="text-primary">Edit Profile</span>
              </div>
            </div>
            <div className="flex gap-4 mt-5">
              {["/discord.svg", "/twitter.svg"].map((item) => (
                <Image
                  key={item}
                  src={`${item}`}
                  alt="social icon"
                  height={30}
                  width={30}
                  style={{ cursor: "pointer" }}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 w-3/4">
            <h2 className="text-2xl mb-4">My Collections</h2>
            <p className="text-primary mt-3 mb-2">
              Unredeemed NFTs ({mintFee.length})
            </p>
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
              {mintFee.map((fee, i) => (
                <Card
                  key={i}
                  source={images[i]}
                  title={name}
                  price={`${fee} ETH`}
                />
              ))}
            </div>
          </div>
          <div className="mt-14 w-3/4">
            <p className="text-primary mt-3 mb-2">
              Redeemed Nfts ({mintFee.length})
            </p>
            <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-6">
              {mintFee.map((fee, i) => (
                <Card
                  key={i}
                  source={images[i]}
                  title={name}
                  price={`${fee} ETH`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
