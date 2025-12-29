import DashboardSidebar from "./DashboardSidebar";
// import ResponsiveSidebar from './ResponsiveSidebar';
import Image from "next/image";
import Pic from "@/assets/images/StarboyMG.png";

const Dashboard = () => {
  return (

    <div className="flex h-screen bg-gray-100 dark:bg-slate-900">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <main className="flex-1 p-6 overflow-auto">
        {/* Header */}
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-[#abc2d3]">
            Dashboard Home
          </h1>
          <div className="flex items-center gap-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 rounded-md border border-gray-300 dark:border-slate-700 dark:bg-slate-800 dark:text-[#abc2d3] focus:outline-none focus:ring-2 focus:ring-indigo-400 w-44 md:w-auto"
            />
            <Image
              src={Pic}
              alt="Sokhorio Margon D&apos; Costa"
              width={40}
              height={40}
              className="rounded-full hidden md:block"
              title="Sokhorio Margon D&apos; Costa"
            />
          </div>
        </div>

        {/* Overview cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-[#abc2d3]">Projects</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              12
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-[#abc2d3]">Clients</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              5
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-[#abc2d3]">Completed Tasks</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              23
            </p>
          </div>
          <div className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition">
            <p className="text-gray-500 dark:text-[#abc2d3]">Goals</p>
            <p className="text-2xl font-bold text-gray-800 dark:text-white">
              8
            </p>
          </div>
        </div>

        {/* Portfolio preview */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-[#abc2d3] mb-4">
            Recent Projects
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="bg-white dark:bg-slate-800 rounded-lg shadow hover:shadow-lg transition p-4"
              >
                <h3 className="font-bold text-gray-800 dark:text-white">
                  Project {item}
                </h3>
                <p className="text-gray-500 dark:text-[#abc2d3]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Activity / Recent updates */}
        <div>
          <h2 className="text-xl font-semibold text-gray-800 dark:text-[#abc2d3] mb-4">
            Recent Activity
          </h2>
          <ul className="space-y-2">
            <li className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition">
              Updated project “Portfolio Redesign”
            </li>
            <li className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition">
              Added new client “ACME Corp”
            </li>
            <li className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow hover:shadow-lg transition">
              Completed milestone for “Landing Page”
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
