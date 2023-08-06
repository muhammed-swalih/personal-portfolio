import React, { useEffect, useRef, useState } from "react";
import boy from "../../assets/sofa.webp";
import { GrReactjs } from "react-icons/gr";
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@react-hook/media-query";
import Navbar from "../Navbar";
import Dskills from "../skills/Dskills";
import Mskills from "../skills/Mskills";
function Main() {
  const isMedium = useMediaQuery("(max-width : 1024px)");
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const imgRef = useRef();

  useEffect(() => {
    if (inView) {
      imgRef.current.style.transform = "scale(100%)";
    } else {
      imgRef.current.style.transform = "scale(0%)";
    }
  }, [inView]);
  if (isMedium) {
    return (
      <div ref={ref} className=" w-full py-5 px-5 h-auto bg-[#202020]">
        <Navbar />
        <div className=" ">
          <img
            ref={imgRef}
            src={boy}
            alt=""
            style={{ transform: "scale(0% )", transitionDuration: "1.5s" }}
          />
        </div>
        <div className=" flex gap-2 flex-col items-center justify-center">
          <div className=" flex flex-col items-center">
            <h1 className=" text-gray-300 uppercase text-4xl">Iam Swalih</h1>
            <h1 className=" text-gray-300  text-2xl">Mern stack developer</h1>
            <h1 className=" text-gray-300 text-center">
              In my perspective, developing web apps, websites, and programming
              brings me a lot of fun. And do you know one thing? If you find fun
              in something, you will start doing it at an extreme level and
              strive to become a master in that field.
            </h1>
          </div>
          <hr className=" w-full border-gray-500" />
        </div>
        <Mskills />
      </div>
    );
  }
  return (
    <div className="max-w-screen px-5 py-5 md:w-full h-auto bg-[#202020] md:px-5 pt-10">
      <div className=" px-5 md:px-10">
        <Navbar />
      </div>
      <div className=" md:flex md:justify-center  md:w-full h-auto">
        <div
          ref={ref}
          className="md:w-full md:h-full md:flex md:justify-center md:items-center text-gray-300"
        >
          <div className="  md:w-1/2 h-screen flex justify-center items-center">
            <div className=" md:flex flex-col gap-10 ">
              <div className=" md:flex gap-5">
                <div className=" md:flex flex-col gap-3 ">
                  <div className=" md:flex flex-col ">
                    <h1 className="    md:font-bold uppercase md:w-80 md:text-left text-white text-5xl maintext">
                      Iam swalih
                    </h1>
                    <h1 className="   md:text-2xl md:text-left">
                      Mern stack developer
                    </h1>
                  </div>
                  <h1 className="   md:w-[600px] md:mt-0 md:text-left  text-gray-300 ">
                    In my perspective, developing web apps, websites, and
                    programming brings me a lot of fun. And do you know one
                    thing? If you find fun in something, you will start doing it
                    at an extreme level and strive to become a master in that
                    field.
                  </h1>
                  <hr className=" md:mt-0 w-full" />
                </div>
              </div>
              <Dskills />
            </div>
          </div>
          <div className="  md:w-1/2 h-auto md:bg-[#202020]  flex justify-center items-center ">
            <img
              ref={imgRef}
              style={{ transform: "scale(0)", transitionDuration: "1.5s" }}
              src={boy}
              alt=""
              className=" md:rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
