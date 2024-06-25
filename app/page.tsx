'use client'
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { homeLinks } from "@/constants";
import Link from "next/link";
import RightSidebar from "@/components/RightSidebar";
import smallDot from "../public/smallDot.png";
import greenDot from "../public/greenDot.png";
import marker from "../public/marker.png"
import stack from "../public/coins-stacked-03.png"
import Skills from "@/components/Skills";
import AboutJob from "@/components/AboutJob";
import Footer from "@/components/Footer";
import React from "react";

export default function Home() {
  React.useEffect(() => {
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />
      <div className=" w-full h-[71.39px] flex items-center justify-start border-y-[1px] border-[#E7E7E7] bg-[#FFFFFF] font-poppins text-[20px]">
        <div className=" w-[750px] h-[26.64px] flex gap-[72px] items-center justify-start ml-[100px] text-[#888888]">
          {homeLinks.map((link) => {

            return (
              <Link key={link.label} href={''} className={`${link.label === "Job preview" ? "relative text-[#DC4A2D] after:absolute after:bottom-[-20px] after:left-1/2 after:-translate-x-1/2 after:w-[65px] after:h-[2.13px] after:bg-[#DC4A2D]" : ""}  font-normal`}>
                {link.label}
              </Link>
            )
          })}
        </div>
      </div>
      <div className="flex w-full h-[80vh]">
        <div className="w-full overflow-y-scroll custom-scrollbar">
          <section className=" w-full flex flex-col gap-[24px]  ">
            <div className="flex flex-col gap-[24px] pb-[20px] border-b-[1px] border-[#E7E7E7]">
              <div className=" flex justify-start items-center  gap-[12px] h-[27px] mt-[36px] ml-[100px]">
                <span className=" font-bold text-[#3D3D3D] text-[35px] leading-[52.5px] ">Senior Product Designer</span>
                <Image src={smallDot} alt="gray-dot" width={4} height={4} />
                <span className=" text-[#888888] font-normal text-[14px]">posted 2 days ago</span>
                <div className=" w-[59px] h-[22px] rounded-full border-[1px] gap-[4px] border-[#ABEFC6] bg-[#ecfdf3] flex justify-center items-center" style={{ padding: '2px 8px 2px 6px' }} >
                  <Image src={greenDot} alt="dot" width={6} height={6} />
                  <span className="font-medium text-[12px] leading-[18px] text-[#067647]">Open</span>
                </div>
              </div>
              <div className="flex justify-start items-center gap-4 mt-[24px] ml-[100px]">
                <div className=" flex gap-2">
                  <Image src={marker} alt="marker" width={24} height={24} />
                  <span className=" text-[20px] leading-[30px] text-[#5D5D5D] font-normal">Delaware, USA</span>
                </div>
                <Image src={smallDot} alt="dot" width={4} height={4} className=" w-[4px] h-[4px] rounded-full]" />
                <div className=" flex gap-2">
                  <Image src={stack} alt="marker" width={24} height={24} />
                  <span className=" text-[20px] leading-[30px] text-[#5D5D5D] font-normal">$300k-$400k</span>
                </div>
              </div>
            </div>
          </section>
          <Skills />
          <AboutJob />
          <Footer />
        </div>
        <RightSidebar />
      </div>
    </main>
  );
}
