import React from 'react'
import { Card } from './ui/card'
import Image from "next/image"
import { feature_data } from './constant/feature'
import Link from "next/link"

function Feature() {
  return (
    <>
    
       {feature_data.map((item, index) => {
        return(

          <Link href={`/products/id?cardImage=${item.src}&heading=${item.heading}&newPrice=${item.price}`} key={index}>
            <Card className='h-full w-[263px] shadow-none border-none'>

              <div className='w-full h-[263px] transform hover:scale-[1.04] transition-transform duration-500 ease-in-out '>
                <Image src={item.src} alt="image" width={270} height={263} />
              </div>

             <div className='flex items-center justify-between text-[#272343] mt-[15px]'>
                <p className='text-[16px] leading-[20px]'>{item.heading}</p>

               <h3 className='text-[14px] leading-[16px] font-bold'>{item.price}</h3>
             </div>

           </Card>
          </Link>
            
        )
       })}
       
    
    </>
  )
}

export default Feature