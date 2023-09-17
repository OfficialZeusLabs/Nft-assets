import TopNavigation from "@/common/navs/top/TopNavigation";
import React from "react";
import TrendingCollection from "@/components/marketplace/TrendingCollections";
import SearchCollection from "@/components/marketplace/SearchCollection";
import Footer from "@/components/Footer";
import NSMECollection from "@/components/marketplace/NSMECollection";
import TopSellers from "@/components/marketplace/TopSellers";
import CollectionCard from "@/components/CollectionCard";
import ColletionHeader from "@/components/ColletionHeader";

const collections: React.FC = () => {
  return (
    <>
      <TopNavigation />
      <div className="mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px]">
        {/* <SearchCollection /> */}
        <ColletionHeader />
        <TrendingCollection />
        <NSMECollection />
        <TopSellers />
      </div>
        <Footer />
    </>
  );
};

export default collections;
