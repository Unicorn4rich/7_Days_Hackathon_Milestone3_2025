import React from 'react'
import Image from "next/image"
// import {category_Data} from "@/components/constant/category"
import { client } from '@/sanity/lib/client'
import Link from "next/link"

async function ImageCard() {

  // Sanity DataBase se aya hua data
  const respo = await client.fetch("*[_type == 'landingPage'][0].allSections[4]{'categoriesDataHeading': categoriesDataHeading,'categoriesCard': categoriesCard[]{'cardImage': cardImage.asset->url,'cardheading': cardheading,'cardProductstext': cardProductstext,}}")

  // export const CategoriesHeading = respo.categoriesDataHeading;


  interface Card {
    cardImage: string; // Image URL
    cardheading: string; // Heading of the card
    cardProductstext: string; // Description or product text
  }

  return (
    <>

        {respo.categoriesCard.map((item: Card, index: number)=> {
            return(
             
          <Link href={`/products/id?cardImage=${item.cardImage}&heading=${item.cardheading}&newPrice=${item.cardProductstext}`} key={index}>
            <div className='
            h-full 
            w-full md:w-[424px] 
            relative transform hover:scale-[1.02] transition-transform duration-500 ease-in-out '>
                <Image src={item.cardImage} alt="image" width={424} height={424}/>

              <div className='
              flex flex-col justify-center
              w-full md:w-[424px] 
              h-[70px] md:h-[85px] 
              text-white 
              bg-[#000000B2] absolute bottom-0 rounded-[4px] left-0 p-[20px]'>
                <h2 className='
               text-[15px]  md:text-[20px] 
                leading-[22px] font-semibold '>{item.cardheading}</h2>
                <p className='
                text-[11px] md:text-[14px] leading-[15px] mt-[8px]'>{item.cardProductstext}</p>
              </div>
           </div>
         </Link>

            )
        })}
        

    </>
  )
}

export default ImageCard