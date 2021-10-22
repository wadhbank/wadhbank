import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { Button } from "..";
import { IconHamburger, ImageWadhbank } from "../../assets";
import URL from "../../configs/baseUrl";

const Index = () => {
  const router = useRouter();
  const { pathname } = router;
  const [showMenus, setIsShowMenus] = useState(false);

  const menus = [
    {
      to: URL.LANDING,
      label: "Personal",
    },
    {
      to: URL.BUSINESS,
      label: "Business",
    },
    {
      to: URL.STUDENT,
      label: "Student",
    },
    {
      to: URL.PRIVATE,
      label: "Private",
    },
  ];

  return (
    <div className="sticky top-0 w-full z-40">
      <div className="bg-white-100 transition-all duration-300 border-b border-black-20 px-20 py-7 md:px-4 md:py-4 flex flex-wrap justify-between items-center">
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
            {menus.map((item) => {
              return (
                <li
                  key={item?.to}
                  className={`prose-small-medium md:prose-normal-medium cursor-pointer  ${
                    pathname === item?.to ? "text-black-100" : "text-black-60"
                  } hover:text-black-100`}
                >
                  <Link href={item?.to}>{item?.label}</Link>
                </li>
              );
            })}
            <hr className="text-black-30 h-px w-full" />
            <li className="w-full hidden md:block">
              <Button theme="default" size="small" className="w-full">
                Sign up for free
              </Button>
            </li>
          </ul>
        </div>
        <div className="flex gap-4 items-center">
          <Button
            theme="default"
            size="small"
            className="xs:px-2.5 xs:py-3 xs:prose-extra-small-bold"
          >
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
    </div>
  );
};

export default Index;
