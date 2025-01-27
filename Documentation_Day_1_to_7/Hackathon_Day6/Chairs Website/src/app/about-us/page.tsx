import { Button } from '@/components/ui/button'
import React from 'react'
import Image from "next/image"
import RevCard from '@/components/revCard'
import { client } from '@/sanity/lib/client'

async function Page() {

    // first About and Image Sanity Data section
    const About_Image = await client.fetch("*[_type == 'aboutPage'][0].sections[0]{'aboutHeading': aboutHeading,'aboutDescription': aboutDescription,'aboutImage': aboutImage.asset->url,}")
    const {aboutHeading, aboutDescription, aboutImage} = await About_Image;

    // second Brand Info Cards Sanity Data section
    const Brand_Info_Data = await client.fetch("*[_type == 'aboutPage'][0].sections[1]{'brandInfoHeading': brandInfoHeading,'brandInfoCards': brandInfoCards[]{'cardHeading': cardHeading,'cardDiscription': cardDiscription,}}")
     const {brandInfoHeading, brandInfoCards} = await Brand_Info_Data;

     const Popular_Data = await client.fetch("*[_type == 'aboutPage'][0].sections[2]{'popularProductsHeading': popularProductsHeading,'popularCards': popularCards[]{'cardImage': cardImage.asset->url,'cardHeading': cardHeading,'cardPrice': cardPrice,}}")
      const {popularProductsHeading, popularCards} = await Popular_Data


  return (
    <>

       <section className='w-full py-[20px] md:py-[100px] px-[10px] md:px-[300px]'>

        {/* about div 1 */}
        <div className='flex flex-col md:flex-row items-center justify-center gap-[20px] md:gap-[29px]'>

            {/* 1 */}
            <div className='bg-[#007580] p-[15px] md:p-[64px] text-white transform hover:scale-[1.01] transition-transform duration-500 ease-in-out'>
                <h1 className='text-[21px] md:text-[32px] leading-[38px] font-semibold'>{aboutHeading}</h1>
                    
                <div className='w-full md:w-[495px] text-[14px] md:text-[18px] leading-[21px] mt-[12px]'>
                  <p>{aboutDescription}</p>
                </div>

                <Button className='w-[140px] md:w-[179px] h-[40px] md:h-[56px] bg-[#F9F9F926] mt-[45px] md:mt-[143px] rounded-none'>View collection</Button>
            </div>

            {/* 2 */}
            <div className='w-full md:w-[619px] h-[300px] md:h-[463px] relative'>
                <Image src={aboutImage} alt="chair" layout='fill' objectFit='cover' className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
            </div>
        </div>



        {/* div 2 */}
        <div className='mt-[50px] md:mt-[132px]'>
            <h1 className='text-[24px] md:text-[32px] text-center leading-[35px] font-semibold'>{brandInfoHeading}</h1>

            {/* card revew main div */}
            <div className='w-full h-[160px] md:h-[244px] overflow-x-auto md:overflow-x-visible flex gap-[10px] md:gap-[29px] mt-[30px] md:mt-[48px] relative'>
                <RevCard Brand_Cards={{brandInfoCards}} />
            </div>
        </div>



        {/* div 3 */}
        <div className='mt-[40px] md:mt-[131px]'>
            <h1 className='text-[21px] md:text-[32px] leading-[35px] font-semibold'>{popularProductsHeading}</h1>

            {/* pictures */}
         <div className='h-[462px] flex flex-wrap md:flex-row items-center md:gap-[20px] mt-[20px] md:mt-[43px]'>
             
             {/* div 1 */}
            <div className='md:h-full'>
                <div>
                    <Image src={popularCards[0].cardImage} alt="chairo" width={630} height={375} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <p className='text-[17px] md:text-[20px] leading-[28px] text-[#2A254B] md:mt-[24px] inline md:block'>{popularCards[0].cardHeading}</p>

                <h4 className='text-[18px] leading-[27px] text-[#2A254B] mt-[8px] inline md:block ml-[50px] md:ml-[0px]'>${popularCards[0].cardPrice}.00</h4>
            </div>


            {/* div 2 */}
            <div className='flex items-center gap-[10px] md:gap-[20px]'>

            <div className='h-full'>
                <div>
                    <Image src={popularCards[1].cardImage} alt="chairo" width={305} height={375} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <p className='md:text-[20px] leading-[28px] text-[#2A254B] mt-[5px] md:mt-[24px]'>{popularCards[1].cardHeading}</p>

                <h4 className='text-[15px] font-medium md:font-normal md:text-[18px] leading-[27px] text-[#2A254B] mt-[] md:mt-[8px]'>${popularCards[1].cardPrice}.00</h4>
            </div>


               {/* div 2 */}
               <div className='h-full'>
                <div>
                    <Image src={popularCards[2].cardImage} alt="chairo" width={305} height={375} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </div>

                <p className='md:text-[20px] leading-[28px] text-[#2A254B] mt-[5px] md:mt-[24px]'>{popularCards[1].cardHeading}</p>

                <h4 className='text-[15px] font-medium md:font-normal md:text-[18px] leading-[27px] text-[#2A254B] mt-[] md:mt-[8px]'>${popularCards[1].cardPrice}.00</h4>
            </div>

            </div>

         </div>



        </div>

       </section>

    </>
  )
}

export default Page