import React, { useEffect, useRef, useState } from "react";
import boy from "../../assets/sofa.png";
import { GrReactjs } from "react-icons/gr";
import { BiLogoNodejs } from "react-icons/bi";
import { SiExpress } from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { useNavigate } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { useMediaQuery } from "@react-hook/media-query";
import Navbar from "../Navbar";
function Main() {
  const isMedium = useMediaQuery("(max-width : 1024px)");
  const navigate = useNavigate();
  const navigateAbout = () => {
    navigate("/about");
  };

  const { ref, inView, entry } = useInView({
    threshold: 0,
  });

  const reactRef = useRef();
  const nodeRef = useRef();
  const expressRef = useRef();
  const mongoRef = useRef();
  const TailwindRef = useRef();

  const imgRef = useRef();

  useEffect(() => {
    if (inView) {
      imgRef.current.style.transform = "scale(100%)";
      reactRef.current.style.width = "380px";
      nodeRef.current.style.width = "360px";
      expressRef.current.style.width = "350px";
      mongoRef.current.style.width = "340px";
      TailwindRef.current.style.width = "365px";
    } else {
      imgRef.current.style.transform = "scale(0)";
      reactRef.current.style.width = "0px";
      nodeRef.current.style.width = "0px";
      expressRef.current.style.width = "0px";
      mongoRef.current.style.width = "0px";
      TailwindRef.current.style.width = "0px";
    }
  }, [inView]);
  if (isMedium) {
    return (
      <div ref={ref} className=" w-full py-5 px-5 h-auto bg-[#202020]">
        <Navbar/>
        <div  className=" ">
          <img ref={imgRef} src={boy} alt="" />
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
        <div ref={ref} className=" w-full  flex flex-col mt-5 items-start gap-1 justify-center">
          <h1 className=" text-gray-300 text-xl">skills:-</h1>
          <div className="  w-full flex gap-5 items-start">
            <div className=" flex flex-col gap-1 justify-center items-center">
              <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
              <div className=" w-[1px] h-10 bg-gray-300"></div>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <h1 className="flex gap-2 items-center text-gray-300">
                Reactjs- <GrReactjs className=" md:text-xl text-violet-500" />
              </h1>
              <div className=" w-full h-[5px] bg-[#303030] rounded-full">
                <div ref={reactRef} className=" w-[310px] h-full bg-violet-700"></div>
              </div>
            </div>
          </div>
          <div className="  w-full flex gap-5 items-start">
            <div className=" flex flex-col gap-1 justify-center items-center">
              <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
              <div className=" w-[1px] h-10 bg-gray-300"></div>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <h1 className="flex gap-2 items-center text-gray-300">
                Nodejs- <BiLogoNodejs className=" md:text-xl text-yellow-500" />
              </h1>
              <div className=" w-full h-[5px] bg-[#303030] rounded-full">
                <div ref={nodeRef} className=" w-[290px] h-full bg-yellow-500"></div>
              </div>
            </div>
          </div>
          <div className="  w-full flex gap-5 items-start">
            <div className=" flex flex-col gap-1 justify-center items-center">
              <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
              <div className=" w-[1px] h-10 bg-gray-300"></div>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <h1 className="flex gap-2 items-center text-gray-300">
                Expressjs- <SiExpress className=" md:text-xl text-gray-200" />
              </h1>
              <div className=" w-full h-[5px] bg-[#303030] rounded-full">
                <div ref={expressRef} className=" w-[280px] h-full bg-gray-300"></div>
              </div>
            </div>
          </div>
          <div className="  w-full flex gap-5 items-start">
            <div className=" flex flex-col gap-1 justify-center items-center">
              <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
              <div className=" w-[1px] h-10 bg-gray-300"></div>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <h1 className="flex gap-2 items-center text-gray-300">
                Mongodb- <BiLogoMongodb className=" md:text-xl text-green-500" />
              </h1>
              <div className=" w-full h-[5px] bg-[#303030] rounded-full">
                <div ref={mongoRef} className=" w-[240px] h-full bg-green-500"></div>
              </div>
            </div>
          </div>
          <div className="  w-full flex gap-5 items-start">
            <div className=" flex flex-col gap-1 justify-center items-center">
              <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
              <div className=" w-[1px] h-10 bg-gray-300"></div>
            </div>
            <div className=" w-full flex flex-col gap-1">
              <h1 className="flex gap-2 items-center text-gray-300">
                Tailwindcss- <SiTailwindcss className=" md:text-xl text-blue-500" />
              </h1>
              <div className=" w-full h-[5px] bg-[#303030] rounded-full">
                <div ref={TailwindRef} className=" w-[300px] h-full bg-blue-500"></div>
              </div>
            </div>
          </div>
        </div>
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
              <div className="  md:w-full flex flex-col gap-10 ">
                <h1 className="  md:text-white md:w-auto md:text-left md:mt-0 text-2xl  ">
                  skills:-
                </h1>
                <div className="  md:flex items-center gap-5">
                  <div className="  md:flex flex-col gap-1 md:items-center  md:justify-center  h-64">
                    <div className="  md:w-4 md:h-4 bg-gray-700 rounded-full"></div>
                    <div className="   md:w-[1px] md:h-9 bg-gray-700"></div>
                    <div className="    md:w-4 md:h-4 bg-gray-700 rounded-full"></div>
                    <div className="    md:w-[1px] md:h-9 bg-gray-700"></div>
                    <div className="   md:w-4 md:h-4 bg-gray-700 rounded-full"></div>
                    <div className="   md:w-[1px] md:h-9 bg-gray-700"></div>
                    <div className="  md:w-4 md:h-4 bg-gray-700 rounded-full"></div>
                    <div className="   md:w-[1px] md:h-9 bg-gray-700"></div>
                    <div className="  md:w-4 md:h-4 bg-gray-700 rounded-full"></div>
                  </div>
                  <div className=" md:flex flex-col gap-5 ">
                    <div className=" md:flex flex-col gap-1">
                      <h1 className=" md:flex gap-2 items-center">
                        Reactjs -
                        <GrReactjs className=" md:text-xl text-violet-500" />
                      </h1>

                      <div className=" md:flex md:w-96 h-[5px] bg-[#252525]">
                        <div
                          ref={reactRef}
                          style={{
                            width: "0px",
                            transitionDuration: "0.5s",
                          }}
                          className="  md:w-96 h-[5px] bg-violet-700 rounded-full"
                        ></div>
                      </div>
                    </div>
                    <div className=" md:flex flex-col gap-1">
                      <h1 className=" md:flex gap-2 items-center">
                        Nodejs -{" "}
                        <BiLogoNodejs className=" md:text-xl text-yellow-400" />
                      </h1>
                      <div className=" md:flex md:w-96 h-[5px] bg-[#303030]">
                        <div
                          ref={nodeRef}
                          style={{
                            width: "0px",
                            transitionDuration: "1s",
                          }}
                          className=" md:w-[360px] h-[5px] bg-yellow-500 rounded-full"
                        ></div>
                      </div>
                    </div>
                    <div className=" md:flex flex-col gap-1">
                      <h1 className=" md:flex gap-2 items-center">
                        Expressjs -
                        <SiExpress className=" md:text-xl text-gre" />
                      </h1>
                      <div className="  md:flex md:w-96 h-[5px] bg-[#303030]">
                        <div
                          ref={expressRef}
                          style={{
                            width: "0px",
                            transitionDuration: "1.5s",
                          }}
                          className=" md:w-[350px] h-[5px] bg-gray-400 rounded-full"
                        ></div>
                      </div>
                    </div>
                    <div className=" md:flex flex-col gap-1">
                      <h1 className=" md:flex items-center gap-2">
                        Mongodb -
                        <BiLogoMongodb className=" md:text-xl text-green-700" />
                      </h1>
                      <div className=" md:flex md:w-96 h-[5px] bg-[#303030]">
                        <div
                          ref={mongoRef}
                          style={{
                            width: "0px",
                            transitionDuration: "2s",
                          }}
                          className=" md:w-[340px] h-[5px] bg-green-700 rounded-full"
                        ></div>
                      </div>
                    </div>
                    <div className=" md:flex flex-col gap-1">
                      <h1 className="md:flex gap-2 items-center">
                        Tailwindcss -{" "}
                        <SiTailwindcss className=" md:text-xl text-blue-500" />
                      </h1>
                      <div className="  md:flex md:w-96 h-[5px] bg-[#303030]">
                        <div
                          ref={TailwindRef}
                          style={{
                            width: "0px",
                            transitionDuration: "2.5s",
                          }}
                          className="md:w-[360px] h-[5px] bg-blue-500 rounded-full"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
