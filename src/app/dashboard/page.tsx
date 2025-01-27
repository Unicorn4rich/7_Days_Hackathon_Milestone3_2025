import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

function DashBoard() {
  return (
    <>
    
     <div className='mt-[40px] mb-[40px] px-[10px] md:px-[300px]'>
        <h1 className='text-[21px] md:text-[35px] font-semibold'>Welcom to your Dashboard</h1>

        <div className='flex items-center gap-[15px] md:gap-[20px] text-[15px] md:text-[20px] font-semibold mt-[20px]'>

            <div className='w-[60px] h-[60px] rounded-full overflow-hidden relative'>
             <Image src={'/shoaib.png'}  alt="Profile" layout='fill' objectFit='cover'/>
            </div>

            <div>
                <h1>Shoaib Khan</h1>
                <p>sk9952908@gmail.com</p>
            </div>
        </div>

        <Button className='w-[100px] md:w-[300px] mt-[20px]
        p-[1px] text-[14px] md:text-[16px]'>Log Out</Button>
     </div>
    
    </>
  )
}

export default DashBoard