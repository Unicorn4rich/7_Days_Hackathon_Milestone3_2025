
// import { Product_Data } from '@/components/constant/productsPage'
import ProductCard from '@/components/productCard'
import { client } from '@/sanity/lib/client'
import ProductBot from '@/components/productBot'
import { fetchCardsData } from '@/services/mockApi';
import { ChevronDown } from 'lucide-react';




async function Product_Page(){

//<---------------------------------------------------------------------------------------------------------------->  
// MockApi data fetching and using for cards.

interface Product {
  _id: string;
  title: string;
  inventory: number;
  category: {
    _ref: string;
    _type: string;
  };
  image: string;
  description: string;
  badge: string | null;
  priceWithoutDiscount: number | null;
  tags: string[];
  price: number;
}



  const res = await client.fetch<Product[]>(`*[_type == "products"]{
  _id,
  title,
  badge,
  inventory,
  priceWithoutDiscount,
  "category": category._ref,
  'image': image.asset->url,
  tags,
  price,
  description,
}`)

    // console.log("🥵", res); // succesfully fetched data
  
    if(!res || res.length === 0){ // res agr nahi aya ya phir khali hai to iske andar rakhy fetched functionko chala do.
      await fetchCardsData()
    }

// name change ka rrhy hain property ke taky card ka component alag alag pages data ko aik sath chala saky.
     const Product_data = res.map((item: Product, index: number)=> ({ // loop for name changing
    id: index,
    badge: false,
    badgeText: '',
    badgeColor: '',
    src: item.image,
    heading: item.title,
    newPrice: item.price,
    oldPrice_h2: item.priceWithoutDiscount ? true : false,
    oldPrice: item.priceWithoutDiscount ?? 0,
    shopBg: '',
  }))


  return (
    <>

       <section className='w-full mt-[30px] px-[10px] md:px-[300px] md:mt-[57px]'>

        {/* heading */}
       <div>
            <h1 className='text-[27px] md:text-[32px] leading-[35px] font-semibold text-[#272343]'>Our Products</h1>
      </div>


        {/* Category, Filter, Sort */}
        <div className='
        flex 
        flex-col md:flex-row
        items-center justify-between shadow gap-[25px] md:gap-[0px] mt-[30px] md:mt-[50px] border-[#cccaca15] border-[1px] p-[10px]'>

          {/* category */}
          <div>
          <h1 className='text-[17px] md:text-[22px] font-semibold'>Category</h1>

           <div className='flex items-center justify-center gap-[17px] mt-[10px] md:mt-[15px]'>
          
          <div>
            <div>
            <div className='flex items-center justify-start gap-[5px] md:gap-[6px]'><input type="checkbox" id="chair" className='w-[11px] md:w-[14px] h-[13px] md:h-[15px]'/> <label htmlFor="26fd7176-3c4d-40fc-a73a-3b85a9b5e15f" className='text-[12px] md:text-[17px] font-semibold'>Wing Chair</label></div>

            <div className='flex items-center justify-start gap-[5px] md:gap-[6px]'><input type="checkbox" id="chair" className='w-[11px] md:w-[14px] h-[13px] md:h-[15px]'/> <label htmlFor="407a8583-6203-4f61-becf-8e8b4c5461b6" className='text-[12px] md:text-[17px] font-semibold'>Wooden Chair</label></div>
            </div>


            <div>
            <div className="flex items-center justify-start gap-[5px] md:gap-[6px]"><input type="checkbox" id="chair" className='w-[11px] md:w-[14px] h-[13px] md:h-[15px]'/> <label htmlFor="b5710116-09af-4d0e-aa9a-dcd02fe919a9" className='text-[12px] md:text-[17px] font-semibold'>Desk Chair</label></div>

            </div>
          </div>



           </div>
         
          </div>

          {/* Filter */}
          <div className='flex flex-col justify-center'>
          <h1 className='text-[17px] md:text-[20px] font-semibold mb-[10px] md:mb-[15px]'>Filter By Price</h1>
            <div className='flex items-center w-[230px] md:w-[240px] border-black border-[1px] rounded-full p-[1px]'><input type='radio' className='w-[20px] h-[14px] md:h-[20px]'/></div>

            <div className='flex items-center md:justify-center gap-[50px] md:gap-[100px] text-[12px] md:text-[17px] font-semibold'>
              <h2>From <span>$0</span></h2>
              <h2>To <span>$9000</span></h2>
            </div>
          </div>
         


          {/* Sort */}
          <div className='flex items-center justify-between gap-[12px] md:gap-[20px]'>
            <h1 className='text-[15px] md:text-[20px] font-semibold'>Sort By:</h1>

            <div className='border-black border-[1px] p-[4px] md:p-[8px] px-[8px]'>

                  <div className='flex items-center gap-[100px] md:gap-[200px] focus:outline-none  hover:cursor-pointer text-[13px] md:text-[16px]'>
                    New

                    <ChevronDown size={24} className='hover:cursor-pointer size-[20px] md:size-[24px] ' />
                  </div>
            </div>
          </div>

        </div>


        {/* Cards main */}
        <div className='w-full grid grid-cols-2 md:grid-cols-4 h-[640px] md:h-auto overflow-y-auto md:overflow-visible  gap-x-[8px] md-gap-x-[10px] gap-y-[25px] md:gap-y-[70px] grid-rows-3 mt-[10px] md:mt-[40px] '>
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

export default Product_Page
