"use client";
import Image from "next/image";
import { useState } from "react";
import ShareBar from "../components/shareBar/shareBar";

const Page = () => {
  const [barShowed, setBarShowed] = useState(true);
  const toggleBarHandler = () => {
    setBarShowed((barShowed) => !barShowed);
  };
  return (
    <div className=" relative z-0 mx-auto mt-[74px] grid max-w-[327px] overflow-hidden rounded-[10px] bg-white shadow-[0_40px_40px_-10px_rgba(201,213,225,0.5034)] md:mt-[260px] md:max-w-[730px]  md:auto-cols-min md:grid-cols-[min-content_auto] md:overflow-visible">
      <div className="relative w-[100%] pt-[62%] md:w-[285px] md:overflow-hidden  md:rounded-l-[10px] ">
        <Image src="/images/drawers.jpg" alt="drawers" fill></Image>
      </div>
      <div className=" grid gap-y-8 px-8 pt-9 pb-5 md:px-10 md:py-8">
        <div className="flex flex-col gap-3">
          <h1 className=" text-base font-bold tracking-[0.2px] text-very-dark-grayish-blue md:text-xl md:tracking-[0.25px]">
            Shift the overall look and feel by adding these wonderful touches to
            furniture in your home
          </h1>
          <p className="text-[13px] font-medium leading-[20px] tracking-[0.12px] text-desaturated-dark-blue">
            Ever been in a room and felt like something was missing? Perhaps it
            felt slightly bare and uninviting. I’ve got some simple tips to help
            you make any room feel complete.
          </p>
        </div>
        <div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/images/avatar-michelle.jpg"
                alt="michelle-icon"
                height={40}
                width={40}
                className="h-10 w-10 rounded-full"
              ></Image>
              <div>
                <h2 className="text- text-[13px] font-bold leading-5 tracking-[0.12px] text-very-dark-grayish-blue">
                  Michelle Appleton
                </h2>
                <p className="text-[13px] leading-5 tracking-[0.12px] text-grayish-blue">
                  28 Jun 2020
                </p>
              </div>
            </div>

            <div className=" md:relative">
              <div className={` z-40 flex`} onClick={toggleBarHandler}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  className={`pl z-40 cursor-pointer  rounded-full pt-[9px] pb-[10px] pl-[9px] pr-[8px] ${
                    barShowed
                      ? " bg-desaturated-dark-blue"
                      : "bg-light-grayish-blue"
                  }  `}
                >
                  <path
                    fill={` ${barShowed ? " hsl(210, 46%, 95%)" : "#6E8098"}`}
                    d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                  />
                </svg>
              </div>
              {barShowed && <ShareBar></ShareBar>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
