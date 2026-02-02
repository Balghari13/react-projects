import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { initialProducts } from "../data/product";
import { ChevronLeft, TagIcon, Zap, ShoppingCart } from "lucide-react";
import { useCart } from "../context/CardContext";

const ProductDetails = () => {
  const [productDetails, setProductDetails] = useState("");
const {addToCart} = useCart()
  const { id } = useParams();

  useEffect(() => {
    const product = initialProducts.find(
      (product) => product.id === Number(id),
    );
    // console.log(product);

    setProductDetails(product);
  }, [id]);
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 bg-gray-900 min-h-screen rounded-2xl shadow-2xl my-8 p-6 md:p-12 border border-gray-800 ">
        <Link to={"/"}>
          <button className=" cursor-pointer flex items-center text-gray-400 hover:text-orange-400 transition duration-150 mb-12 font-semibold text-lg ">
            <ChevronLeft className="w-6 h-6 mr-1" />
            <span>Back to Products</span>
          </button>
        </Link>

        <div
          className="  grid
  grid-cols-1
  sm:grid-cols-2 gap-4 sm:gap-10 md:gap-10 lg:gap-2"
        >
          <div className="w-full">
            <img
              src={productDetails.image}
              alt={productDetails.name}
              className="w-90 h-90 lg:w-110 lg:h-110 object-cover rounded-2xl shadow-2xl shadow-gray-950/50 border border-gray-800 "
            />
          </div>
          <div className="flex flex-col justify-between">
            <h1 className="text-3xl mb-4 leading-tight tracking-tighter">
              {productDetails.name}
            </h1>
            <p className="text-2xl font-bold text-orange-400 mb-4">
              Rs:{productDetails?.price?.toFixed(2)}
            </p>
            <h2 className="flex items-center gap-2 text-xl text-gray-200 mb-2 border-b border-orange-900/50 pb-2">
              <TagIcon className="w-5 h-5 text-orange-500" />{" "}
              <span>Product Overview</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-3">
              {productDetails.description}
            </p>

            <ul className="bg-gray-800 rounded-xl text-gray-300 space-y-3  border border-gray-700 p-4">
              <li className="flex items-center space-x-3 gap-2 lg:text-lg">
                <Zap className="w-5 h-5 text-orange-500" /> <span>High Quality, Professional Grade Material</span>
              </li>
               <li className="flex items-center space-x-3 gap-2 md:text-lg">
                <Zap className="w-5 h-5 text-orange-500" /> <span>High Quality, Professional Grade Material</span>
              </li>
               <li className="flex items-center space-x-3 gap-2 md:text-lg">
                <Zap className="w-5 h-5 text-orange-500" /> <span>High Quality, Professional Grade Material</span>
              </li>
            
            </ul>
         
          <div className="mt-5 space-y-4 flex justify-center items-center flex-col ">
             <button
             onClick={()=>addToCart(productDetails)}
              className="mb-5 bg-orange-600 rounded-full  w-full px-5 py-2 font-bold cursor-pointer hover:bg-orange-700 transition duration-200 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider">
             <Link to={'/cart'} className="flex items-center justify-center gap-5">
             <ShoppingCart className="w-6 h-6"/>
        <span>Add to Cart</span>
             </Link>
        
      </button>
      <button className="uppercase border  w-full border-orange-600 text-orange-400 shadow-lg shadow-orange-800/10  font-bold px-5 py-2 cursor-pointer tracking-wider rounded-full hover:bg-orange-900/50 transition duration-200 transform">
       <Link to={'/'}>
       Keep Shopping</Link>
      </button>
          </div>
        </div>
         </div>
      </div>
    </>
  );
};

export default ProductDetails;
