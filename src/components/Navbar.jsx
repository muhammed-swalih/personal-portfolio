import React, { useState } from "react";
import { GiBookmarklet } from "react-icons/gi";
import { HiHome } from "react-icons/hi";
import { IoIosContact } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@react-hook/media-query";
import { CgMenuRight } from "react-icons/cg";
function Navbar() {
  const isMedium = useMediaQuery("(max-width : 1024px)");
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleHire = () => {
    navigate("/hire");
  };
  const handleProject = () => {
    navigate("/projects");
  };
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  if (isMedium) {
    return (
      <div className="w-full px-5 h-24">
        {/* <div className="h-full flex justify-between">
          <div className="h-full flex items-center">
            <h1 className="text-4xl" onClick={toggleSidebar}>
              <CgMenuRight className=" text-gray-300"/>
            </h1>
          </div>
        </div> */}
        <div className=" w-full h-auto flex justify-end" onClick={toggleSidebar}>
            <CgMenuRight className=" text-4xl text-gray-300 font-bold"/>
        </div>

        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 w-52 h-screen bg-gray-700 z-50 transition-transform duration-300 ease-in-out transform ${
            isSidebarOpen ? "" : "-translate-x-full"
          }`}
        >
          <ul className="pt-10 px-5 text-white w-full flex flex-col gap-4">

            <li onClick={handleHome} className=" flex gap-2 text-lg items-center"><HiHome className=" text-lg"/> Home</li>
            <hr />
            <li onClick={handleAbout} className=" flex gap-2 text-lg items-center"><GiBookmarklet className=" text-lg"/> About</li>
            <hr />

            <li onClick={handleHire} className=" flex gap-2 text-lg items-center"><IoIosContact className=" text-lg"/> Ping me</li>
            <hr />

            <li onClick={handleProject} className=" flex gap-2 text-lg items-center"><MdWorkspacePremium className=" text-lg"/> My works</li>
            <hr />

          </ul>
        </div>
      </div>
    );
  }
  return (
    <div className=" md:w-full ">
      <nav className="  ">
        <ul className="  md: w-full list-none flex gap-10 text-blue-500 text-lg ">
          <li
            onClick={handleHome}
            className=" md:flex gap-2 items-center px-3 py-1 hover:bg-[#252525]"
          >
            Home <HiHome />
          </li>
          <li
            onClick={handleAbout}
            className=" md:flex gap-2 items-center px-3 py-1 hover:bg-[#252525]"
          >
            About <GiBookmarklet />
          </li>
          <li
            onClick={handleHire}
            className=" md:flex gap-2 items-center px-3 py-1 hover:bg-[#252525]"
          >
            Ping me <IoIosContact />
          </li>
          <li
            onClick={handleProject}
            className=" md:flex gap-2 items-center px-3 py-1 hover:bg-[#252525]"
          >
            My works <MdWorkspacePremium />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
