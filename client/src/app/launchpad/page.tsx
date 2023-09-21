"use client";

import { useState } from "react";
import Button from "@/common/Button";
import SideBar from "@/common/navs/side/SideNavigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Apply from "./apply/page";
import NavTools from "@/common/navs/NavTools";
import { AiOutlineMenu } from "react-icons/ai";
import { WagmiConfig } from "wagmi";
import { wagmiConfig } from "@/providers/walletconnect";

const LaunchPad = () => {
  const [Open, setOpen] = useState(true);

  const menuNav = () => {
    setOpen(!Open);
  };
  return (
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
          <SideBar menuNav={menuNav} />
        ) : (
          <div
            className="absolute text-white top-11 cursor-pointer"
            onClick={menuNav}
          >
            <AiOutlineMenu className="h-6 text-white w-6 items-center" />
          </div>
        )}
      </div>
      <div
        className={
          Open
            ? "mr-auto w-[70%] py-10"
            : "w-[97%] tablet_l:w-[94%] laptop_l:w-[89%]  max-w-[1280px] mx-auto py-10 "
        }
      >
        <NavTools title="Launchpad" isMenu={true} />

        <WagmiConfig config={wagmiConfig}>
          <Apply />
        </WagmiConfig>
      </div>
    </div>
  );
};

export default LaunchPad;
