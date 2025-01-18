// import { Product_Data } from '@/components/constant/productsPage'
import ProductCard from '@/components/productCard'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'
import Image from "next/image"
import { client } from '@/sanity/lib/client'
import Link from "next/link"

async function page() {

  interface Product_data {
    cardImg: string,
    cardHeading: string,
    cardNewPrice: number,
    cardOldPrice?: number,
  }

  // for Top Cards
  const productRoute_data  = await client.fetch("*[_type == 'productPage'][0].sections[0].card[]{'cardImg': cardImg.asset->url,'cardHeading': cardHeading,'cardNewPrice': cardNewPrice,'cardOldPrice': cardOldPrice,}");

  const Product_data = productRoute_data.map((item:Product_data, index: number)=>({
    id: index,
    badge: false,
    badgeText: '',
    badgeColor: '',
    src: item.cardImg,
    heading: item.cardHeading,
    newPrice: item.cardNewPrice,
    oldPrice_h2: item.cardOldPrice ? true : false,
    oldPrice: item.cardOldPrice,
    shopBg: '',
  }))



  // for bottom Social Info

  const SocialInfo_data = await client.fetch("*[_type == 'productPage'][0].sections[1]{'socialInfoText': socialInfoText,'socialInfoTextTwo': socialInfoTextTwo,'followProducts': {'product1': followProducts.product1.asset->url,'product2': followProducts.product2.asset->url,'product3': followProducts.product3.asset->url,'product4': followProducts.product4.asset->url,'product5': followProducts.product5.asset->url,'product6': followProducts.product6.asset->url}}")
  
  const {product2, product3, product4, product5, product6} = SocialInfo_data.followProducts // destructre
 

  return (
    <>

       <section className='w-full mt-[30px] px-[10px] md:px-[300px] md:mt-[57px]'>

        {/* heading */}
       <div>
            <h1 className='text-[27px] md:text-[32px] leading-[35px] font-semibold text-[#272343]'>Our Products</h1>
      </div>


        {/* Cards main */}
        <div className='w-full grid grid-cols-2 md:grid-cols-4 h-[640px] md:h-auto overflow-y-auto  gap-x-[8px] md-gap-x-[10px] gap-y-[25px] md:gap-y-[70px] grid-rows-3 mt-[10px] md:mt-[40px] '>
          <ProductCard data={Product_data} />
        </div>



        {/* bottom subscribe section */}
        <div className='w-full text-center mt-[40px] md:mt-[173px] px-[5px] md:px-[0px] py-[5px] pb-[30px] md:py-[100px] bg-[#F0F2F3]'>

           <h1 className='text-[18px] md:text-[50px] leading-[58px] font-medium '>{SocialInfo_data.socialInfoText}</h1>


           {/* input and button */}
           <div className='flex items-center justify-center gap-[4px] md:mt-[20px] text-black'>
            
            <div className='border-b-[2px] border-black'>
            <Input type="email" placeholder="Your email"  className='w-[160px] md:w-[643px] h-[32px] border-none border-b-[2px] text-[16px] leadin-[16px] py-[15px] px-[20px]' />
            </div>

            <div className='border-b-[2px] border-black ml-[8px] mb-[2px]'>
            <Button className='w-[90px] text-[16px] leadin-[110%] font-semibold py-[14px] px-[24px] bg-transparent text-black shadow-none'>Subscribe</Button>
            </div>

          </div>



          {/* heading 2 */}
          <h1 className='text-[25px] md:text-[50px] md:leading-[58px] font-medium mt-[30px] md:mt-[70px]'>{SocialInfo_data.socialInfoTextTwo}</h1>


          {/* pictures div */}
            <div className='flex itmes-center justify-center overflow-x-auto md:overflow-x-visible gap-[10px] md:gap-[24px] mt-[20px] md:mt-[60px]'>

              <Link href={`/products/id?cardImage=${SocialInfo_data.followProducts.product1}&heading=Brown Wooden Stool&newPrice=99`}>
                <Image src={SocialInfo_data.followProducts.product1} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
             </Link>

             <Link href={`/products/id?cardImage=${product2}&heading=Brown Sofa Wooden Chair&newPrice=40`}>
               <Image src={product2} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
             </Link>

             <Link href={`/products/id?cardImage=${product3}&heading=Pink Sofa Chair&newPrice=35`}>
               <Image src={product3} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
             </Link>

             <Link href={`/products/id?cardImage=${product4}&heading=White Wooden Chair&newPrice=35`}>
                <Image src={product4} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
             </Link>

             <Link href={`/products/id?cardImage=${product5}&heading=Orrange Plastic Chair&newPrice=35`}>
               <Image src={product5} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
             </Link>

             <Link href={`/products/id?cardImage=${product6}&heading=Sofa with Iron Frame Chair&newPrice=35`}>
               <Image src={product6} alt="pic" width={186} height={186} className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
             </Link>

            </div>
          

        </div>


       </section>
    
    </>
  )
}

export default page