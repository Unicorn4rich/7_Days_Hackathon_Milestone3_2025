import React from 'react'
import { GoPlus } from "react-icons/go";
// import {question_data} from "@/components/constant/questions"
import { client } from '@/sanity/lib/client';

async function Question() {

  // question route sanity data
  const questions_data = await client.fetch("*[_type == 'questions'][0].questionsCard[]{'question': question,'answer': answer,}")

  return (
    <> 

       <section className='w-full mt-[20px] md:mt-[82px] mb-[30px] md:mb-[130px] px-[10px] md:px-[300px]'>

            {/* text div */}
            <div className='text-center'>
                <h1 className='text-[20px] md:text-[48px] leading-[56px] font-bold text-[#000000]'>Questions Looks Here</h1>
                <p className='text-[14px] md:text-[16px] md:leading-[24px]  text-[#9F9F9F]  md:mt-[21px]'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
            </div>


            {/* main div */}
            <div className='w-full grid gap-[12px] md:gap-[24px] grid-cols-1 md:grid-cols-2 grid-rows-3 mt-[50px] md:mt-[72px] '>
                   
                 {questions_data.map((item: { question: string, answer: string }, index: number) => {
                    return (
                  <div className='p-[15px] md:p-[24px] bg-[#F7F7F7]' key={index}>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-[13px] md:text-[18px] leading-[26px] font-bold '>{item.question}</h1>
                        <GoPlus/>
                    </div>

                    <p className='text-[12px] md:text-[16px] md:leading-[24px] text-[#4F4F4F] mt-[10px] md:mt-[24px]'>{item.answer}</p>
                  </div>
                    )
                 })}  
                

            </div>

       </section>

    </>
  )
}

export default Question