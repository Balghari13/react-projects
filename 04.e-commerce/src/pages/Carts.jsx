import { ChevronLeft, Zap } from "lucide-react";
import { useCart } from "../context/CardContext";
import { Link } from "react-router-dom";
import CardItem from "../components/CardItem";

const Carts = () => {
  const { cartCount, cart, cartTotal } =
    useCart();
  console.log(cart);

  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <div>
          <Link
            to={"/"}
            className="flex items-center text-gray-400 hover:text-orange-500 transition duration-300 font-semibold text-lg gap-1"
          >
            <ChevronLeft className="w-6 h-6" />
            <span>Back to Store</span>
          </Link>
        </div>
        <h1 className="text-2xl mb-10 tracking-tight font-bold">
          Shopping Cart ({cartCount})
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-4">
            <div>
              {cart && cart.length > 0
                ? cart.map((item) => <CardItem key={item.id} item={item} />)
                : null}
            </div>
          </div>
          <div className="lg:col-span-1 bg-gray-900 rounded-2xl shadow-2xl border-l-4 border border-gray-800 sticky top-20 h-fit p-8">
            <div className="text-2xl text-orange-500 mb-5 pb-3 font-bold border-b border-y-gray-700">
              <h3>Rs <span className="text-white">Order Total</span></h3>
            </div>
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
              <span className=" text-white">Estimated Total:</span> 
              <span className="text-orange-500">Rs:{cartTotal.toFixed(2)}</span>
            </div>
           </div>
           <Link to={'/Checkout'} className="bg-orange-500 flex items-center justify-center w-full mt-8 py-4 text-white font-extrabold text-xl rounded-full shadow-lg shadow-orange-800/70 cursor-pointer hover:bg-orange-700 transition duration-300 space-x-2 transform hover:ring-4 hover:ring-pink-600/50 uppercase tracking-wider ">
                <Zap className="w-6 h-6"/>
                <span>Proceed Securely</span>
           </Link>
<p className="text-center text-xs mt-4 text-gray-500">All transition are encrypted and secure</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carts;
