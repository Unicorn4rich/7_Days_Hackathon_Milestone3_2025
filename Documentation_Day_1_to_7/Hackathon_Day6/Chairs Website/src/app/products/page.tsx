
// import { Product_Data } from '@/components/constant/productsPage'
import ProductCard from '@/components/productCard'
import { client } from '@/sanity/lib/client'
import ProductBot from '@/components/productBot'
import { fetchCardsData } from '@/services/mockApi';
import { ChevronDown } from 'lucide-react';




async function Product_Page(){

  // for Top Cards sanity data inputs Old...


  // const productRoute_data: Product_data[]  = await client.fetch("*[_type == 'productPage'][0].sections[0].card[]{'cardImg': cardImg.asset->url,'cardHeading': cardHeading,'cardNewPrice': cardNewPrice,'cardOldPrice': cardOldPrice,}");

  // const Product_data = productRoute_data.map((item: Product_data, index: number)=> ({ // loop for name changing
  //   id: index,
  //   badge: false,
  //   badgeText: '',
  //   badgeColor: '',
  //   src: item.cardImg,
  //   heading: item.cardHeading,
  //   newPrice: item.cardNewPrice,
  //   oldPrice_h2: item.cardOldPrice ? true : false,
  //   oldPrice: item.cardOldPrice ?? 0,
  //   shopBg: '',
  // }))

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
  category,
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
        <div className='flex items-center justify-between mt-[50px] border-[#cccaca] border-[1px] p-[10px]'>

          {/* category */}
          <div>
          <h1 className='text-[22px] font-semibold'>Category</h1>

           <div className='flex items-center justify-center gap-[17px] mt-[15px]'>
          
          <div>
            <div>
            <div className='flex items-center justify-start gap-[6px]'><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Office Chairs</label></div>
            <div className='flex items-center justify-start gap-[6px]'><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Dining Chairs</label></div>
            </div>

            <div>
            <div className="flex items-center justify-start gap-[6px]"><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Outdoor Chairs</label></div>
            <div className='flex items-center justify-start gap-[6px]'><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Kids Chairs</label></div>
            </div>
          </div>

           <div>
           <div>
            <div className='flex items-center justify-start gap-[6px]'><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Gaming Chairs</label></div>
            <div className='flex items-center justify-start gap-[6px]'><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Accent Chairs</label></div>
            </div>

            <div>
            <div className='flex items-center justify-start gap-[6px]'><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Specialty Chairs</label></div>
            <div className='flex items-center justify-start gap-[6px]'><input type="checkbox" id="chair" className='w-[14px] h-[15px]'/> <label htmlFor="chair" className='text-[17px] font-semibold'>Living Room Chairs</label></div>
            </div>
           </div>

           </div>
         
          </div>

          {/* Filter */}
          <div>
          <h1 className='text-[20px] font-semibold mb-[15px]'>Filter By Price</h1>
            <div className='flex items-center w-[240px] border-black border-[1px] rounded-full p-[1px]'><input type='radio' className='w-[20px] h-[20px]'/></div>
            <div className='flex items-center justify-center gap-[100px] text-[17px] font-semibold'>
              <h2>From <span>$0</span></h2>
              <h2>To <span>$9000</span></h2>
            </div>
          </div>


          {/* Sort */}
          <div className='flex items-center justify-between gap-[20px]'>
            <h1 className='text-[20px] font-semibold'>Sort By</h1>

            <div className='border-black border-[1px] p-[8px] px-[8px]'>
               

                  <div className=' flex items-center gap-[200px] focus:outline-none  hover:cursor-pointer'>
                    New
                    <ChevronDown size={24} />
                  </div>

                
            </div>
          </div>

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

export default Product_Page
