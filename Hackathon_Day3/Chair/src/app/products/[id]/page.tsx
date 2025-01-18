"use client"
import React from 'react'
import Dynamic_Route from '@/app/shopy/page'
import { useSearchParams } from 'next/navigation'

function Dynamic_Page() {
  
    const searchParams = useSearchParams()          // query parameter se variable mein aya hua data nikal rhy hain is function ke zariye
    const cardImage = searchParams.get('cardImage') || '/fallback-image.jpg';
    const heading = searchParams.get('heading')
    const newPrice = searchParams.get('newPrice')
    return (
   <>
   
     <Dynamic_Route query_Parameter={{cardImage, heading, newPrice}} />
   
   </>
  )
}

export default Dynamic_Page