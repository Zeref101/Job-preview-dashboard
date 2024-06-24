import Image from 'next/image'
import React from 'react'
import company from "../public/company.png"
import Link from 'next/link'

const Footer = () => {
    return (
        <div className=' flex flex-col ml-[100px] font-poppins mt-[48.47px]'>
            <div className=' flex gap-[12px] justify-start items-center'>
                <Image src={company} alt='logo' width={40} height={40} />
                <span className=' text-[20px] leading-[30px] font-normal text-[#4F4F4F]'>Atlassian</span>
                <div className=' w-[67px] h-[26px] rounded-[8px] shadow-custom4 flex items-center justify-center bg-[#E0EBF9] text-[#003788] font-bold text-[11px] leading-[16.5px]'>
                    Follow
                </div>
            </div>

            <div className='flex gap-[48px]'>
                <div className=' flex flex-col mt-4'>

                    <div className=' w-[344px] flex flex-col justify-start mb-[24px]'>
                        <h3 className=' text-[14px] leading-[21px] font-normal text-[#6E6D6D]'>Company size</h3>
                        <p className='font-normal text-[16px] leading-[24px] text-[#3D3D3D]'>1k - 2k Employees</p>
                    </div>
                    <div className=' w-[344px] flex flex-col justify-start mb-[24px]'>
                        <h3 className=' text-[14px] leading-[21px] font-normal text-[#6E6D6D]'>Sector</h3>
                        <p className='font-normal text-[16px] leading-[24px] text-[#3D3D3D]'>Information Technology, Infrastructure</p>
                    </div>
                    <div className=' w-[344px] flex flex-col justify-start mb-[24px]'>
                        <h3 className=' text-[14px] leading-[21px] font-normal text-[#6E6D6D]'>Founded In</h3>
                        <p className='font-normal text-[16px] leading-[24px] text-[#3D3D3D]'>2019</p>
                    </div>
                </div>

                <div className=' flex flex-col mt-4'>

                    <div className=' w-[344px] flex flex-col justify-start mb-[24px]'>
                        <h3 className=' text-[14px] leading-[21px] font-normal text-[#6E6D6D]'>Type</h3>
                        <p className='font-normal text-[16px] leading-[24px] text-[#3D3D3D]'>Private</p>
                    </div>
                    <div className=' w-[344px] flex flex-col justify-start mb-[24px]'>
                        <h3 className=' text-[14px] leading-[21px] font-normal text-[#6E6D6D]'>Funding</h3>
                        <p className='font-normal text-[16px] leading-[24px] text-[#3D3D3D]'>Bootstrapped</p>
                    </div>
                    <div className=' w-[344px] flex flex-col justify-start mb-[24px]'>
                        <h3 className=' text-[14px] leading-[21px] font-normal text-[#6E6D6D]'>Founded By</h3>
                        <p className='font-normal text-[16px] leading-[24px] text-[#3D3D3D]'>Scott Farquhar, Mike Cannon-Brookes</p>
                    </div>
                </div>
            </div>
            <Link className='mt-[23px] pb-[58px] text-[12px] leading-[18px] font-normal text-[#B0B0B0] underline font-poppins' style={{ textDecorationColor: '#B0B0B0' }} href={'#'}>
                Report this listing
            </Link>
        </div>
    )
}

export default Footer
