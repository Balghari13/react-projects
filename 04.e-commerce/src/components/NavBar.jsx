import React from "react";
import { House, ShoppingCart } from 'lucide-react';
import {Link} from 'react-router-dom'
import { useCart } from "../context/CardContext";
const NavBar = () => {
  const {cartCount} = useCart()
  return (
    <>
      <header className="bg-gray-950/95 backdrop-blur-md border-b border-orange-900 sticky top-0 shadow-2xl shadow-gray-950/70 z-50 ">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to='/'>
          <div className="flex items-center space-x-3 cursor-pointer ">
                <House className="w-8 h-8 text-orange-400 drop-shadow-lg " />
                <h1 className="text-3xl font-extrabold tracking-widest uppercase ">NSB<span className="text-orange-400">STORE</span></h1>
          </div>
          </Link>
          <nav className="flex items-center space-x-6">
<Link to='/cart' className="bg-amber-500/10 p-3 relative rounded-xl hover:bg-amber-500/20 transition duration-200 border border-orange-400/50 shadow-lg cursor-pointer">
<ShoppingCart className="w-6 h-6 text-orange-500"/>
{cartCount>0 && <span className=" absolute right-0 top-0 inline-flex items-center justify-center px-2 py-1 text-sm font-bold leading-none transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full min-w-6 h-5 ">{cartCount}</span>}
</Link>

          </nav>
        </div>
      </header>
    </>
  );
};

export default NavBar;
