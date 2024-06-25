import Image from 'next/image'
import React from 'react'
import trash from "../public/trash.png"
import edit from "../public/edit.png"
import { rightSidebar } from '@/constants'
import avatar from "../public/Avatar.png"

const RightSidebar = () => {
    return (
        <div className='flex flex-col justify-start items-center w-[421px] h-screen  bg-[#FCFCFC] font-poppins stick right-0 top-0 border-t border-l border-[#E7E7E7] pl-[49px] pr-[12px] '>
            <div className='w-[360px] h-[351px] flex justify-center items-center flex-col gap-[24px] mt-[36px] mr-[12px]'>
                <div className=' flex gap-[16px]'>
                    <button className=' w-[172px] h-[44px] bg-[#FEF4F2] rounded-[8px] border-[0.8px] border-[#DC4A2D] py-3 px-6 flex gap-[8px] text-[#DC4A2D] justify-center items-center'>
                        <Image src={trash} alt='trash' width={15} height={15} />
                        <span className='text-[16px] font-normal leading-[20px]'>Delete job</span>
                    </button>
                    <button className=' w-[172px] h-[44px] bg-[#DC4A2D] rounded-[8px] border-[2px] border-[#FED3CA] py-3 px-6 flex gap-[8px] text-[#FFFFFF] justify-center items-center'>
                        <Image src={edit} alt='edit' width={12.89} height={12.89} />
                        <span className='text-[16px] font-normal leading-[20px]'>Edit job</span>
                    </button>
                </div>
                <div className=' w-full flex flex-col gap-[16px]'>
                    {rightSidebar.map((link) => {
                        return (
                            <div key={link.label} className={`w-[336px] mt-[16px] flex justify-between items-center relative ${link.label !== "Views" ? "after:absolute after:bottom-[-16px] after:left-1/2 after:-translate-x-1/2 after:w-[336px] after:h-[1px] after:bg-[#E7E7E7]" : ""}`}>
                                <div className='w-[135px] h-[44px] flex justify-start items-center gap-[10px]'>
                                    <Image src={link.imgUrl} alt='img' width={20} height={20} />
                                    <span className='text-[#4F4F4F] text-[16px] font-normal leading-[24px]'>
                                        {link.label}
                                    </span>
                                </div>
                                <span className='text-[20px] leading-[30px] text-[#3D3D3D] font-semibold'>
                                    {link.num}
                                </span>
                            </div>

                        )
                    })}
                </div>
            </div>
            <div className=' w-[385px] h-[196px] bg-[#FFFFFF] border-[1px] shadow-custom3 rounded-[12px] mt-[38.47px] mr-[12px] border-[#F7F7F7] flex flex-col justify-start p-[32px]'>
                <span className=' text-[#000] text-[20px] font-medium leading-[30px] '>“A quote from a Atlassian.”</span>
                <div className=' flex justify-start items-center gap-[16px] mt-[48px]'>
                    <Image src={avatar} alt='img' width={45} height={45} />
                    <div className=' flex flex-col text-[16px] font-medium  gap-[2px]'>
                        <span className=' text-[#000000] '>Name</span>
                        <span className='text-[#828282] '>Description</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar
