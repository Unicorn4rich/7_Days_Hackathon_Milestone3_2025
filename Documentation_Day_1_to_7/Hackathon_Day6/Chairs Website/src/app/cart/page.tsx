"use client"

import React, { Suspense, useEffect, useState } from 'react'
import Image from "next/image"
import { FaRegHeart } from "react-icons/fa";
import { IoTrashOutline } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { useRouter, useSearchParams } from 'next/navigation';


interface Dyn_Data {
    cardImage: string;
    heading: string, 
    newPrice: string,
}

function Cart_Route() {

    const router = useRouter(); // url mein jo query paramater ki values bhejte hain unhy ye hook get karwany ke bad hata deta hai taky hmara url ajeeb sa na dikhy.

    const searchParam = useSearchParams(); // ye aik hook hai jiske andar query parameter ka data aega. 
    const [cartItem, setCartItem] = useState<Dyn_Data[]>([]); // is use state ke array ke andar aa kar new new cart ki values store hongi.


    const [qty, setQty] = useState(1);


    useEffect(()=>{ // component jese hi chalega localStorage ka data get karega or query parameter mein aya hua data bhi. 

      const cart = localStorage.getItem("cart") // localStorage kuch bhi rakhty hain wo sirf string ki form mein rakhty hain isme direct array nahi rakh sakty.
      const upDatedCart = cart ? JSON.parse(cart) : [];  // is method se us string ko dubara se typescript wala array bana diyya jaega. 


     // query parameter variable mein jo values bheji thi unhy hamne nikal liya hai aik hookke zariye client component mein.    
      const cardImage = searchParam.get('cardImage') || '/fallback-image.jpg';
      const heading = searchParam.get('heading');
      const newPrice = searchParam.get('newPrice');


      if(cardImage && heading && newPrice){ // ye condition check karti hai ke jo values aa rhi hain wo agr dublicate nahi hain to unhy aik variable mein store krwa do.
        const isDublicate =  upDatedCart.some((item: Dyn_Data) => item.heading === heading)  // ye method hmare updated array yani jisme hmara data rakha hoga usme jaa kar dekhega agr koi values jo ke (heading) se condition match karti hai to true return karega.

        if(!isDublicate){ // agr waqi mein dublicate values nahi hain to aik naya data bana kar dey do.
            upDatedCart.push({cardImage, heading, newPrice}) // array ke andar ham push kar rhy hain aik object query parameters wala.
        }

        localStorage.setItem("cart", JSON.stringify(upDatedCart)) // jese hi naya data banega to us array ko localStorage ke andar rakh den string ki form mein save kar ke taky ye delete na ho light jane se 😁. 
        setCartItem(upDatedCart) // jo values hamne is (upDatedCart) array mein rakhi thi unhy useState mein bhi save krwa do.

        router.replace('/cart'); // jese hi qury data set ho jaye localStorage or useState mein to wesy hi us bare url ko hata kar uski jagah par ye (cart) show krwa dena.
      }


    },[searchParam, router]) // jab jab searchParam ki values change hon ya router ki to tab tab ye useEffect chalega kiyun ke isy hamne in 2no cheezo ka dependent bana diyya hai.


// Trash delete icon cart function
function handleRemoveItem(index: number){
    const removeCard = [...cartItem] // copy genrate karli cartItems ki.
    removeCard.splice(index, 1) // removeCard ke andar jo ye index number hain usko remove kar do.

    localStorage.setItem("cart", JSON.stringify(removeCard)) // remove hui value ko ?
        setCartItem(removeCard)
}

// Quanity increment and decrement function
function handleQuantity(index: number, e_Num: number){
    setQty(Number(e_Num))
}

  return (
    <>

    <Suspense fallback={<div>Loading cart details...</div>}>
    
     <section className='flex flex-col md:flex-row justify-between mt-[20px] md:mt-[50px] mb-[30px] md:mb-[50px] px-[10px] md:px-[300] gap-[35px] md:gap-0'>

        {/* first div */}
        <div>

            <h2 className='text-[20px] md:text-[22px] leading-[33px] font-medium'>Bag</h2>

        {cartItem.map((item: Dyn_Data, index: number)=>{
                return(
            <div className='w-full md:w-[933px] flex gap-[10px] md:gap-[30px] mt-[25px] pb-[15px] md:pb-[37px] border-b-[1px]' key={index}>

            {/* picture div */}
            <div>
                <Image src={item.cardImage} alt="chair" width={150} height={150} className='w-[110px] md:w-[150px] h-[110px] md:h-[150px] transform hover:scale-[1.04] transition-transform duration-500 ease-in-out'/>
            </div>

            {/* text div */}
            <div>
                <div className='w-full md:w-687 flex items-center gap-[11px] md:gap-[487px]'>
                    <p className='text-[12px] md:text-[16px] leading-[20px] text-[#272343]'>{item.heading}</p>

                    <h2 className='text-[12px] md:text-[15px] leading-[28px] font-medium'>MRP: ${(Number(item.newPrice) * qty).toLocaleString()}</h2>
                </div>

                <p className='text-[12px] md:text-[15px] leading-[28px] text-[#757575] md:mt-[28px]'>Ashen Slate/Cobalt Bliss</p>

                <div className='flex items-center mt-[-5px] md:mt-[0px] gap-[10px] md:gap-[32px] text-[13px] md:text-[15px] md:leading-[28px] text-[#757575]'>
                    <p>Size: <span className='text-black'>L</span></p>
                    <p>Quantity: 
                    <span className='text-black ml-[7px]'>
                      <input type='number' min={1} value={qty} 
                      onChange={(e)=>{ handleQuantity(index, Number(e.target.value))}} 
                      className='bg-white text-black text-[16px] w-12 ' />   
                    </span></p>
                </div>

                {/* icons div */}
                <div className='flex items-center gap-[5px] md:gap-0px] mt-[10px] md:mt-[20px]'>
                  <Button variant="ghost"> 
                    <FaRegHeart className='text-[17px] md:text-[150px]'/>
                  </Button>
                   <Button variant="ghost" onClick={()=>{handleRemoveItem(index)}} >
                    <IoTrashOutline className='text-[17px] md:text-[150px]'/>
                   </Button>
                </div>
            </div>

            </div>
        )
        })}
            

        </div>


        {/* second div 2 */}
        <div className='w-full md:w-[350px] h-[295px] text-[#111111]'>
            <h1 className='text-[20px] md:text-[21px] leading-[33px]'>Summary</h1>

            <div className='flex items-center justify-between mt-[25px]'>
                <p className='text-[15px] leading-[28px]'>Subtotal</p>
                <h2 className='text-[14px] leading-[24px] font-medium'>$198.00</h2>
            </div>

            <div className='flex items-center justify-between mt-[8px]'>
                <p className='text-[14px] md:text-[15px] leading-[28px]'>Estimated Delivery & Handling</p>
                <h2 className='text-[15px] leading-[28px] font-medium'>Free</h2>
            </div>

            <div className='w-full h-[62px] flex items-center justify-between border-t-[1px] border-b-[1px] mt-[20px]'>
               <p className='text-[15px] leading-[28px]'>Total</p>
               <h2 className='text-[14px] leading-[24px] font-medium'>$198.00</h2>
            </div>

            {/* button */}

            <Button className='w-full md:w-[334px] h-[50px] md:h-[60px] text-[15px] leading-[24px] font-medium text-white mt-[25px] md:mt-[32px] py-[18px] px-[100px] rounded-[30px] bg-[#029FAE]'>Member Checkout</Button>
        </div>


     </section>
     </Suspense>


     
    
    </>
  )
}

export default Cart_Route
