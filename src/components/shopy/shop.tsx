"use client"

import React from 'react'
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { FiShoppingCart } from "react-icons/fi";
import Feature from '@/components/feature';
import  Link  from 'next/link';
import { MdEdit, MdOutlineDriveFileRenameOutline, MdOutlineMarkEmailRead } from 'react-icons/md';
import { RiMessage2Line } from 'react-icons/ri';
import { FaRegCheckCircle, FaRegUserCircle, FaTrash } from 'react-icons/fa';
import { LiaStarSolid } from 'react-icons/lia';



interface QueryParameter {
  cardImage?: string | null;
  heading?: string | null;
  newPrice?: number | null;
}


export default function Dynamic_Route({ query_Parameter }: { query_Parameter: QueryParameter }) {

    // const {cardImage, heading, newPrice } = await query_Parameter;
 

  return (
    <>
       <section className='md:mt-[50px] p-[10px] md:px-[300px]'>

        {/* first div */}
        <div className='flex flex-col md:flex-row gap-[5px] md:gap-[111px]'>
            <div>
            {query_Parameter?.cardImage && <Image src={query_Parameter.cardImage} alt="chairi" width={675} height={607}/>}
            </div>

            {/* text */}
            <div>
                <div className='w-[400px]'>
                <h1 className='text-[25px] md:text-[60px] leading-[66px] font-bold text-[#272343]'>{query_Parameter.heading}</h1>
                </div>

                <div>
                 <Button className='text-[13px] md:text-[20] leading-[22] font-semibold text-white bg-[rgb(2,159,174)] mt-[0px] md:mt-[32px] rounded-[100px]'>${query_Parameter.newPrice}.00 USD</Button>
                 <p className='line-through text-[15px] md:text-[21px] inline-block ml-[15px] text-[gray]'>$30</p>
                </div>

                {/* revews */}
                <div className='flex items-center gap-[5px] md:gap-[10px] mt-[22px] md:mt-[35px]'>
                  <div className='flex items-center'>
                    <LiaStarSolid size={24} color='red' className='size-[18px] md:size-[24px]'/>
                    <LiaStarSolid size={24} color='red' className='size-[18px] md:size-[24px]'/>
                    <LiaStarSolid size={24} color='red'className='size-[18px] md:size-[24px]'/>
                    <LiaStarSolid size={24} color='red' className='size-[18px] md:size-[24px]'/>
                    <LiaStarSolid size={24} className='size-[18px] md:size-[24px]'/>
                    <LiaStarSolid size={24} className='size-[18px] md:size-[24px]'/>
                  </div>
                  <div><span className='text-[16px] md:text-[21px]'>(4.5)</span></div>
                </div>

                {/* saved */}
                <div className='mt-[10px] text-[15px] md:text-[22px] font-medium'>
                  You Saved <Button className='w-[40px] md:w-[50px] h-[24px] md:h-[33px] bg-[#26f726] text-[15px] md:text-[20px]'>$13</Button> From This Item
                </div>

                <div className='w-full md:w-[400px] text-[22] text-center md:text-start leading-[33px] text-[#272343] pt-[8px] md:pt-[37px] border-t-[1px] mt-[15px]'>
                    <p> <b>{query_Parameter.heading}</b> Designed for both relaxation and productivity, this chair effortlessly blends comfort and style. Its ergonomic design ensures lasting support for any activity or space</p>
                </div>

           {/* Button Link*/}
              <Link href={`/cart?cardImage=${query_Parameter.cardImage}&heading=${query_Parameter.heading}&newPrice=${query_Parameter.newPrice}`}>
                <Button className='w-full md:w-[212px] h-[55px] md:h-[63px] flex items-center gap-[9px] text-[#FFFFFF] bg-[#029FAE] mt-[20px] md:mt-[32px]'>
                    <FiShoppingCart size={29} color='white'/>

                    <button className='text-[20px] leading-[22px] font-medium'>
                        Add To cart
                    </button>
                </Button>
              </Link>

            </div>
        </div>


        {/* feature products */}
        <div className='w-full mt-[50px] md:mt-[123px] mb-[10px] md:mb-[141px]'>

            <div className='text-[#000000] font-bold flex items-center justify-between'>
                <h1 className='text-[20px] md:text-[28px] leading-[33px]  tracking-[20%]'>Featured Products</h1>

                <p className='text-[13px] md:text-[18px] leading-[21px] underline '>View all</p>
            </div>


            {/* main div */}
            <div className='w-full h-[600px] overflow-y-auto md:overflow-y-visible md:h-[306px] flex justify-center items-center flex-col md:flex-row gap-[18px] mt-[40px] md:mt-[69px]'>
                <Feature/>
            </div>
        </div>

        {/* comment */}
      <div className='flex flex-col md:flex-row md:items-center gap-[20px] md:gap-[70px] mt-[50px]'>

        <div className='flex flex-col justify-start'>
           <div className='flex items-center'>
                    <LiaStarSolid size={24} color='gold' className='size-[20px] md:size-[24px]'/>
                    <LiaStarSolid size={24} color='gold' className='size-[20px] md:size-[24px]' />
                    <LiaStarSolid size={24} color='gold' className='size-[20px] md:size-[24px]'/>
                    <LiaStarSolid size={24} color='gold' className='size-[20px] md:size-[24px]'/>
                    <LiaStarSolid size={24} color='gray' className='size-[20px] md:size-[24px]'/>
                    <LiaStarSolid size={24} color='gray' className='size-[20px] md:size-[24px]'/>
            </div>

             <div className='flex items-center gap-[10px] md:gap-[20px] md:text-[20px] font-semibold mt-[10px] md:mt-[20px]'>
                        <div className='w-[50px] md:w-[60px] h-[50px] md:h-[60px] rounded-full overflow-hidden relative'>
                         <Image src={'/shoaib.png'}  alt="Profile" layout='fill' objectFit='cover'/>
                        </div>
            
                        <div>
                            <div className='flex items-center gap-[5px]'>
                            <h1>Shoaib Khan</h1>
                            <FaRegCheckCircle size={20} color='#26f726' className='size-[15px] md:size-[20px]'/>
                            </div>
                            <p>sk9952908@gmail.com</p>
                        </div>
              </div>
        </div>

      <div className='flex items-center gap-[10px] md:gap-[15px]'>
        <div className='w-[210px] md:w-[800px] bg-[#e2dfdf] px-[13px] p-[3px] md:p-[20px] rounded-full text-[13px] md:text-[19px]'>
          <p>High quality and comfortable Executive Chair</p>
        </div>

        <div className='flex items-center gap-[5px] md:gap-[10px] mb-[30px]'>
           <MdEdit size={24} className='size-[19px] md:size-[24px]'/>
           <FaTrash size={24} className='size-[17px] md:size-[24px]'/>
        </div>
      </div>

      </div>

       {/* Comment write form*/}
            <div className='w-full mt-[50px] border-emerald border-[1px] shadow mb-[40px]'>

              <div className='w-full flex items-center bg-[#272343] text-white  font-semibold gap-[10px] p-[10px] md:p-[15px] text-[15px] md:text-[20px]'>
                <FaRegUserCircle size={26} className='size-[22px] md:size-[26px]'/>
                <h1 >Comment Section</h1>
              </div>

              {/* input box */}
              <form className=' md:mt-[20px] flex flex-col gap-[17px] md:gap-[20px] py-[20px] px-[10px] md:px-[50px]'>

                {/* 1 input */}
                <div className='flex items-center justify-between gap-[5px]'>
                  <div className='flex items-center gap-[4px] md:text-[18px]'>
                    <MdOutlineDriveFileRenameOutline />
                    <label>Name:</label>
                   </div>

                   <input type='text' placeholder='write your name' className='shadow-lg md:w-[1000px] p-[5px] md:p-[10px] md:text-[20px]'/>
                </div>


                {/* 2 input */}
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-[4px] md:text-[20px]'>
                  <MdOutlineMarkEmailRead />
                    <label>Email:</label>
                   </div>

                   <input type='text' placeholder='Enter your email' className='shadow-lg md:w-[1000px] p-[5px] md:p-[10px] md:text-[20px]'/>
                </div>


                {/* 3 input textarea */}
                <div className='md:flex flex-col md:flex-row items-center justify-between gap-[5px]'>
                  <div className='flex items-center gap-[4px] text-[20px]'>
                  <RiMessage2Line />
                    <label>Message:</label>
                   </div>

                   <textarea placeholder='Share your experience' className='shadow-lg w-full md:w-[1000px] h-[100px] p-[5px] md:p-[10px] md:text-[20px] mt-[7px] md:mt-[0px]'/>
                </div>
                <hr/>

                <button className='w-[100px] md:w-[200px] bg-[#029FAE] hover:bg-[#029FAE] md:text-[20px] text-white font-semibold p-[3px] md:p-[7px] rounded-[5px]'>Post</button>

              </form>

            </div>
        

       </section>
    </>
  )
}

