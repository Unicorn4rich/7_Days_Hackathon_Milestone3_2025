import React from 'react'
import ProductCard from './productCard'
// import { OurProduct_Data } from './constant/ourProduct'
import { client } from '@/sanity/lib/client'

async function OurProduct() {

  const OurProductSanity_data = await client.fetch(" *[_type == 'landingPage'][0].allSections[6]{'ourProductsHeading': ourProductsHeading,'ourProductCards': ourProductCards[]{'ourCardImg': ourCardImg.asset->url,'ourCardHeading': ourCardHeading,'ourCardNewPrice': ourCardNewPrice,'ourCardOldPrice': ourCardOldPrice,},}")

  const OurPr_Data = OurProductSanity_data.ourProductCards.map((card: {ourCardImg: string, ourCardHeading: string, ourCardNewPrice: string, ourCardOldPrice: boolean}, index: number) => ({ // component ko data pass karne ke liye customize kiyya hai.
    id: index, 
    badge: false, 
    badgeText: '', 
    badgeColor: '', 
    src: card.ourCardImg,
    heading: card.ourCardHeading,
    newPrice: card.ourCardNewPrice,
    oldPrice_h2: card.ourCardOldPrice ? true : false, 
    oldPrice: card.ourCardOldPrice,
    shopBg: '' 
  }));


  return (
    <>

       <section className='
       px-[10px] md:px-[0px]
       w-full 
       mt-[40px] md:mt-[173px] 
       mb-[60px] md:mb-[136px]'>

        {/* heading */}
        <div>
            <h1 className='text-[25px] md:text-[32px] leading-[35px] text-center font-semibold text-[#272343]'>{OurProductSanity_data.ourProductsHeading}</h1>
        </div>


        {/* our product main div */}
        <div className='
        w-full 
        grid 
        gap-y-[22px] md:gap-y-[30px]
        gap-[10px] md:gap-[24px] 
        grid-cols-2 md:grid-cols-4 
        grid-rows-4 md:grid-rows-2 
        mt-[20px] md:mt-[74px]'>
            <ProductCard data={OurPr_Data}/>
        </div>


       </section>

    </>
  )
}

export default OurProduct