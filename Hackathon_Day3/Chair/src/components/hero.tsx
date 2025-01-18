import React from 'react'
import { Button } from './ui/button'
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image"
import { client } from '@/sanity/lib/client';

async function Hero() {


     const res = await client.fetch("*[_type == 'landingPage'][0]{'heroImg': allSections[0].heroImg.asset->url, 'heroSmHeading': allSections[0].heroSmHeading,'heroHeading': allSections[0].heroHeading,'herobtnText' : allSections[0].herobtnText,}")

     const {heroImg, heroSmHeading, heroHeading, herobtnText} = await res;

  return (
    <>

      <section className='
      w-full 
      flex
      flex-col md:flex-row 
      gap-[40px] md:gap-[0px]
      items-center 
      justify-center md:justify-between 
      pl-[10px] md:pl-[70px] 
      pr-[10px] md:pr-[109px] 
      pt-[40px] md:pt-[115px] 
      pb-[40px] md:pb-[151px] 
      bg-[#F0F2F3]'>

        {/* first heading div */}
        <div className='flex flex-col 
        gap-[10px] md:gap-[24px] text-center md:text-start'>
          <p className='text-[14px] leading-[14px] tracking-[12%] text-[#272343]'>{heroSmHeading}</p>

          <div className='w-[600px]'>
          <h1 className='
          text-[36px] md:text-[60px] 
          leading-[40px] md:leading-[66px] 
          font-bold text-[#272343]'>{heroHeading}</h1>
          </div>

          <Button className='
          w-full md:w-[171px] 
          h-[52px] 
          flex 
          items-center 
          text-[16px] 
          leading-[17px]   Best Furniture Collection for your interior.
          gap-[20px] 
          py-[14px] 
          px-[24px] 
          bg-[#029FAE] 
          mt-[25px]'>
            Shop {herobtnText}
            <FaArrowRightLong size={24}/>
          </Button>
        </div>


        {/* Image div */}
        <div>
          <Image src={heroImg} alt="chair" width={434} height={584} className='
          w-[250px] md:w-[434px]
          h-[260px] md:h-[584px]'/>
        </div>

      </section>

    </>
  )
}

export default Hero