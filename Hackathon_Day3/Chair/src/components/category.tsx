import React from 'react'
import ImageCard from './imageCard'
import Image from "next/image"
import { client } from '@/sanity/lib/client'
import Link from 'next/link'


 async function Category() {

      const respo = await client.fetch("*[_type == 'landingPage'][0].allSections[4]{'categoriesDataHeading': categoriesDataHeading,'categoriesCard': categoriesCard[]{'cardImage': cardImage.asset->url,'cardheading': cardheading,'cardProductstext': cardProductstext,}}")

      const Category2 = await client.fetch("*[_type == 'landingPage'][0].allSections[5]{'categoriesTwoImage1': categoriesTwoImage1.asset->url,'categoriesTwoImage2': categoriesTwoImage2.asset->url,'categoriesTwoImage3': categoriesTwoImage3.asset->url,'categoriesTwoImage4': categoriesTwoImage4.asset->url,'categoriesTwoImage5': categoriesTwoImage5.asset->url,}")
    

  return (
    <section className='w-full 
    mt-[90px] md:mt-[136]
    px-[10px] md:px-[0px]'>

        {/* heading */}
        <h1 className='
        text-[25px] md:text-[32px] leading-[35px] font-semibold text-[#272343]
        '>{respo.categoriesDataHeading}</h1>

        {/* Images main div */}
        <div className='
        w-full 
        h-[424px] 
        flex 
        flex-col md:flex-row
        gap-[20px] md:gap-[24px] 
        mt-[26px] md:mt-[40px]'>
            <ImageCard/>
        </div>


        {/* bottom pictures */}
        <div className='w-full 
        md:h-[648px] 
        grid 
        grid-cols-1 md:grid-cols-2 
        gap-[10px] md:gap-[24px] 
        mt-[500px] md:mt-[229px]'>

            {/* <p className='text-[34px] leading-[39px] transform rotate-190 '>Explore new and popular styles</p> */}

            {/* first full halff picture */}
            <div>
            <Link href={`/products/id?cardImage=${Category2.categoriesTwoImage1}&heading=Compact Orange Plastic Chair&newPrice=120`}>
                <Image src={Category2.categoriesTwoImage1} alt={"picture"} width={648} height={648} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out' />
            </Link>
            </div>


              {/* choty choty div */}
            <div className='
            grid 
            grid-cols-2 
            grid-rows-2 
            gap-[10px] md:gap-[24px] '>
                <div>
                <Link href={`/products/id?cardImage=${Category2.categoriesTwoImage2}&heading=White Cream Sofa Chair&newPrice=50`}>
                    <Image src={Category2.categoriesTwoImage2} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                </Link>    
                </div>
                
                <div>
                  <Link href={`/products/id?cardImage=${Category2.categoriesTwoImage3}&heading=White Wooden Chair&newPrice=35`}>
                    <Image src={Category2.categoriesTwoImage3} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                  </Link>  
                </div>

                <div>
                    <Link href={`/products/id?cardImage=${Category2.categoriesTwoImage4}&heading=Light Brown Sofa Wooden Chair&newPrice=70`} >
                      <Image src={Category2.categoriesTwoImage4} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                    </Link>
                </div>

                <div>
                    <Link href={`/products/id?cardImage=${Category2.categoriesTwoImage5}&heading=White Cream Sofa Chair&newPrice=90`}>
                      <Image src={Category2.categoriesTwoImage5} alt="chair2" width={312} height={312} className='transform hover:scale-[1.02] transition-transform duration-500 ease-in-out'/>
                    </Link>
                </div>
            </div>

        </div>

    </section>
  )
}

export default Category