"use client"

import React from 'react'
import { Card } from './ui/card'
import Image from "next/image"
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { LuShoppingCart } from 'react-icons/lu'
import Link from "next/link"
import { motion } from 'framer-motion'

export  interface Feat_data {
  id: number,
  badge: boolean,
  badgeText: string,
  badgeColor: string,
  src: string,
  heading: string,
  newPrice: number,
  oldPrice_h2: boolean,
  oldPrice: number,
  shopBg: string,
}

// card link se ham queryparamtrer mein url pe 3 cheezen bhej rhy hain (image, heading, price) 

function ProductCard({data}: {data: Feat_data[]}) {
  return (
    <>

       {data.map((item: Feat_data, index: number)=> {
        return(
            
          <motion.div 
          initial={{ opacity: 0, y: 150 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          key={index}>
          <Link href={`/products/id?cardImage=${item.src}&heading=${item.heading}&newPrice=${item.newPrice}`}> 
          <Card className='
          h-full 
          f-1/2 md:w-full overflow-hidden shadow-none border-none '>

        {/* image div 2 */}
        <div className='transform hover:scale-[1.04] transition-transform duration-500 ease-in-out
        w-full
        h-[220px] md:h-[312px] 
        relative'>
            <Image src={item.src} alt="product1" layout='fill' objectFit='cover' />   {/**layout='fill' objectFit='cover' */}

            {/* for float */}
         {item.badge == true &&
            <Badge className={`
              text-[10px] md:text-[13px] 
              leading-[14px] 
              text-white 
              py-[3px] md:py-[6px] 
              px-[8px] md:px-[10px] ${item.badgeColor}-500 absolute 
              top-[10px] md:top-[20px] 
              left-[10px] md:left-[20px]`}>{item.badgeText}</Badge>
         }
        </div>


        {/* text price div 2 */}
        <div className='flex items-center justify-between 
        mt-[5px] md:mt-[14px] pl-[1px] '>

            <div>
                <p className='
                text-[12px] md:text-[16px]
                leading-[20px] 
                text-[#007580]'>
                  {item.heading}</p>

                <div className='flex items-center gap-1 
                mt-[2px] md:mt-[10px]'>
                  <h2 className='
                  text-[14px] md:text-[18px] 
                  leading-[20px] text-[#272343] font-semibold'>${(item.newPrice).toLocaleString()}</h2>
                  
                  {item.oldPrice_h2 == true && 
                    <h2 className='
                    text-[13px] md:text-[14px] leading-[15px] text-[#9A9CAA] line-through'>${item.oldPrice}</h2>
                  }
                </div>
            </div>

           
            <div>
            <Button className={`
              h-[30px] md:h-[44px] 
              w-[30px] md:w-[44px] 
              rounded-[4px] md:rounded-[8px] bg-[#e0dbdb] hover:bg-[#029FAE] text-black hover:text-white `}>

               <LuShoppingCart size={26}  className='text-[10px] md:text-[24px] '/>

            </Button>
           </div>
          

        </div>

          </Card>
          </Link>
          </motion.div>
        )
       })}
      

    </>
  )
}

export default ProductCard