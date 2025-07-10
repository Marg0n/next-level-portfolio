"use client";
import React, { useState } from "react";

//* react icons
import {
  GoHome,
  GoProjectSymlink,
  GoSidebarCollapse,
} from "react-icons/go";
import { IoIosArrowDown, IoIosSearch } from "react-icons/io";
import { CiCalendar, CiLogout } from "react-icons/ci";
import { FiBarChart, FiPieChart } from "react-icons/fi";
import {
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { BsThreeDots } from "react-icons/bs";
import { RiAccountCircleLine } from "react-icons/ri";
import Image from "next/image";
import Pic from "@/assets/images/SMD.png";

const DashboardSidbar: React.FC = () => {

    const [isCollapse1, setIsCollapse1] = useState<boolean>(true);

    return (
        <aside className="transition-all duration-300 ease bg-white p-2">
            <div
                    className={`mt-0 ${
                      isCollapse1 ? "px-[20px]" : "px-[10px]"
                    } transition-all duration-300 ease-in-out`}
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
                        <h3 className="text-xl font-sans font-bold">Portfolio Dashboard</h3>
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
                        className="w-20 h-20 mx-auto rounded-full cursor-pointer object-contain border-2 border-indigo-400"
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
            sidebar
        </aside>
    );
};

export default DashboardSidbar;