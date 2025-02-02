"use client"
import React, { useEffect } from 'react'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'

function AdminComponent() {

    // console.log("🤦‍♀️", useUser()) // check Propertys => Get object

    const {isLoaded, user} = useUser()

    // console.log("😈 User", user)             // Object
    // console.log("😁 isSignedIn", isSignedIn) // true
    // console.log("🐵 isLoaded", isLoaded)     // true

    const router = useRouter() // ye karta ye hai ke users ka data lata hai or usko router ke through redirect karta hai.

    useEffect(()=>{
        if(isLoaded){
            const role = (user?.publicMetadata as {role?: string})?.role;  // user object ke andar jo public Metadata hai uske andar hai aik role joke string mein hoga.

            if(!user || role !== 'admin'){ // user agr nahi hai matlab sign-in nahi or wo acces karna chah rha hai or aik user sign-in hai but uska role brbar nahi hai admin ke to
                router.push('/') // usy home pagr pe bhej do.
            }
        }

    },[isLoaded, user, router]) // in 3 cheezo mein se agr koi bhi change hoti hai to useEffect() ka hook chal jaega.


  return (
    <div className='text-[30px] font-semibold text-center'>
        <h1>I am Admin Component</h1>
    </div>
  )
}

export default AdminComponent