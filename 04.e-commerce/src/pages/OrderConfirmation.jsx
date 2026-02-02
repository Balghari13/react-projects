import React from 'react'
import { CheckCircle } from "lucide-react";
import {Link} from "react-router-dom"
const OrderConfirmation = ({deliveryDetails}) => {
  return (
    <div className='container mx-auto md:px-8  px-4 pt-12'>
      <div className='p-12 bg-gray-900 rounded-3xl shadow-2xl max-w-2xl mx-auto text-center mt-12 border border-green-700  '>
        
        <CheckCircle className='w-24 h-24 text-green-500 mx-auto mb-6 drop-shadow-lg'/>
        <h2 className='text-4xl font-extrabold mb-4'>Order Confirmed</h2>
        <p className='text-lg text-gray-300 mb-6'>Your transaction is complete. A confirmation email has been sent to your account</p>

        <div className='p-6 bg-green-900/30 border border-green-700 rounded-xl font-mono text-left inline-block text-green-300 text-sm'>
          <p className='font-semibold text-lg mb-1'>hadhja
            {deliveryDetails?.name}
          </p>
          <p>{deliveryDetails?.address}</p>
          <p>{deliveryDetails?.city}, {deliveryDetails?.zip}</p>
           <button className="uppercase border  border-orange-600 bg-orange-500 shadow-lg shadow-orange-800/10  font-bold px-5 py-2 mt-2 cursor-pointer tracking-wide rounded-full hover:bg-orange-900/50 transition duration-200 transform">
       <Link to={'/'}>
      Continue Shopping</Link>
      </button>
        </div>
      </div>
    </div>
  )
}

export default OrderConfirmation