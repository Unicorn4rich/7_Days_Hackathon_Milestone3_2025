import React from 'react'

function Checkout() {
  return (
    <>
      <section className='px-[300px] bg-[#fcfafa] mt-[200px] mb-[200px]'>

         <form className='w-[640px]'>
            <h1 className='text-[25px] font-semibold '>How would you like to get your Order</h1>
            <p className='text-[#6e6e6e] font-medium my-[20px]'>Custom regulation for Pakistan require a copy of the trcipients KYC The address on the KYC needs to match the shipping address</p>

            <div className='flex items-center gap-[10px] p-[10px] w-[640px] border black-[1px] rounded-[10px] bg-white'><input type='radio' className='size-[25px] '/> <h2 className='text-[18px] font-semibold'>Deliver It</h2></div>

            <h1 className='text-[20px] font-semibold mt-[20px] mb-[15px]'>Enter your name and address:</h1>

            {/* inputs div */}
            <div className='flex flex-col gap-[17px]'>
                <input type="text" placeholder='First Name'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <input type="text" placeholder='Last Name'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <input type="text" placeholder='Address Line 1'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <p className='leading-0 text-[#616060]'>we do not ship to P.O. boxes </p>
                <input type="text" placeholder='Address Line 2'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>
                <input type="text" placeholder='Address Line 3'  className='w-[640px] p-[11px] shadow border black-[0.5px] rounded-[10px] '/>

                <div className='flex items-center justify-between '>
                    <input type="text" placeholder='Postal Code' className='w-[315px] p-[11px] shadow border black-[0.5px] rounded-[10px]'  />
                    <input type="text" placeholder='Locality' className='w-[315px] p-[11px] shadow border black-[0.5px] rounded-[10px]'  />
                </div>
            </div>
         </form>

      </section>
    </>
  )
}

export default Checkout