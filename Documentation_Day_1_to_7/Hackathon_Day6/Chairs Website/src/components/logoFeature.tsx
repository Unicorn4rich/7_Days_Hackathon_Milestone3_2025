import React from 'react'
import Image from "next/image"
import ProductCard from './productCard'
// import {featureProduct_Data} from "@/components/constant/featureProduct"
import { client } from '@/sanity/lib/client'


async function LogoFeature() {

   const resLogo = await client.fetch(" *[_type == 'landingPage'][0].allSections[3]{'logo1': logo1.asset->url, 'logo2': logo2.asset->url, 'logo3': logo3.asset->url,'logo4': logo4.asset->url,'logo5': logo5.asset->url,'logo6': logo6.asset->url,'logo7': logo7.asset->url,}")

  const res = await client.fetch("*[_type == 'landingPage'][0].allSections[1]{'featureProductsHeading': featureProductsHeading,'featureCards': featureCards[]{'cardImg': cardImg.asset->url,'featureCardHeading': featureCardHeading,'featureCardNewPrice': featureCardNewPrice,'featureCardOldPrice': featureCardOldPrice,},}")

  const F_Data = res.featureCards.map((card: {cardImg: string, featureCardHeading: string, featureCardNewPrice: string, featureCardOldPrice: boolean, }, index: number) => ({ // component ko data pass karne ke liye customize kiyya hai.
    id: index, 
    badge: false, 
    badgeText: '', 
    badgeColor: '', 
    src: card.cardImg,
    heading: card.featureCardHeading,
    newPrice: card.featureCardNewPrice,
    oldPrice_h2: card.featureCardOldPrice ? true : false, 
    oldPrice: card.featureCardOldPrice,
    shopBg: '' 
  }));
  
  return (
    <>

       <section className='w-full flex flex-col 
       mt-[53px]'>
        
        {/* logos div */}
        <div className='
        overflow-x-auto 
        px-[10px]
        flex 
        items-center 
        gap-[25px] md:gap-[100px] '>

            <Image src={resLogo.logo1} alt="logo1" width={85} height={87}/>
            <Image src={resLogo.logo2} alt="logo2" width={107} height={109}/>
            <Image src={resLogo.logo3} alt="logo3" width={135} height={139}/>
            <Image src={resLogo.logo4} alt="logo4" width={63} height={65}/>
            <Image src={resLogo.logo5} alt="logo5" width={98} height={101}/>
            <Image src={resLogo.logo6} alt="logo6" width={113} height={115}/>
            <Image src={resLogo.logo7} alt="logo7" width={84} height={87}/>

        </div>


        {/* feature products */}
        <div className='flex justify-center flex-col 
        mt-[20px] md:mt-[24px]
        px-[10px] md:px-[0px]'>
            
            {/* heading */}
            <h1 className='
            text-[25px] md:text-[32px] leading-[35px] font-semibold text-[#272343]'>{res.featureProductsHeading}</h1>


            {/* products main div */}
            <div className='w-full md:h-[377px] 
            grid 
            grid-cols-1 md:grid-cols-4 
            gap-[24px] 
            mt-[20px] md:mt-[40px]'>

                {/* product card */}
                <ProductCard data={F_Data} />
            </div>

        </div>

       </section>

    </>
  )
}

export default LogoFeature



// Origenal =>  const res = await client.fetch("*[_type == 'landingPage'][0].allSections[1]{'featureProductsHeading': featureProductsHeading,'featureCards': featureCards[]{'cardImg': cardImg.asset->url,'featureCardHeading': featureCardHeading,'featureCardNewPrice': featureCardNewPrice,'featureCardOldPrice': featureCardOldPrice,},}")
// Customize =>   const res = await client.fetch("*[_type == 'landingPage'][0].allSections[1]{'featureProductsHeading': featureProductsHeading,'featureCards': featureCards[]{'src': cardImg.asset->url,'heading': featureCardHeading,'newPrice': featureCardNewPrice,'oldPrice_h2': featureCardOldPrice,},}")
