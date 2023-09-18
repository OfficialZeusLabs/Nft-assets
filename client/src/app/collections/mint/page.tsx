import TopNavigation from "@/common/navs/top/TopNavigation";
import Footer from "@/components/Footer";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

const Mint = () => {
  return (
    <div className={styles.mint}>
      <TopNavigation />
      <div className={`mx-auto w-[97%] tablet_l:w-[94%] laptop_l:w-[89%] max-w-[1280px] ${styles.mint_details}`}>
        <div className={`w-[30%] ${styles.left}`}>
          {/* <div className='flex '>
        <div className='w-[40%]'> */}
          <Image
            src="/images/nft-2.png"
            alt=""
            height={1000}
            width={1008}
            // style={{ width: "568px", height: "400px" }}
          />
          <div className="mt-4">
            <p>
              FANRT Fac NFTS{" "}
              <Image
                src="/images/badge-check.svg"
                alt=""
                height={30}
                width={30}
              />
            </p>
            <span>0.05 eth</span>
          </div>
        </div>
        <div className={`w-[50%] ${styles.right}`}>
          <div className={styles.package}>
            <h5>Burger Fac NFTs</h5>
            <p>Package ###</p>
          </div>
          <div className={styles.price}>
            <div>
              <span>Price(1)</span>
              <p>0.05 eth</p>
            </div>
            <div>
              <span>You Pay</span>
              <p>0.05 eth</p>
            </div>
          </div>
          <div className={styles.mint_btn}>
            <button className={styles.home_btn}>Mint</button>
            <p>
              By clicking “Mint” you agree to the Nft Factory. Terms of Service.
              Each transaction will incur non-refundable gas fees.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Mint;
