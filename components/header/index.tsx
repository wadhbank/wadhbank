import Image from "next/image";
import { useState } from "react";
import { Button } from "..";
import { IconHamburger, ImageWadhbank } from "../../assets";

const Index = () => {
  const [showMenus, setIsShowMenus] = useState(false);
  return (
    <div className="bg-white-100 transition-all delay-300 border-b border-black-20 px-20 py-7 md:px-4 md:py-4 flex flex-wrap justify-between items-center">
      <div className="flex items-center w-36 xs:w-28">
        <Image src={ImageWadhbank} alt="wadhbank" objectFit="cover" />
      </div>
      <div
        className={`md:order-1 md:w-full md:flex-grow md:${
          showMenus ? "visible" : "invisible"
        }`}
      >
        <ul
          className={`overflow-hidden md:transition-opacity md:duration-300 ease-in list-none flex xxl:gap-14 xl:gap-12 lg:gap-10 flex-1 items-center md:flex-col md:gap-6 md:py-6 md:items-start md:absolute md:w-full md:bg-white-100 md:left-0 md:mt-4 md:px-4 md:border-t md:border-black-20 origin-top ${
            showMenus
              ? "md:max-h-screen md:opacity-100"
              : "md:max-h-0 md:opacity-0"
          }`}
        >
          <li className="">Personal</li>
          <li className="">Business</li>
          <li className="">Student</li>
          <li className="">Private</li>
          <hr className="text-black-30 h-px w-full" />
          <li className="w-full hidden md:block">
            <Button theme="default" size="small" className="w-full">
              Sign up for free
            </Button>
          </li>
        </ul>
      </div>
      <div className="flex gap-4 items-center">
        <Button theme="default" size="small" className="xs:px-2.5 xs:py-3">
          Sign up for free
        </Button>
        <Button
          className="hidden md:block"
          onClick={() => {
            setIsShowMenus(!showMenus);
          }}
        >
          <IconHamburger />
        </Button>
      </div>
    </div>
  );
};

export default Index;
