import React, { useEffect, useRef } from "react";
import { BiLogoMongodb, BiLogoNodejs } from "react-icons/bi";
import { GrReactjs } from "react-icons/gr";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { useInView } from "react-intersection-observer";

function Dskills() {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  // const imgRef = useRef();

  const reactRef = useRef();
  const nodeRef = useRef();
  const expressRef = useRef();
  const mongoRef = useRef();
  const TailwindRef = useRef();
  useEffect(() => {
    if (inView) {
      // imgRef.current.style.transform = "scale(100%)";
      reactRef.current.style.width = "380px";
      nodeRef.current.style.width = "360px";
      expressRef.current.style.width = "350px";
      mongoRef.current.style.width = "340px";
      TailwindRef.current.style.width = "365px";
    } else {
      // imgRef.current.style.transform = "scale(0%)";
      reactRef.current.style.width = "0px";
      nodeRef.current.style.width = "0px";
      expressRef.current.style.width = "0px";
      mongoRef.current.style.width = "0px";
      TailwindRef.current.style.width = "0px";
    }
  }, [inView]);
  return (
    // <div>
    <div ref={ref} className="  md:w-full flex flex-col gap-10 ">
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
              Nodejs - <BiLogoNodejs className=" md:text-xl text-yellow-400" />
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
              <SiExpress className=" text-xl text-gray-300" />
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
                className=" md:w-[340px] h-[5px] bg-green-500 rounded-full"
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
    // </div>
  );
}

export default Dskills;
