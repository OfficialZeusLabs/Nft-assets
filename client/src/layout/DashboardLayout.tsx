import Button from "@/common/Button";
import TopNavigation from "@/common/navs/top/TopNavigation";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import { orbitron } from "@/fonts/fonts";
import Image from "next/image";
import Link from "next/link";

const DashboardLayout = () => {
    return (
        <>
          <TopNavigation />
          <main className="w-full mt-28">
            <div className="w-[97%] tablet_l:w-[94%] laptop_l:w-[89%]  max-w-[1280px] mx-auto">
              <section className="bg-green- flex flex-col tablet_l:flex-row justify-between items-center mt-6">
                <div className=" my-8 tablet_l:my-0 w-full tablet_l:w-[53%] laptop_l:w-[500px]">
                  <h1
                    className={`${orbitron.className} text-primary text-3xl laptop_l:text-4xl`}
                  >
                    Create and manage your own NFTs, collaborate with consumers.
                  </h1>
                  <p className="mb-10 mt-2 text-white">
                    Easily create and manage your NFTs in one place, Unlock rewards,
                    perks and experiences through digital collections, & Engage
                    directly with consumers. let your NFTs forge connections beyond
                    transactions.
                  </p>
                  <div className="flex gap-8">
                    <Link href="/register">
                      <Button
                        className={`${orbitron.className} text-xl px-8 py-2 bg-gradient-linear`}
                      >
                        Get Started
                      </Button>
                    </Link>
                    <Image src="/images/wallet.svg" alt="" height={45} width={45} />
                  </div>
                </div>
                <div className="w-full tablet_l:w-[50%] laptop_l:w-[45%]">
                  <Image src="/images/Group.svg" alt="" height={500} width={500} />
                </div>
              </section>
    
              <div className="mt-14 mb-28 relative">
                <FAQ />
              </div>
            </div>
    
            <Footer />
            <div className="absolute bottom-0 right-0 bg-gradient-to-br from-transparent via-transparent to-primary opacity-10 w-[30%] h-[500px]    "></div>
          </main>
        </>
      );
}

export default DashboardLayout;