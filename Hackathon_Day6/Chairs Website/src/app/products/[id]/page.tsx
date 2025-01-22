// "use client"
import React from 'react'
import Dynamic_Route from '@/app/shopy/page'
// import { useSearchParams } from 'next/navigation'

async function Dynamic_Page({searchParams}: {searchParams: Promise<{  // ye server component pe query parameter leny ka tariqa hai.
  cardImage: string,
  heading: string,
  newPrice: number,
}>}) {
  
  const {cardImage, heading, newPrice } = await searchParams


//<--------------------------------Another method to et query parameter values-------------------------------->    

// query parameter ka data sirf ham in 4 lines ki wajah se bhi nikaal sakty hain opar parameter mein ham alag tariqe se nikal rhy hain agr opar waly parameters ko mita den to sirf in 4 lines se bhi kaam ho jaega.  
    // const searchParams = useSearchParams()          // query parameter se variable mein aya hua data nikal rhy hain is function ke zariye
    // const cardImage = searchParams.get('cardImage') || '/fallback-image.jpg';
    // const heading = searchParams.get('heading')
    // const newPrice = searchParams.get('newPrice')

//<---------------------------------------------------------------------------------------------------------->  




    return (
   <>
   
     <Dynamic_Route query_Parameter={{cardImage, heading, newPrice}} />
   
   </>
  )
}

export default Dynamic_Page