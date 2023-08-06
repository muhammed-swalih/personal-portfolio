import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import netflix from "../../assets/netflix1.webp";
import trekk from "../../assets/trekk.webp";
import port from "../../assets/porfolio.webp";
import links from "../../assets/links.webp";
import greez from "../../assets/greenz1.webp";
import { useInView } from "react-intersection-observer";
function Project() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  const oneRef = useRef();
  const twoRef = useRef();
  const threeRef = useRef();
  const fourRef = useRef();
  const fiveRef = useRef();

  useEffect(() => {
    if (inView) {
      oneRef.current.style.transform = "scale(100%)";
      twoRef.current.style.transform = "scale(100%)";
      threeRef.current.style.transform = "scale(100%)";
      fourRef.current.style.transform = "scale(100%)";
      fiveRef.current.style.transform = "scale(100%)";
    } else {
      oneRef.current.style.transform = "scale(0%)";
      twoRef.current.style.transform = "scale(0%)";
      threeRef.current.style.transform = "scale(0%)";
      fourRef.current.style.transform = "scale(0%)";
      fiveRef.current.style.transform = "scale(0%)";
    }
  }, [inView]);

  return (
    <div className=" px-2 md:w-full h-auto bg-[#202020] md:px-10 py-10">
      <Navbar />
      <div className=" h-auto md:w-full min-h-screen md:h-screen md:flex md:gap-0 items-start">
        <div className=" md:w-1/2 h-full  py-5 px-5 flex flex-col justify-center items-start  ">
          <div className=" gap-5 md:w-full h-full flex flex-col items-start justify-center md:gap-1">
            <h1 className="text-gray-300 text-2xl ">works:-</h1>
            <div className=" flex gap-5">
              <div className=" flex flex-col gap-1 items-center justify-center">
                <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
                <div className=" w-[1px] h-32 md:h-20 bg-gray-500"></div>
              </div>
              <div className=" md:flex flex-col">
                <div className=" md:flex gap-2 items-center">
                  <a href="https://github.com/muhammed-swalih/Trekk-travels.git">
                    <h1 className=" text-blue-500 text-xl cursor-pointer hover:underline">
                      Trekk and travels-
                    </h1>
                  </a>
                  <h1 className=" text-gray-300">A tarevl agency website:-</h1>
                </div>
                <h1 className=" text-gray-300">
                  Stack used : MERN, This is a complete mern web application
                  that admin can add, delete, edit thier tour packages
                </h1>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className=" flex flex-col gap-1 items-center">
                <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
                <div className=" w-[1px] h-32 md:h-20 bg-gray-500"></div>
              </div>
              <div className=" md:flex flex-col">
                <div className=" md:flex gap-2 items-center">
                  <a href="https://github.com/muhammed-swalih/Netflix-Clone-.git">
                    <h1 className=" text-blue-500 text-xl cursor-pointer hover:underline">
                      Netflix clone-
                    </h1>
                  </a>
                  <h1 className=" text-gray-300">
                    {" "}
                    A complete clone of Netflix:-
                  </h1>
                </div>
                <h1 className=" text-gray-300">
                  Its build with React for frontend and firebase as backend and
                  used TMDB(the movie database api)
                </h1>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className=" flex flex-col gap-1 items-center">
                <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
                <div className=" w-[1px] h-32 md:h-20 bg-gray-500"></div>
              </div>
              <div className="  md:flex flex-col">
                <div className=" md:flex gap-2 items-center">
                  <a href="https://github.com/muhammed-swalih/protofolio-template.git">
                    <h1 className=" text-blue-500 text-xl cursor-pointer hover:underline">
                      Portfolio template-
                    </h1>
                  </a>
                  <h1 className=" text-gray-300">
                    {" "}
                    A portfolio website template:-
                  </h1>
                </div>
                <h1 className=" text-gray-300">
                  Its build with Reactjs and tailwindcss. its classic template
                  for portfolios
                </h1>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className="flex flex-col gap-1 items-center">
                <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
                <div className=" w-[1px] h-32 md:h-20 bg-gray-500"></div>
              </div>
              <div className=" md:flex flex-col">
                <div className=" md:flex gap-2 items-center">
                  <a href="https://github.com/muhammed-swalih/links-in-bio.git">
                    <h1 className=" text-blue-500 text-xl cursor-pointer hover:underline">
                      Links in bio-
                    </h1>
                  </a>
                  <h1 className=" text-gray-300">
                    {" "}
                    A website that shows your links:-
                  </h1>
                </div>
                <h1 className=" text-gray-300">
                  Its build with Reactjs, tailwindcss and vantajs for 3d
                  animated backgrounds.
                </h1>
              </div>
            </div>
            <div className=" flex gap-5">
              <div className=" flex flex-col gap-1 items-center">
                <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
                <div className=" w-[1px] h-32 md:h-20 bg-gray-500"></div>
              </div>
              <div className=" md:flex flex-col">
                <div className=" md:flex gap-2 items-center">
                  <a href="https://github.com/muhammed-swalih/Greenz-holidays.git">
                    <h1 className=" text-blue-500 text-xl cursor-pointer hover:underline">
                      Greenz holidays-
                    </h1>
                  </a>
                  <h1 className=" text-gray-300">
                    {" "}
                    Another website for travel agency:-
                  </h1>
                </div>
                <h1 className=" text-gray-300">
                  Its also a complete MERN stack web application. that admin can
                  add, delete,and edit their tour packages
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className=" md:w-1/2 h-full  py-5 px-5 flex items-center justify-center">
          <div
            ref={ref}
            className=" justify-center md:w-full h-full  flex flex-col gap-10 md:justify-end items-center"
          >
            <div className="w-full md:w-52 h-36  rounded-lg">
              <img
                ref={oneRef}
                style={{ transform: "scale(0%)", transitionDuration: "0.5s" }}
                className=" w-full md:w-full h-full object-cover rounded-lg"
                src={trekk}
                alt=""
              />
            </div>
            <div className=" w-full  md:w-52 h-36  rounded-lg">
              <img
                ref={twoRef}
                style={{ transform: "scale(0%)", transitionDuration: "1s" }}
                className="w-full md:w-full h-full object-cover rounded-lg"
                src={netflix}
                alt=""
              />
            </div>
            <div className="w-full md:w-52 h-36  rounded-lg ">
              <img
                ref={threeRef}
                style={{ transform: "scale(0%)", transitionDuration: "1.5s" }}
                className="w-full md:w-full h-full object-cover rounded-lg"
                src={port}
                alt=""
              />
            </div>
            <div className="w-full md:w-52 h-36  rounded-lg ">
              <img
                ref={fourRef}
                style={{ transform: "scale(0%)", transitionDuration: "2s" }}
                className=" w-full md:w-full h-full object-cover rounded-lg"
                src={links}
                alt=""
              />
            </div>
            <div className="w-full md:w-52 h-36  rounded-lg">
              <img
                ref={fiveRef}
                style={{ transform: "scale(0%)", transitionDuration: "2.5s" }}
                className=" w-full md:w-full h-full object-cover rounded-lg"
                src={greez}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
