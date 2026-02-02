import {ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CardContext";
const ProductCard = ({ product }) => {
  // console.log(product);
const {addToCart} = useCart()
  return (
    <div className="bg-gray-900 rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transition duration-500 border border-gray-800 group hover:scale-[1.03] hover:shadow-orange-900/40 w-full
  max-w-md ">
      <Link to={`/product/${product.id}`} className="relative cursor-pointer overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover object-center transition duration-500 group-hover:scale-110 group-hover:opacity-90"
        />
        <div className="bg-orange-600/90 absolute bottom-0 right-0 px-4 py-2 text-xl font-extrabold rounded-tl-xl shadow-lg">
          Rs:{product.price.toFixed(2)}
        </div>
      </Link>
      <div className="p-5 flex flex-col grow">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-medium mb-2 cursor-pointer hover:text-orange-500 transition duration-200 line-clamp-1 ">
            {product.name}
          </h3>
        </Link>
        <p className="text-gray-400 text-sm mb-4 line-clamp-3 ">
          {product.description}
        </p>
        <div className="flex items-center text-sm text-gray-400 mb-4">
          <span className="border border-gray-700 px-4 py-1 rounded-full bg-gray-800">
            {product.category}
          </span>
        </div>
      </div>

      <button 
      onClick={()=>addToCart(product)}
      className="flex items-center justify-center gap-5 mb-5 bg-orange-600 rounded-full mx-auto w-[90%] px-5 py-2 font-bold cursor-pointer hover:bg-orange-700 transition duration-200 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
        <ShoppingCart className="w-5 h-5"/>
        <span>Add to Cart</span>
      </button>
    </div>
  );
};

export default ProductCard;
