"use client"; 

import DashboardLayout from "@/layout/DashboardLayout";
import { setWalletAddress } from "@/reducers/userSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAccount } from "wagmi";

export default function Home() {
  const dispatch = useDispatch();
  const { address, isConnected } = useAccount();

  useEffect(() => {
    if(isConnected){
      console.log(address);
      dispatch(setWalletAddress(address));
    }
  }, []);
  
  return (
    <>
      <DashboardLayout />
    </>
  );
}
