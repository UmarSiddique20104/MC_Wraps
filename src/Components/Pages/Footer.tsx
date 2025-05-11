import { useState } from "react";
import Footerlogo from "../Images/Logo (2).svg";
import FacebookO from "../Images/Property 1=FB H.png";
import YoutubeO from "../Images/Property 1=YT H.png";
import TwitterO from "../Images/Property 1=T H.png";
import FooterF from "../Images/facebook.png";
import FooterT from "../Images/twitter.png";
import FooterY from "../Images/youtube.png";
import { NavLink } from "react-router-dom";

export default function Footer() {
  const [isHoveredF, setIsHoveredF] = useState(false);
  const [isHoveredY, setIsHoveredY] = useState(false);
  const [isHoveredT, setIsHoveredT] = useState(false);
  return (
    <div className="">
      <div className="relative bg-[url('assets/imageFooter/footerbg.png')]    bg-no-repeat object-contain bg-cover ">
        <div className="container mx-auto ">
          <div className="  sm:pt-36 flex justify-between xlg:flex-row  xs:flex-col gap-6 lg:gap-10 xlg:gap-44 mx-4 xms:mx-16 4xl:pt-60">
            <div className="flex justify-between md:flex-row xs:flex-col gap-10 w-full ">
              <div className="w-[100%]">
                <NavLink to={"/"}>
                  <img
                    src={Footerlogo}
                    alt=""
                    className="w-[130px] h-[101px] img-fluid"
                  />
                </NavLink>
              </div>
              <div className="flex flex-col gap-4 w-[100%]">
                <div className="text-[22px] font-normal font-peligro-stencil">
                  Explore
                </div>
                <div className="flex justify-between md:flex-row xs:flex-col gap-8 font-sans text-[18px]">
                  <div className="cursor-pointer">
                    <NavLink
                      to={"/"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                          : "text-black"
                      }
                    >
                      Home
                    </NavLink>
                  </div>
                  <div className="cursor-pointer">
                    <NavLink
                      to={"/service"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                          : "text-black"
                      }
                    >
                      Services
                    </NavLink>
                  </div>
                  <div className="cursor-pointer">
                    <NavLink
                      to={"/about"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                          : "text-black"
                      }
                    >
                      About
                    </NavLink>
                  </div>
                  <div className="cursor-pointer">
                    <NavLink
                      to={"/contact"}
                      className={({ isActive }) =>
                        isActive
                          ? "bg-gradient-to-r underline-offset-auto	 from-[#E60B09] bg-white to-[#E9D022] cursor-pointer inline-block text-transparent bg-clip-text font-peligro-stencil"
                          : "text-black"
                      }
                    >
                      Contact
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between md:flex-row xs:flex-col w-full   gap-10 ">
              <div className="flex flex-col gap-4 md:w-[100%]">
                <div className="text-[22px] font-normal font-peligro-stencil">
                  Get in Touch
                </div>
                <div className="flex gap-10 font-sans text-[18px]">
                  765 Ash St #100, Canton, GA 30114 | (770) 345-7448
                </div>
              </div>
              <div className="flex flex-col   gap-4 w-[100%] xlg:w-[50%] ">
                <div className="text-[22px] font-normal font-peligro-stencil">
                  Socialize
                </div>
                <div className="flex gap-4 w-auto items-center ">
                  {isHoveredF ? (
                    <div className="cursor-pointer">
                      <img
                        src={FacebookO}
                        alt=""
                        className="w-[13px] h-[24px] object-contain m-1"
                        onMouseEnter={() => setIsHoveredF(true)}
                        onMouseLeave={() => setIsHoveredF(false)}
                      />
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <img
                        src={FooterF}
                        alt=""
                        className="w-[13px] h-[24px] object-contain m-1"
                        onMouseEnter={() => setIsHoveredF(true)}
                        onMouseLeave={() => setIsHoveredF(false)}
                      />
                    </div>
                  )}
                  {isHoveredY ? (
                    <div className="flex flex-col justify-center cursor-pointer">
                      <img
                        src={YoutubeO}
                        alt=""
                        className="w-6 object-cover"
                        onMouseEnter={() => setIsHoveredY(true)}
                        onMouseLeave={() => setIsHoveredY(false)}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center cursor-pointer">
                      <img
                        src={FooterY}
                        alt=""
                        className="w-6 object-cover"
                        onMouseEnter={() => setIsHoveredY(true)}
                        onMouseLeave={() => setIsHoveredY(false)}
                      />
                    </div>
                  )}
                  {isHoveredT ? (
                    <div className="flex flex-col justify-center cursor-pointer">
                      <img
                        src={TwitterO}
                        alt=""
                        className="w-6 object-cover"
                        onMouseEnter={() => setIsHoveredT(true)}
                        onMouseLeave={() => setIsHoveredT(false)}
                      />
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center cursor-pointer">
                      <img
                        src={FooterT}
                        alt=""
                        className="w-6 object-cover"
                        onMouseEnter={() => setIsHoveredT(true)}
                        onMouseLeave={() => setIsHoveredT(false)}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="text-[12px] leading-5 font-sans pt-4 px-4 pb-4">
            Copyright © 2023 MC Wraps | All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
