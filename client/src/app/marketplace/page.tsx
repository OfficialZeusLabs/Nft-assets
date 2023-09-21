"use client";
import TopNavigation from "@/common/navs/top/TopNavigation";
import React, { useState, useEffect } from "react";
import TrendingCollection from "@/components/marketplace/TrendingCollections";
import SearchCollection from "@/components/marketplace/SearchCollection";
import Footer from "@/components/Footer";
import NSMECollection from "@/components/marketplace/NSMECollection";
import TopSellers from "@/components/marketplace/TopSellers";
import { readFactoryContract, readSimpleCollectibleContract } from "@/utils";

const MarketPlace: React.FC = () => {
  const [collections, setCollections] = useState<any[]>([]);
  const [owners, setOwners] = useState<any[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    readFactoryContract("getMarketPlaces").then((res) => {
      console.log(res);
      res.forEach((address: any) => {
        readSimpleCollectibleContract(address, "getData").then((data) => {
          console.log(data);
          setCollections((existingCollections) => [
            ...existingCollections,
            ...data,
          ]);
          readSimpleCollectibleContract(address, "name").then((name) => {
            console.log(name);
            setName(String(name[0]));
            data.forEach((index: any) => {
              console.log(index);
              readSimpleCollectibleContract(address, "getOwners", [
                parseInt(index),
              ]).then((owners) => {
                setOwners(owners);
              });
            });
          });
        });
      });
    });
  }, []);

  return (
    <>
      <TopNavigation />
      <div className="mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
        <SearchCollection />
        <TrendingCollection collections={collections} owners={owners} />
        <NSMECollection collections={collections} owners={owners} />
        <TopSellers />
      </div>
      <Footer />
    </>
  );
};

export default MarketPlace;
