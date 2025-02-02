import { Button } from '@/components/ui/button'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Checkout() {
  return (
    <>
      <section className=' flex justify-between px-[300px] bg-[#fcfafa] mt-[200px] mb-[200px]'>

         <form className='w-[640px]'>
            <h1 className='text-[25px] font-semibold '>How would you like to get your Order</h1>
            <p className='text-[#6e6e6e] font-medium my-[20px]'>Custom regulation for Pakistan require a copy of the trcipients KYC The address on the KYC needs to match the shipping address</p>

            <div className='flex items-center gap-[10px] p-[10px] w-[640px] border black-[1px] rounded-[10px] bg-white'><input type='radio' className='size-[25px] '/> <h2 className='text-[18px] font-semibold'>Deliver It</h2></div>

            <h1 className='text-[20px] font-semibold mt-[20px] mb-[15px]'>Enter your Deatils:</h1>

            {/* inputs div */}
            <div className='flex flex-col gap-[17px]'>
                <input type="text" placeholder='Enter Your Name'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <input type="email" placeholder='Enter Your Email'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <input type="number" placeholder='Enter Your Phone Number'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <input type="text" placeholder='Enter Your Address'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <input type="text" placeholder='Describe Your City'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>

                <div className='flex items-center justify-between '>
                    <input type="text" placeholder='Postal Code' className='w-[315px] p-[11px] shadow border black-[0.5px] rounded-[10px]'  />
                    <input type="text" placeholder='Locality' className='w-[315px] p-[11px] shadow border black-[0.5px] rounded-[10px]'  />
                </div>

                <h2 className='text-[20px] font-semibold mb-[-10px]'>Whats Your PAN?</h2>
                <input type="number" placeholder='PAN'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px]'/>
            </div>

            <p className='text-[#6e6e6e] font-medium mt-[5px]'>Enter your PAN to enable payment with UPI. Net Banking or local card method</p>

            <div className='flex flex-col gap-[2px]'>
              <div className="flex items-center gap-[10px] mt-[25px] text-[17px] font-normal ">
                <input type='checkbox' className='size-[20px]'/>
                <p>Save PAN details to Comforty Profile</p>
              </div>

              <div className="flex gap-[10px] text-[16px] font-normal ">
                <input type='checkbox' className=' size-[38px] mt-[-2px] '/>
                
                <p>I have read and consent to eShopWorld processing my information in accordance with Privacy Statement and Cookie Policy. eShopWorld is a trusted Comforty partner.</p>
              </div>

              <Button className='rounded-full mt-[20px] py-[10px]'>Continue</Button>

            </div>

         </form>

         {/* Order Summary */}
         <div className='w-full md:w-[350px] h-[295px] text-[#111111]'>
            <h1 className='text-[20px] md:text-[21px] leading-[33px]'>Order Summary</h1>

            <div className='flex items-center justify-between mt-[25px]'>
                <p className='text-[15px] leading-[28px]'>Subtotal</p>
                <h2 className='text-[14px] leading-[24px] font-medium'>$ 8</h2>
            </div>

            <div className='flex items-center justify-between mt-[8px]'>
                <p className='text-[14px] md:text-[15px] leading-[28px]'>Estimated Delivery & Handling</p>
                <h2 className='text-[15px] leading-[28px] font-medium'>Free</h2>
            </div>

            <div className='w-full h-[62px] flex items-center justify-between border-t-[1px] border-b-[1px] mt-[20px]'>
                 <p className='text-[15px] leading-[28px]'>Total</p>
                 <h2 className='text-[14px] leading-[24px] font-medium'>$ 9999999 </h2>
            </div>

            <p className='text-[14px] text-[#6e6e6e]'>(The total reflects the price of your order, including all duties and taxes)</p>

            <div className='flex items-center gap-[20px] mt-[20px]'>
              <div>
                <Image src={"/products/product2.png"} alt="Product" width={70} height={70} />
              </div>

              <div>
                <h1>Pink Chair</h1>
                <h3>Qty 4</h3>
                <p>$ 888</p>
              </div>
            </div>

            {/* button */}

             <Link href={"!"} >
               <Button className='w-full md:w-[334px] h-[50px] md:h-[60px] text-[15px] leading-[24px] font-medium text-white mt-[25px] md:mt-[32px] py-[18px] px-[100px] rounded-[30px] bg-[#029FAE]'>Member Checkout</Button>
            </Link>
        </div>

      </section>
    </>
  )
}

export default Checkout