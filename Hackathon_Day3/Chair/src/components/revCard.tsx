import React from 'react'
import { Card } from './ui/card'
// import { revCard_data } from './constant/revCard';
import { FaCheck } from "react-icons/fa6";

interface Brand_data {
  cardHeading: string;
  cardDiscription: string
}

async function RevCard({Brand_Cards}: {Brand_Cards: {brandInfoCards: Brand_data[]}}) {

  return (
    <>
  
        {Brand_Cards.brandInfoCards.map((item: Brand_data, index: number)=>{
            return(
         <Card className='h-[150px] md:h-full w-[160px] md:w-[309px] flex flex-col justify-center gap-[8px] md:gap-[12px] bg-[#F9F9F9] p-[10px] md:p-[48px] shrink-0 flex-grow-0 transform hover:scale-[1.02] transition-transform duration-500 ease-in-out ' key={index}>
            <div><FaCheck color='#007580' className='text-[15px] md:text-[24px]'/></div>

            <h1 className='text-[13px] md:text-[20px] leading-[28px] text-[#007580]'>{item.cardHeading}</h1>

            <p className='text-[10px] md:text-[16px] md:leading-[24px] text-[#007580]'>{item.cardDiscription}</p>
         </Card>
            )
        })}
         

    </>
  )
}

export default RevCard