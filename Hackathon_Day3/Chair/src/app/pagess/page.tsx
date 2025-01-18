import { Button } from '@/components/ui/button';
import React from 'react'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdWatchLater } from "react-icons/md";
import Image from "next/image"
import { client } from '@/sanity/lib/client';

async function Page() {

    // Adress Sanity Data 
    const Address_Data = await client.fetch("*[_type == 'contactPage'][0].sections[0]{'dddress': dddress,'phone': phone,'workingTime': workingTime,}")
    const {dddress, phone, workingTime} = await Address_Data;

    // Heigh Quality, Warenty, Support Sanity data
    const Verifications = await client.fetch("*[_type == 'contactPage'][0].sections[1]{'highQuality': highQuality,'warrantyProtection': warrantyProtection,'support': support,}") 
     
  return (
    <>

       <section className='w-full mt-[20px] md:mt-[98px] px-[10px] md:px-[300px] mb-[30px] md:mb-[0px]'>

        {/* top div 1 */}
        <div className='w-full'>

            {/* text div */}
            <div className='text-center'>
                <h1 className='text-[25px] md:text-[36px] leading-[54px] font-semibold text-[#000000]'>Get In Touch With Us</h1>
                <p className='text-[16px] leading-[24px]  text-[#9F9F9F]'>
                    For More Information About Our Product & Services. Please Feel Free To Drop Us <br className='hidden md:block'/> An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </div>


            {/* main div */}
            <div className='flex flex-col md:flex-row justify-center items-center md:items-start mt-[30px] md:mt-[128px] gap-[60px] md:gap-[160px]'>

                {/* 1 */}
                <div className='flex flex-col gap-[30px] md:gap-[57px]'>

                    <div className='flex gap-[30px]'>
                        <FaLocationDot size={24}/>

                        <div>
                            <h2 className='text-[24px] leading-[36px] font-medium'>Address</h2>
                            <p className='text-[19px] md:text-[16px] leading-[19px]'>{dddress.area} <br/> {dddress.CityCountryPostal}</p>
                        </div>
                    </div>


                    <div className='flex gap-[30px]'>
                        <FaPhone size={24}/>

                        <div>
                            <h2 className='text-[24px] leading-[36px] font-medium'>Phone</h2>
                            <p className='text-[19px] md:text-[16px] leading-[19px]'>Mobile: {phone.mobile} <br/> Hotline: {phone.hotline}</p>
                        </div>
                    </div>


                    <div className='flex gap-[30px]'>
                        <MdWatchLater size={24}/>

                        <div>
                            <h2 className='text-[24px] leading-[36px] font-medium'>Working Time</h2>
                            <p className='text-[19px] md:text-[16px] leading-[19px] mt-[7px]'>{workingTime.startEndTimgs} <br/>  {workingTime.startEndTimgs2}</p>
                        </div>
                    </div>

                    
                </div> 



                {/* 2 */}
                <div className='flex flex-col gap-[20px] md:gap-[36px]'>

                     {/* input 1 */}
                    <div className='flex flex-col gap-[7px] md:gap-[22px]'>
                      <label className='text-[14px] md:text-[16px] leading-[24px] font-medium'>Your name</label>
                      <input type='text' placeholder='Abc'  className='w-full md:w-[528px] md:h-[75px] py-[10px] md:py-[26px] px-[29px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px] '/>
                    </div>

                     {/* input 2 */}
                    <div className='flex flex-col gap-[7px] md:gap-[22px]'>
                      <label className='text-[14px] md:text-[16px] leading-[24px] font-medium'>Email address</label>
                      <input type='email' placeholder='Abc@def.com'  className='w-full md:w-[528px] md:h-[75px] py-[10px] md:py-[26px] px-[29px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px] '/>
                    </div>

                     {/* input 3 */}
                    <div className='flex flex-col gap-[7px] md:gap-[22px]'>
                      <label className='text-[14px] md:text-[16px] leading-[24px] font-medium'>Subject</label>
                      <input type='text' placeholder='This is an optional'  className='w-full md:w-[528px] md:h-[75px] py-[10px] md:py-[26px] px-[29px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px] '/>
                    </div>


                      {/* textarea 4 */}
                      <div className='flex flex-col gap-[7px] md:gap-[22px]'>
                      <label className='text-[14px] md:text-[16px] leading-[24px] font-medium'>Message</label>
                      <textarea placeholder='Hi! i’d like to ask about' className='w-full md:w-[528px] h-[120px] py-[26px] px-[30px] text-[#9F9F9F] border-[1px] border-[#9F9F9F] rounded-[10px]'>
                        Hi! id like to ask about</textarea>
                    </div>


                    <Button className='w-[130px] md:w-[237] h-[40px] md:h-[55px] text-[16px] leading-[24px] text-white bg-[#029FAE] hover:bg-[#02a0aee0] mt-[5px] md:mt-[13px]'>Submit</Button>

                </div>
            </div>

        </div>


        {/* bottom div 2 */}
        <div className='w-full h-[150px] flex flex-col md:flex-row items-center gap-[30px] md:gap-[132px] py-[25px] md:py-[100px] 
        px-[30px] md:px-[66px] bg-[#F4F4F4] mt-[63px] '>

             {/* 1 */}
            <div className='flex items-center gap-[10px]'>
                <Image src={"/con1.png"} alt="trophy" width={60} height={60}/>
                <div>
                    <h1 className='text-[25px] leading-[37px] font-semibold text-[#242424]'>High Quality</h1>
                    <p className='text-[20px] leading-[30px] font-medium text-[#898989] mt-[2px]'>{Verifications.highQuality}</p>
                </div>
            </div>

             {/* 2 */}
            <div className='flex items-center gap-[10px]'>
                <Image src={"/con2.png"} alt="trophy" width={60} height={60}/>
                <div>
                    <h1 className='text-[25px] leading-[37px] font-semibold text-[#242424]'>Warranty Protection</h1>
                    <p className='text-[20px] leading-[30px] font-medium text-[#898989] mt-[2px]'>{Verifications.warrantyProtection}</p>
                </div>
            </div>

             {/* 3 */}
            <div className='flex items-center gap-[10px]'>
                <Image src={"/con3.png"} alt="trophy" width={60} height={60}/>
                <div>
                    <h1 className='text-[25px] leading-[37px] font-semibold text-[#242424]'>24 / 7 Support</h1>
                    <p className='text-[20px] leading-[30px] font-medium text-[#898989] mt-[2px]'>{Verifications.support}</p>
                </div>
            </div>

        </div>


       </section>

    </>
  )
}

export default Page