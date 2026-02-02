import React from "react";
import { useCart } from "../context/CardContext";
import { X } from "lucide-react";

const CardItem = ({ item }) => {
   const {addToCart, removeFromCart } =
      useCart();
  return (
    <div className="flex flex-col items-center justify-between p-4 sm:p-6 mb-4 bg-gray-900 rounded-xl shadow-2xl border border-gray-800 transition duration-300 hover:border-amber-600/50 ">
     <div className="flex items-center w-full sm:w-auto gap-2">
       <img className="w-24 h-24 object-cover rounded-lg border-2 border-gray-700" src={item.image} alt={item.name} />
      <div className="grow">
        <h1 className="text-xl font-bold text-white line-clamp-1">{item.name}</h1>
           <p className="text-lg text-orange-500 font-semibold">{item.price.toFixed(2)}</p>
      </div>
   
      <div className="flex items-center justify-between sm:justify-end w-full sm:w-2/5 sm:mt-0 space-x-4">

       <div className="flex items-center border border-gray-700 rounded-full overflow-hidden shadow-lg">

         <button className="p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 flex items-center justify-center" onClick={() => addToCart(item)}>+</button>
        <span className="px-3 text-base font-bold ">{item.quantity}</span>
        <button className="p-2 text-gray-400 bg-gray-800 hover:bg-gray-700 transition duration-150 w-8 h-8 flex items-center justify-center" onClick={() => removeFromCart(item.id)}>-</button>
       </div>
       <p className="font-extrabold text-orange-500 text-right hidden md:block">Rs:{(item.price * item.quantity).toFixed(2)}</p>
       <button className="p-3 bg-red-800/20 text-red-400 rounded-full hover:bg-red-800/40 transition duration-150 shadow-md" onClick={()=>removeFromCart(item.id,true)}>
        <X className="w-5 h-5"/>
       </button>
      </div>
     </div>
    </div>
  );
};

export default CardItem;
