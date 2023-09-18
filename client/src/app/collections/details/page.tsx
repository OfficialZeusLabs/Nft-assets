"use client";
import { orbitron } from "@/fonts/fonts";
import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Details = () => {
  const router = useRouter();

  const Mint = () => {
    router.push("/collections/mint");
  };

  return (
    <div className={styles.details}>
      <TopNavigation />
      <div className="max-w-screen-xl mx-auto px-4">
        <div className={styles.about_top}>
          <div className=" ">
            <Image
              src="/images/NFT4.svg"
              alt=""
              height={1700}
              width={1700}
              //   style={{ width: '568px', height: '400px' }}
            />
            <p className="text-white flex">
              FANRT Fac NFTS{" "}
              <Image
                src="/images/badge-check.svg"
                alt=""
                height={25}
                width={25}
              />
            </p>
          </div>
          <div className="text-white max-w-screen-xl mx-auto px-4">
            <h4 className={`${orbitron.className} text-xl font-bold mb-4`}>
              About Collection
            </h4>
            <div className="w-3/4">
              <p className="mb-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laudantium est quia illo nisi, cumque laborum vero quae maxime
                ratione nulla veniam, perferendis recusandae. Temporibus, minus
                sunt nobis asperiores qui iure.
              </p>
            </div>
            <ul className="list-disc ml-6 mb-4">
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
              <li>Benefit of Feature</li>
            </ul>
          </div>
        </div>
        <div className={styles.about_bottom}>
          <p>Product/Package type</p>
          <span className={styles.line}></span>
          <div>
            <p>
              Unique Owners
              <span>120 Owners</span>
            </p>
            <p>
              Mint price <span>0.05 eth</span>
            </p>
            <button className={styles.home_btn} onClick={Mint}>
              Mint
            </button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <Footer />
      </div>
    </div>
  );
};

export default Details;
