"use client"

// import { Product_Data } from '@/components/constant/productsPage'
import ProductCard from '@/components/productCard'
import React, { useEffect, useState} from 'react'
import { client } from '@/sanity/lib/client'
import { fetchCardsData } from '@/services/mockApi'
import ProductBot from '@/components/productBot'


// interface Product_data {  // old sanity interface
//   cardImg: string,
//   cardHeading: string,
//   cardNewPrice: number,
//   cardOldPrice?: number,
// }

interface card {
  name: string,
  price: number,
  description: string,
  image: string
} 


function Product_Page2() {

  // for Top Cards sanity data inputs Old...
  // const productRoute_data  = await client.fetch("*[_type == 'productPage'][0].sections[0].card[]{'cardImg': cardImg.asset->url,'cardHeading': cardHeading,'cardNewPrice': cardNewPrice,'cardOldPrice': cardOldPrice,}");

  const [cards, setCards] = useState<card[]>([]);

  useEffect(()=>{
     const fetchCards = async () => {

      try{
      // Api data fetching and using for cards New 
      const productRoute_data: card[]  = await client.fetch("*[_type == 'product'][]{name, price, description,'image': image.asset->url,}");

      setCards(productRoute_data)

      if(!productRoute_data || productRoute_data.length === 0){
        await fetchCardsData()  // ye data ko sanity pe bhejega.

        const productRoute_data: card[]  = await client.fetch("*[_type == 'product'][]{name, price, description,'image': image.asset->url,}");

       setCards(productRoute_data)
  }

    } catch (error){
      console.error("Fetching data Is Crashed", error)
    }
}

     fetchCards()
  },[cards])


  const Product_data = cards.map((item: card, index: number)=> ({ // loop for name changing
    id: index,
    badge: false,
    badgeText: '',
    badgeColor: '',
    src: item.image,
    heading: item.name,
    newPrice: item.price,
    oldPrice_h2: item.price ? true : false,
    oldPrice: item.price,
    shopBg: '',
  }))


  return (
    <>

       <section className='w-full mt-[30px] px-[10px] md:px-[300px] md:mt-[57px]'>

        {/* heading */}
       <div>
            <h1 className='text-[27px] md:text-[32px] leading-[35px] font-semibold text-[#272343]'>Our Products</h1>
      </div>


        {/* Cards main */}
        <div className='w-full grid grid-cols-2 md:grid-cols-4 h-[640px] md:h-auto overflow-y-auto  gap-x-[8px] md-gap-x-[10px] gap-y-[25px] md:gap-y-[70px] grid-rows-3 mt-[10px] md:mt-[40px] '>
          <ProductCard data={Product_data} />
        </div>

        
        {/* bottm images */}
         <div>
           <ProductBot/>
         </div>

       </section>
    
    </>
  )
}

export default Product_Page2
