import Cart_Route from '@/components/Cart'
import React, { Suspense } from 'react'

function Cart_Comp() {
  return (
    <>
      
      <Suspense fallback={<div>Loading cart details...</div>}>
      <Cart_Route/>
      </Suspense>
    
    </>
  )
}

export default Cart_Comp