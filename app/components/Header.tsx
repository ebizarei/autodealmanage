import Link from "next/link";
import clsx from "clsx";
import React from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import WhatsappNumber from "./WhatsappNumber";

const menus = [
  "services",
  "institutional",
  "personalized-travel",
  "health-tourism",
  "special-tours",
];
const Header: React.FC = () => {
  const { t } = useTranslation("common");
  const [open, setOpen] = React.useState(false);
  return (
    <nav className="sticky top-0 bg-gray-400/80 backdrop-blur-sm z-50 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <Image
            src="/assets/images/logo.png"
            width={100}
            height={100}
            alt="logo"
            className="w-[100px] md:w-[100px]"
          />
        </Link>
        {/* <div className="flex md:hidden text-sm text-white gap-2 bg-black py-2 px-3 rounded-3xl">
          <Image src="/assets/svg/call.svg" width={20} height={20} alt="call" />{" "}
          <div>02123003366</div>
        </div> */}
        <WhatsappNumber  className="flex md:hidden text-sm text-white gap-2 bg-black py-2 px-3 rounded-3xl"/>
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          onClick={() => setOpen(!open)}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={clsx("w-full md:block md:w-auto mr-auto pl-20", {
            hidden: !open,
          })}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4  rounded-lg  md:flex-row md:space-x-16  md:mt-0 ">
            {menus.map((x) => {
              return (
                <li key={x} className="mb-1">
                  <a
                    href={`#${x}`}
                    className="block py-2 px-3 text-black md:text-black bg-white rounded md:bg-transparent  md:p-0"
                    aria-current="page"
                  >
                    {t(x)}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
        <WhatsappNumber className="hidden md:flex text-white gap-2 bg-black py-3 px-4 rounded-3xl" />
      </div>
    </nav>
  );
};
export default Header;
