import TopNavigation from "@/common/navs/top/TopNavigation";
import React from "react";
import TrendingCollection from "@/components/marketplace/TrendingCollections";
import SearchCollection from "@/components/marketplace/SearchCollection";
import Footer from "@/components/Footer";
import NSMECollection from "@/components/marketplace/NSMECollection";
import TopSellers from "@/components/marketplace/TopSellers";

const MarketPlace: React.FC = () => {
  return (
    <>
      <TopNavigation />
      <div className="mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
        <SearchCollection />
        <TrendingCollection />
        <NSMECollection />
        <TopSellers />
      </div>
        <Footer />
    </>
  );
};

export default MarketPlace;
