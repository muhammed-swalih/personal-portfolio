import React, { useEffect, useRef } from "react";
import Navbar from "../Navbar";
import hire from "../../assets/hire1.webp";
import {
  BsTelegram,
  BsWhatsapp,
  BsInstagram,
  BsGithub,
  BsLinkedin,
} from "react-icons/bs";
import { InView, useInView } from "react-intersection-observer";
import { Button } from "@mui/material";
function Hire() {
  const { ref, inView } = useInView();
  const instaRef = useRef();
  const whatsRef = useRef();
  const gitRef = useRef();
  const teleRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const imgRef = useRef();

  useEffect(() => {
    if (inView) {
      imgRef.current.style.transform = "scale(100%)";
      whatsRef.current.style.transform = "scale(100%)";
      instaRef.current.style.transform = "scale(100%)";
      gitRef.current.style.transform = "scale(100%)";
      teleRef.current.style.transform = "scale(100%)";
    } else {
      imgRef.current.style.transform = "scale(0%)";
      whatsRef.current.style.transform = "scale(0%)";
      instaRef.current.style.transform = "scale(0%)";
      gitRef.current.style.transform = "scale(0%)";
      teleRef.current.style.transform = "scale(0%)";
    }
  }, [inView]);
  return (
    <div className=" w-screen min-h-screen h-auto md:w-full md:h-screen  bg-[#202020] md:px-10 py-10">
      <Navbar />
      <div
        ref={ref}
        className="  md:w-full h-full md:flex md:items-center md:justify-center"
      >
        <div className=" flex items-center justify-center   md:w-1/2 h-full md:flex md:items-center md:justify-start md:gap-10 ">
          <div className=" md:w-[1px] h-[450px] bg-white"></div>
          <div className=" flex flex-col gap-5  md:flex md:flex-col md:gap-5">
            <h1 className=" text-4xl text-gray-500">Get in touch</h1>
            <div className="flex flex-col gap-2  md:gap-2 md:flex md:flex-col">
              <p className=" text-gray-500 text-sm">Send a mail</p>
              <input
                type="text"
                placeholder="name"
                className="w-full bg-[#303030] md:w-96 h-9 pl-3 rounded-md text-white"
              />
              <input
                type="email"
                placeholder="email"
                className=" w-full bg-[#303030] md:w-96 h-9 pl-3 rounded-md text-white"
              />
              <textarea
                type="textarea"
                placeholder="message"
                rows={5}
                cols={20}
                className="w-full bg-[#303030] text-white pt-2 md:w-96 pl-3 rounded-md"
              />
              <Button variant="contained">send</Button>
            </div>
            <div className="md:mt-2 flex gap-10 items-center justify-center">
              <a href="https://wa.me/7736447760" target="_blank">
                <h1
                  ref={whatsRef}
                  style={{ transform: "scale(0%)", transitionDuration: "0.5s" }}
                >
                  <BsWhatsapp className=" text-3xl text-green-500 md:text-5xl" />
                </h1>
              </a>
              <a href="https://www.linkedin.com/in/muhammed-swalih-825748202/">
                <h1
                  ref={instaRef}
                  style={{ transform: "scale(0%)", transitionDuration: "1s" }}
                >
                  <BsLinkedin className="text-3xl text-blue-500 md:text-5xl" />
                </h1>
              </a>
              <a href="https://github.com/muhammed-swalih">
                <h1
                  ref={gitRef}
                  style={{ transform: "scale(0%)", transitionDuration: "1.5s" }}
                >
                  <BsGithub className=" text-3xl text-gray-400 md:text-5xl" />
                </h1>
              </a>

              <a href="https://t.me/7736447760">
                <h1
                  ref={teleRef}
                  style={{ transform: "scale(0%)", transitionDuration: "2s" }}
                >
                  <BsTelegram className=" text-3xl text-blue-400 md:text-5xl " />
                </h1>
              </a>
            </div>
          </div>
        </div>
        <div className=" w-full md:w-1/2 h-full">
          <img
            ref={imgRef}
            style={{ transform: "scale(0%)", transitionDuration: "1.5s" }}
            src={hire}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Hire;
