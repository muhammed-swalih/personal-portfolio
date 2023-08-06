import React, { useEffect, useRef } from "react";
import { BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { useInView } from "react-intersection-observer";

function Mskills() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  //   const imgRef = useRef();

  const reactMref = useRef();
  const nodeMref = useRef();
  const expressMRef = useRef();
  const mongoMRef = useRef();
  const TailwindMRef = useRef();
  useEffect(() => {
    if (inView) {
      // imgRef.current.style.transform = "scale(100%)";
      reactMref.current.style.width = "290px";
      nodeMref.current.style.width = "280px";
      expressMRef.current.style.width = "285px";
      mongoMRef.current.style.width = "250px";
      TailwindMRef.current.style.width = "278px";
    } else {
      // imgRef.current.style.transform = "scale(0%)";
      reactMref.current.style.width = "0%";
      nodeMref.current.style.width = "0%";
      expressMRef.current.style.width = "0%";
      mongoMRef.current.style.width = "0%";
      TailwindMRef.current.style.width = "0%";
    }
  }, [inView]);
  return (
    <div className=" w-full  flex flex-col mt-5 items-start gap-1 justify-center">
      <h1 className=" text-gray-300 text-xl">skills:-</h1>
      <div className="  w-full flex gap-5 items-start">
        <div className=" flex flex-col gap-1 justify-center items-center">
          <div className=" w-4 h-4 rounded-full bg-gray-700"></div>
          <div className=" w-[1px] h-10 bg-gray-300"></div>
        </div>
        <div ref={ref} className=" w-full flex flex-col gap-1">
          <h1 className="flex gap-2 items-center text-gray-300">
            Reactjs- <GrReactjs className=" md:text-xl text-violet-500" />
          </h1>
          <div className=" w-full h-[5px] bg-[#303030] rounded-full">
            <div
              ref={reactMref}
              style={{
                width: "0px",
                transitionDuration: "0.5s",
              }}
              className=" w-64 h-full bg-violet-700"
            ></div>
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
            <div
              ref={nodeMref}
              style={{
                width: "0px",
                transitionDuration: "1s",
              }}
              className=" w-64 h-full bg-yellow-500"
            ></div>
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
            <div
              ref={expressMRef}
              style={{
                width: "0px",
                transitionDuration: "1.5s",
              }}
              className=" w-64 h-full bg-gray-300"
            ></div>
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
            <div
              ref={mongoMRef}
              style={{
                width: "0px",
                transitionDuration: "2s",
              }}
              className=" w-64 h-full bg-green-500"
            ></div>
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
            <div
              ref={TailwindMRef}
              style={{
                width: "0px",
                transitionDuration: "2.5s",
              }}
              className=" w-64 h-full bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mskills;
