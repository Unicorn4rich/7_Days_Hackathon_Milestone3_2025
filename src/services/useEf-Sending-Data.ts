"use client"

import { useEffect } from "react"
import { Sending_UserData_ToSanity } from "./userApi"

export function useEf_Sending_Data(){
    useEffect(()=>{
        Sending_UserData_ToSanity()
      },[])
  
}