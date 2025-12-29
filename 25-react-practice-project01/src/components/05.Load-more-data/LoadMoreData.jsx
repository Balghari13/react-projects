import React, { useEffect, useState } from "react";

const LoadMoreData = () => {
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState(null);
  const [disabled, setDisabled] = useState(false)

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
           count * 20
        }`,
      );
      const data = await response.json();
      console.log(data);
      if(data && data.products && data.products.length){
        setItems(preItem=>{
          const existingItem = new Set(preItem.map((item)=>item.id))
          const newUniqueProducts = data.products.filter((item)=>!existingItem.has(item.id))
          return [...preItem,... newUniqueProducts]
        })

      }
    } catch (error) {
      setErrMsg(error.message)
    }finally{
      setLoading(false)
    }
  };
  useEffect(() => {
    fetchData();
  }, [count]);

useEffect(()=>{
  if(items && items.length===100)setDisabled(true)
},[items])

if (loading) { return <div>Loading data ! Please wait.</div>; }

  // if(loading){
  //   return <div>Loading....</div>
  // }
  if(errMsg !== null){
    return <div>Something wrong : {errMsg}</div>
  }

console.log(items);

  return (
    <div>
      <h1> LoadMoreData </h1>
      <div>
        {
         items && items.length ? items.map((product)=>(
            <div key={product.id}>
              <h1>{product.id}</h1>
              <h3>{product.title}</h3>
              <img src={product.thumbnail}  />

            </div>
          )): null
        }
        </div>

        <div>
          <button disabled={disabled} onClick ={()=>setCount(count+1)} className='bg-amber-800'>Load More</button>
          { disabled ? <p>You have reached to 100 products</p> : null}
        </div>
    </div>
  )
};

export default LoadMoreData

