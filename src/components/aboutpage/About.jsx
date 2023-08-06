import React, { useEffect, useRef } from "react";
import { HiHome } from "react-icons/hi";
import { GiBookmarklet } from "react-icons/gi";
import { IoIosContact } from "react-icons/io";
import { MdWorkspacePremium } from "react-icons/md";
import img from "../../assets/table1.webp";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import Navbar from "../Navbar";

function About() {
  const { ref, inView, entry } = useInView({
    threshold: 0,
  });
  const imgRef = useRef();

  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (inView) {
      imgRef.current.style.transform = "scale(100%)";
    } else {
      imgRef.current.style.transform = "scale(0%)";
    }
  }, [inView]);
  return (
    <div
      ref={ref}
      className=" px-5 min-h-screen h-auto md:w-full md:h-screen  md:px-10 py-10 bg-[#202020]"
    >
      <Navbar />
      <div className="  md:flex md:mt-5">
        <div className=" max-w-screen-sm flex items-center justify-center   md:w-1/2 h-auto md:flex md:items-center md:justify-center md:gap-10">
          <div className=" md:w-[1px] h-96 bg-white"></div>
          <div className=" flex flex-col items-center justify-center md:flex md:flex-col gap-5 ">
            <h1 className="text-white  md:text-white text-6xl uppercase  ">
              About me
            </h1>
            <div className=" md:flex flex-col gap-3">
              <h1 className="text-gray-300 text-center md:text-gray-400 md:text-left ">
                As a Freelance Full Stack Web Developer, I have spent the past 5
                years honing my skills in the field of web development. During
                this time, I have worked on various projects, including
                e-commerce platforms, food delivery web applications, and more.
                As a freelancer, I pride myself on my ability to adapt to my
                clients' tastes and needs, ensuring their vision is translated
                into functional and visually appealing web solutions.
              </h1>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 h-auto flex items-center justify-center">
          <img
            ref={imgRef}
            style={{ transform: "scale(0%)", transitionDuration: "1.5s" }}
            src={img}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default About;
