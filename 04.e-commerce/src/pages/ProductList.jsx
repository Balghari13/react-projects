import SearchFilter from "../components/SearchFilter";
import CategoryFilter from "../components/CategoryFilter";
import ProductCard from "../components/ProductCard";

import { useCart } from "../context/CardContext";
import { useState } from "react";

const ProductList = () => {
  const { products } = useCart();
  const [searchData, setSearchData] = useState('')
  const [selectedCategory, setSelectedCategory] = useState("All")

const filterProducts = products.filter((product)=>{
  const matchProducts = product.name.toLowerCase().includes(searchData.toLowerCase()) || product.description.toLowerCase().includes(searchData.toLowerCase())

  const matchCategory = selectedCategory === "All" || product.category === selectedCategory

  return  matchProducts && matchCategory 
})

 
  return (
    <>
      <div className="container mx-auto px-4 md:px-8 pt-8">
        <SearchFilter searchData={searchData} setSearchData={setSearchData}/>
        <CategoryFilter selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
        <h1 className="font-extrabold text-2xl mx-auto  md:mx-4 pt-4">
          Featured Gear ({products.length} Items)
        </h1>

        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 place-items-center ">
          {filterProducts.map((product) => (
            <ProductCard key={product.id} product={product}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductList;
