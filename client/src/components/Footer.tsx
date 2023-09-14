import Logo from "@/common/Logo";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import {SiOpensea} from "react-icons/si"
const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "3rem 5rem",
        background:
          "linear-gradient(134deg, rgba(255, 199, 44, 0.16) 0%, rgba(255, 199, 44, 0.00) 100%)",
      }}
    >
      <div className="md:mb-5 max-w-screen-xl  mx-auto px-4">
        <Logo height={50} />
      </div>
      <div className="mt-2 max-w-screen-xl mx-auto px-4">
        <h5 className="text-md text-primary">Socials</h5>
        <div className="mt-2 flex gap-3">
  <div className="flex items-center">
    <BsDiscord color="white" size={24} />
    <span className="text-white ml-4">Discord</span>
  </div>
  <div className="flex items-center">
    <SiOpensea color="white" size={24} />
    <span className="text-white ml-4">Open sea</span>
  </div>
  <div className="flex items-center">
    <BsTwitter color="white" size={24} />
    <span className="text-white ml-4">Twitter</span>
  </div>
</div>

        <p className="text-white">nftfactory2@gmail.com</p>
      </div>
    </div>
  );
};

export default Footer;
