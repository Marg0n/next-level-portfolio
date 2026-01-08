"use client";
import React, { useState } from "react";

//* react icons
import { GoHome, GoProjectSymlink, GoSidebarCollapse } from "react-icons/go";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { CiCalendar, CiLogout } from "react-icons/ci";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import { FcBusinessman } from "react-icons/fc";
// import { IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import Pic from "@/assets/images/SMD.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const DashboardSidebar: React.FC = () => {
  //* states
  const [isCollapse1, setIsCollapse1] = useState<boolean>(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(true);

  //* constants
  const name = "Sokhorio Margon D' Costa";

  //* route
  const router = useRouter();

  const handleLogout = () => {
    //? logout logic needed (e.g., clearing cookies, session storage, etc.)

    router.push("/login");
  };

  //* Projects lists
  const listOfProjects = (
    <>
      <li className="hover:bg-blue-300 dark:hover:bg-slate-800/50 px-[10px] py-[5px] rounded-md cursor-pointer">
        Google
      </li>
      <li className="hover:bg-blue-300 dark:hover:bg-slate-800/50 px-[10px] py-[5px] rounded-md cursor-pointer">
        Facebook
      </li>
      <li className="hover:bg-blue-300 dark:hover:bg-slate-800/50 px-[10px] py-[5px] rounded-md cursor-pointer">
        Twitter
      </li>
      <li className="hover:bg-blue-300 dark:hover:bg-slate-800/50 px-[10px] py-[5px] rounded-md cursor-pointer">
        Linkedin
      </li>
    </>
  );

  return (
    <aside className="transition-all duration-300 ease bg-white justify-between pt-2 h-full flex flex-col">
      {/* Contents */}
      <div className="">
        <div
          className={`mt-0 ${
            isCollapse1 ? "px-[20px]" : "px-[10px]"
          } transition-all duration-300 ease-in-out flex-1`}
        >
          {isCollapse1 ? (
            <div className="flex items-center justify-between">
              {/* <Image
              src={Pic}
              alt="logo"
              className="w-[130px] cursor-pointer"
              width={500}
              height={500}
            /> */}

              {/* title */}
              <h3 className="text-xl font-serif font-bold">
                Portfolio Dashboard
              </h3>

              {/* toggle */}
              <div className="relative group">
                <GoSidebarCollapse
                  className="text-[1.5rem] dark:text-[#abc2d3] text-gray-600 cursor-pointer"
                  onClick={() => setIsCollapse1(false)}
                />
                <div className="absolute -top-1 right-[-115px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                  <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                    Collapse
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <Image
              src={Pic}
              alt="logo"
              className="w-20 h-20 mx-auto rounded-full cursor-pointer object-contain border-2 border-indigo-400 bg-green-200"
              onClick={() => setIsCollapse1(!isCollapse1)}
              width={500}
              height={500}
            />
          )}

          {/* Search bar */}
          {isCollapse1 ? (
            <div className="relative mt-5">
              <input
                className="px-4 py-2 dark:border-slate-700 dark:bg-transparent dark:text-[#abc2d3] dark:placeholder:text-slate-500 border border-border rounded-md w-full pl-[40px] outline-none focus:border-[#3B9DF8]"
                placeholder="Search..."
              />
              <IoIosSearch className="absolute top-[9px] left-2 text-[1.5rem] text-[#adadad]" />
            </div>
          ) : (
            <div className="w-full relative group">
              <IoIosSearch className="text-[2rem] dark:hover:bg-slate-800/50 dark:text-[#abc2d3] mx-auto text-gray-500 mt-2 p-[5px] rounded-md hover:bg-gray-100 cursor-pointer w-full" />
              <div className="absolute top-0 right-[-85px] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500">
                <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
                  Search
                </p>
              </div>
            </div>
          )}
        </div>

        {/* options */}
        {/* General section */}
        <div
          className={`mt-6 ${
            isCollapse1 ? "px-[20px]" : "px-[10px]"
          } transition-all duration-300 ease-in-out flex-1`}
        >
          <div className="mt-3 flex flex-col gap-[5px]">
            {/* Home */}
            <SidebarItem
              isCollapsed={isCollapse1}
              icon={<GoHome />}
              label="Home"
              tooltipOffset="-80px"
              link="/dashboard"
            />
            {/* Portfolio */}
            <SidebarItem
              isCollapsed={isCollapse1}
              icon={<FcBusinessman />}
              label="Portfolio"
              tooltipOffset="-80px"
              link="/"
            />
            {/* Calendar */}
            <SidebarItem
              isCollapsed={isCollapse1}
              icon={<CiCalendar />}
              label="Calendar"
              tooltipOffset="-99px"
            />
            {/* Projects with dropdown */}
            <div
              className={`${isCollapse1 && "justify-center"} ${
                isDropdownOpen && "bg-gray-50 dark:bg-slate-800"
              } flex w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group flex-col`}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              <div
                className={`${
                  isCollapse1 ? " justify-between" : "justify-center"
                } flex items-center gap-[8px] w-full`}
              >
                <div className="flex items-center gap-[8px]">
                  <GoProjectSymlink className="text-[1.3rem] dark:text-[#abc2d3] text-gray-500" />
                  <p
                    className={`${
                      isCollapse1 ? "inline" : "hidden"
                    } text-[1rem] font-[400] text-gray-500 dark:text-[#abc2d3]`}
                  >
                    Projects
                  </p>
                </div>

                <IoIosArrowDown
                  className={`${
                    isDropdownOpen ? "rotate-[180deg]" : "rotate-0"
                  } ${
                    isCollapse1 ? "inline" : "hidden"
                  } transition-all duration-300 text-[1rem] text-gray-500`}
                />
              </div>

              {!isCollapse1 && (
                <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-900 dark:text-[#abc2d3] group-hover:z-30 absolute top-0 left-[70px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] text-[1rem] text-gray-500">
                  {listOfProjects}
                </ul>
              )}
            </div>

            {/* Dropdown when expanded */}
            <ul
              className={`${
                isDropdownOpen
                  ? "h-auto my-3 opacity-100 z-[1]"
                  : "opacity-0 z-[-1] h-0"
              } ${
                isCollapse1 ? "inline" : "hidden"
              } transition-all duration-300 list-disc marker:text-blue-400 ml-[35px] flex flex-col gap-[3px] text-[1rem] dark:text-[#abc2d3] text-gray-500`}
            >
              {listOfProjects}
            </ul>

            {/* Progress & Goals */}
            <SidebarItem
              isCollapsed={isCollapse1}
              icon={<FiBarChart />}
              label="Progress"
              tooltipOffset="-100px"
              link="/dashboard/progress"
            />
            <SidebarItem
              isCollapsed={isCollapse1}
              icon={<FiPieChart />}
              label="Goals"
              tooltipOffset="-76px"
              link="/dashboard/goals"
            />
          </div>
        </div>
      </div>

      {/* Profile section */}
      <div
        className={`${
          isCollapse1 ? "justify-between" : "justify-center"
        } bg-gray-100 py-3 px-[20px] flex items-center mt-10 dark:bg-slate-800 `}
      >
        <div className="flex items-center gap-[10px]">
          <Image
            src={Pic}
            alt="avatar"
            className="w-[30px] h-[30px] cursor-pointer rounded-full object-contain bg-green-200"
            width={500}
            height={500}
          />
          <h3
            className={`${
              isCollapse1 ? "inline" : "hidden"
            } dark:text-[#abc2d3] text-[0.9rem] text-gray-800 font-semibold font-serif`}
          >
            {name ?? "Sokhorio Margon D&apos; Costa"}
          </h3>
        </div>

        <div className={`${isCollapse1 ? "inline" : "hidden"} relative group`}>
          <BsThreeDots className="text-[1.2rem] dark:text-[#abc2d3] text-gray-500 cursor-pointer" />
          <ul className="translate-x-[0px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-900 group-hover:z-30 absolute bottom-0 left-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px] border-2">
            <li className="flex items-center dark:text-[#abc2d3] dark:hover:bg-slate-800/50 gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
              <RiAccountCircleLine />
              Profile
            </li>
            <li
              onClick={handleLogout}
              className="flex items-center dark:text-[#abc2d3] dark:hover:bg-slate-800/50 gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer"
            >
              <CiLogout />
              Logout
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

//* Sub-component for reusable sidebar item
interface SidebarItemProps {
  isCollapsed: boolean;
  icon: React.ReactNode;
  label: string;
  tooltipOffset: string;
  link?: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  isCollapsed,
  icon,
  label,
  tooltipOffset,
  link = "",
}) => {
  //* Active route detection
  const pathname = usePathname();
  const isActive = pathname === link;
  // const isActive = link && pathname.startsWith(link);

  console.log(pathname);

  return (
    <Link
      className={`${isCollapsed ? "justify-between" : "justify-center"} 
      ${
        isActive
          ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20"
          : "hover:bg-gray-50 dark:hover:bg-slate-800/50"
      }
      flex items-center w-full hover:bg-gray-50 p-[5px] dark:hover:bg-slate-800/50 rounded-md cursor-pointer transition-all duration-200 relative group`}
      href={link as string}
    >
      {/* Icon + Label */}
      <div className="flex items-center gap-[8px]">
        <span
          className={`text-[1.3rem]
            ${
              isActive ? "text-indigo-600" : "text-gray-500 dark:text-[#abc2d3]"
            }
          `}
        >
          {icon}
        </span>
        <p
          className={`
            ${isCollapsed ? "inline" : "hidden"}
            text-[1rem] font-[400]
            ${
              isActive ? "text-indigo-600" : "text-gray-500 dark:text-[#abc2d3]"
            }
          `}
        >
          {label}
        </p>
      </div>

      {/* Tooltip (collapsed mode) */}
      <div
        style={{ right: tooltipOffset }}
        className="absolute top-0 translate-x-[20px] opacity-0 z-[-1]
            group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1]
            transition-all duration-500"
        // className={`${
        //   isCollapsed ? "hidden" : "inline"
        // } absolute top-0 right-[${tooltipOffset}] translate-x-[20px] opacity-0 z-[-1] group-hover:translate-x-0 group-hover:opacity-100 group-hover:z-[1] transition-all duration-500`}
      >
        <p className="text-[0.9rem] w-max dark:bg-slate-800 dark:text-[#abc2d3] bg-gray-600 text-secondary rounded px-3 py-[5px]">
          {label}
        </p>
      </div>
    </Link>
  );
};

export default DashboardSidebar;
