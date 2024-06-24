import React from 'react'

const AboutJob = () => {
    return (
        <>
            <section className=' w-full mt-8 pb-[30px] border-b-[1px] border-[#E7E7E7] font-poppins'>
                <div className=' w-[526px]  flex flex-col gap-[8px] ml-[100px]'>
                    <h3 className='font-normal text-[14px] leading-[21px] text-[#6E6D6D]'>About the job</h3>
                    <p className=' text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>
                        1. Handle the UI/UX research design <br />
                        2. Work on researching on latest web applications designs & trends <br />
                        3. Work on conceptualizing and visualizing <br />
                        4. Work on creating graphics content and other graphic related works <br />
                    </p>
                    <h3 className='text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>Benefits:</h3>
                    <ul className=' list-disc pl-10'>
                        <li className='text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>Health insurance</li>
                        <li className='text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>Provident Fund</li>
                    </ul>
                    <h3 className='text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>Schedule:</h3>
                    <ul className=' list-disc pl-10'>
                        <li className='text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>Day shift</li>
                    </ul>
                    <h3 className='text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>Supplemental pay types:</h3>
                    <ul className=' list-disc pl-10'>
                        <li className='text-[16px] leading-[28px] font-normal text-[#3D3D3D]'>Performance bonus...</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default AboutJob;
