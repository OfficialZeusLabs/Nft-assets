import { trendingCollection } from "@/data/collection";
import { orbitron } from "@/fonts/fonts";
import CollectionCard from "../CollectionCard";
import Link from "next/link";

const TrendingCollection = () => {
  return (
    <div className="mx-auto">
      <div className="text-center mb-8">
        <h2 className={`${orbitron.className} text-3xl text-white`}>
          Trending Collections
        </h2>
        <p className="text-white">
          Explore series of our regularly updated trending collection for you
        </p>
      </div>
      <div className="w-[64%] mx-auto">
        <div className={`grid grid-cols-3 text-white gap-14 ${orbitron.className}`}>
          {trendingCollection.map(({ title, source }) => (
            <CollectionCard title={title} source={source} >
              <div className="flex justify-between">
                <div className="text-white">
                  <p>Floor</p>
                  <p>0.05 ETH</p>
                </div>
                <div>
                  <p>Total Volume</p>
                  <p>14.1K ETH</p>
                </div>
              </div>
              <Link href="/collections/details">
              <div className="my-6 underline text-center">View Details</div>
              </Link>
            </CollectionCard>
          ))}
        </div>
        <div className="flex justify-end my-8">
          <Link href="/">
            <p className="underline text-white">See more</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCollection;
