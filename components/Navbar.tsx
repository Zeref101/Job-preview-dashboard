import Image from 'next/image'
import React from 'react'
import Logo from "../public/Logo.png"
import Link from 'next/link'
import suitcase from "../public/briefcase-02.png"
import msg from "../public/message-square-01.png"
import dot from "../public/Ellipse 5.png"
import hands from "../public/Icon.png"
import users from "../public/users-01.png"
import bell from "../public/bell-02.png"
import userAccount from "../public/Rectangle 5.png"
import chevron from "../public/chevron-down.png"
import dot2 from "../public/dot2.png"

const Navbar = () => {
    return (
        <div className=' w-full h-[116.14px] bg-[#ffffff]  relative flex justify-center items-center shadow-custom font-poppins'>

            <div className=' w-full h-[61px] pl-[40px] pr-[24px] mt-[20.24px] mb-[17.05px] flex justify-between items-center bg-[#FFFFFF] absolute '>
                <div className=' w-[100px] h-[61px] flex justify-center items-center gap-[10px] py-[9px] px-7 bg-[#E7E7E7]'>
                    <Image src={Logo} alt='logo w-[47px] h-[27px]' />
                </div>
                <div className=' flex justify-center items-center gap-[19px]'>
                    <Link href={'/'} className=' w-[109px] h-[58px] rounded-[49px] border-[2px] bg-[#DC4A2D] border-[#FCB4A5] flex justify-center items-center gap-[8px] shadow-custom2'>
                        <Image src={suitcase} alt='suitcase' width={24} height={24} />
                        <span className=' font-medium leading-[27px] text-[20px]'>Jobs</span>
                    </Link>

                    <div className=' w-[602px] h-[74px] border-[0.5px] rounded-[36px] shadow-customInset border-[#D1D1D1] flex justify-between items-center px-[46px]'>

                        <Link href={"#"} className=' w-[127px] h-[25px] flex items-center justify-center gap-[8px]'>
                            <div className=' relative'>
                                <Image src={msg} alt='msg' width={24} height={24} />
                                <Image src={dot} alt='dot' width={6} height={6} className='absolute top-0 right-0' />
                            </div>
                            <span className=' font-medium text-[20px] leading-[27px] text-[#B0B0B0]'>Message</span>
                        </Link>
                        <Link href={"#"} className=' flex items-center justify-center gap-[8px]'>
                            <Image src={hands} alt='hand' width={24} height={24} />
                            <span className=' font-medium text-[20px] leading-[27px] text-[#B0B0B0]'>Payments</span>
                        </Link>
                        <Link href={"#"} className=' flex items-center justify-center gap-[8px]'>
                            <Image src={users} alt='hand' width={24} height={24} />
                            <span className=' font-medium text-[20px] leading-[27px] text-[#B0B0B0]'>Application</span>
                        </Link>
                    </div>
                </div>
                <div className='flex w-[134px] h-[60px] p-[10px] gap-[16px] justify-center items-center'>
                    <div className=' relative'>
                        <Image src={bell} alt='bell' width={32} height={32} />
                        <Image src={dot2} alt='dot2' width={6} height={6} className='absolute top-0 right-[4px]' />
                    </div>
                    <div className=' w-[66px] h-[40px] flex items-center justify-center gap-[6px] '>
                        <Image src={userAccount} alt='img' width={40} height={40} />
                        <div className=' w-[20px] h-[20px]'>
                            <Image src={chevron} alt='chevron' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
