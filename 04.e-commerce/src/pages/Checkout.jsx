import React from 'react'
import { useCart } from '../context/CardContext'
import {MapPin,Package,Zap} from 'lucide-react'
import { useState } from 'react'
import OrderConfirmation from './OrderConfirmation'
import { Link } from 'react-router-dom'

const Checkout = () => {
  const [deliveryDetails, setDeliveryDetails] = useState({
    name:'', address:'', city:'', zip:''
  })
  const [isConfirmed, setIsConfirmed] = useState(false)
  const {cartTotal, clearCart,cart} = useCart()
  const placeholders = {
  name: "Enter your full name",
  city: " City",
  address: "House, Street",
  zip: "Postal Code"
};
const handleChange =(e)=>{
  const {name,value} = e.target
setDeliveryDetails((prev)=> ({...prev, [name]:value}))
}

const handleSubmit = (e) =>{
e.preventDefault();
clearCart()
setIsConfirmed(true)
}
if(isConfirmed)
  return <OrderConfirmation deliveryDetails={deliveryDetails}/>

  return (
    <>
<div className='container mx-auto px-4 ,d:px-8' >
  <h2 className='text-5xl font-extrabold mb-10 tracking-tight'>Finalize Order</h2>

  <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

    <div className='lg:col-span-2 p-8 bg-gray-900 rounded-2xl border border-gray-800'>
     
      <h1 className='text-3xl font-bold text-orange-500 mb-6 flex items-center space-x-3 border-b border-gray-700 pb-4'>
        <MapPin className='w-7 h-7'/> <span>Shipping Address</span>
      </h1>
      <form className='space-y-6' onSubmit={handleSubmit}>
{Object.keys(deliveryDetails).map((key)=>(
  <div key={key}>
<label htmlFor={key}>
  {key === 'zip'? 'Pin Code' : key}
</label>
<input type={key==='zip'?'number':'text'}  id={key} name={key} value={deliveryDetails[key]} required className='mt-1 border block border-gray-700 rounded-xl w-full px-5 shadow-inner py-3 text-white bg-gray-800 placeholder-gray-500  ' placeholder={placeholders[key]} onChange={handleChange}/>
  </div>
))}
<button type='submit' className='w-full flex items-center justify-center bg-orange-500 mt-8 py-4 font-extrabold rounded-full shadow-lg shadow-orange-800/50 cursor-pointer hover:bg-orange-700 transition duration-300 space-x-2 transform uppercase tracking-wider '>
 
  <span>Pay and Confirm Order (Rs:{cartTotal.toFixed(2)})</span>

</button>
      </form>
    </div>
    
    <div>
   <div className="lg:col-span-1 bg-gray-900 rounded-2xl shadow-2xl border-l-4 border border-gray-800 sticky top-20 h-fit p-8">

            <div className="text-2xl text-orange-500 mb-5 pb-3 font-bold border-b border-y-gray-700 flex items-center gap-2">
<Package className='w-6 h-6'/>
              <span className="text-white">Summary</span>
            </div>
<div className='space-y-4 text-gray-400'>
  {cart.map(item=>(
    <div key={item.id} className='flex justify-between items-center text-base border-b border-gray-800 pb-2 '>
      <span className='text-gray-300 truncate '>{item.name}</span>
      <span className='font-medium text-orange-300'>Rs:{(item.price * item.quantity).toFixed(2)}</span>
    </div>
  ))}

           <div className="space-y-4 text-gray-400">
             <div className="flex justify-between text-xl">
              <span>Subtotal:</span> 
              <span className="font-semibold text-white">Rs:{cartTotal.toFixed(2)}</span>
            </div>
             <div className="flex justify-between text-xl">
              <span>Shipping (Express):</span> 
              <span className="font-semibold text-green-500 ">Free</span>
            </div>

             <div className="flex justify-between text-2xl font-extrabold border-t border-y-gray-700 pt-6">
              <span className=" text-white">Total Due:</span> 
              <span className="text-orange-500">Rs:{cartTotal.toFixed(2)}</span>
            </div>
           </div>
</div>
           
          </div>
  </div>
  </div>
  
</div>
    </>
  )
}

export default Checkout