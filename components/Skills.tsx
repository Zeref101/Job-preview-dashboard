import React from 'react'
import figma from "../public/figma.png"
import Ai from "../public/Ai.png"
import Xd from "../public/Xd.png"
import Image from 'next/image'

const Skills = () => {
    return (
        <section className=" w-full  mt-6 font-poppins pb-[25px] border-b-[1px] border-[#E7E7E7]">
            <div className=" h-[123px] flex gap-[64px] ml-[100px]">

                <div className=" w-[170px] flex flex-col justify-center items-start gap-2">
                    <span className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">Skills Required</span>
                    <div className=" w-[70px] h-[26px] flex justify-center items-center rounded-[6px] border-[1px] gap-[3px] border-[#D0D5DD] shadow-customInset2" style={{ paddingTop: '4px', paddingRight: '6px', paddingBottom: '4px', paddingLeft: '6px' }}>
                        <Image src={figma} alt="figma" width={16} height={16} />
                        <span className=" font-normal text-[12px] leading-[18px] text-center text-[#344054]">
                            Figma
                        </span>
                    </div>
                    <div className=" w-fit h-[26px] flex justify-center items-center rounded-[6px] border-[1px] gap-[3px] border-[#D0D5DD] shadow-customInset2" style={{ paddingTop: '4px', paddingRight: '6px', paddingBottom: '4px', paddingLeft: '6px' }}>
                        <Image src={Ai} alt="figma" width={16} height={16} />
                        <span className=" font-normal text-[12px] leading-[18px] text-center text-[#344054]">
                            Adobe Illustrator
                        </span>
                    </div>
                    <div className=" w-fit h-[26px] flex justify-center items-center rounded-[6px] border-[1px] gap-[3px] border-[#D0D5DD] shadow-customInset2" style={{ paddingTop: '4px', paddingRight: '6px', paddingBottom: '4px', paddingLeft: '6px' }}>
                        <Image src={Xd} alt="figma" width={16} height={16} />
                        <span className=" font-normal text-[12px] leading-[18px] text-center text-[#344054]">
                            Adobe XD
                        </span>
                    </div>
                </div>

                <div className=" w-[170px] flex flex-col">
                    <span className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">Preferred Language</span>
                    <p className=" text-[#3D3D3D] font-normal text-[14px] leading-[21px]">English</p>
                </div>

                <div className=" w-[170px] flex flex-col">
                    <span className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">Type</span>
                    <p className=" text-[#3D3D3D] font-normal text-[14px] leading-[21px]">Full time</p>
                </div>

                <div className=" w-[170px] flex flex-col">
                    <span className="font-normal text-[14px] leading-[21px] text-[#6E6D6D]">Years of Experience</span>
                    <p className=" text-[#3D3D3D] font-normal text-[14px] leading-[21px]">3+ Years of Experience</p>
                </div>
            </div>
        </section>
    )
}

export default Skills
