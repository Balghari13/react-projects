import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

// export const ImgSlider = () => {
//   const [images, setImages] = useState([]);
//   const [currSlide, setCurrSlide] = useState(0);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const url = "https://picsum.photos/v2/list";
//   const limit = 10;

//   const fetchImg = async (getUrl) => {
//     try {
//       setLoading(true);

//       const response = await fetch(`${getUrl}?limit=${limit}`);

//       const data = await response.json();
//       if (data) {
//         setImages(data);
//       }
//     } catch (e) {
//       setErrorMsg(e.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleMoveLeft = () => {
//     console.log("click");
//     setCurrSlide(currSlide === 0 ? images.length - 1 : currSlide - 1);
//   };
//   const handleMoveRight = () => {
//     setCurrSlide(currSlide === images.length - 1 ? 0 : currSlide + 1);
//   };

//   useEffect(() => {
//     if (url !== "") fetchImg(url);
//     console.log(url);
//   }, [url]);

//   if (loading) {
//     return <div>Loading....</div>;
//   }
//   if (errorMsg !== null) {
//     return <div>Error occurred ...! {errorMsg}</div>;
//   }

//   return (
//     <div className="container">
//       {/* ImgSlider */}
//       <BsArrowLeftCircleFill
//         onClick={handleMoveLeft}
//         className="arrow arrow-left"
//       />

//       {images && images.length
//         ? images.map((image, index) => {
//             return (
//               <img
//                 key={image.id}
//                 alt={image.download_url}
//                 src={image.download_url}
//                 className={
//                   currSlide === index
//                     ? "current-image"
//                     : "current-image hide-current-img"
//                 }
//               />
//             );
//           })
//         : null}
//       <BsArrowRightCircleFill
//         onClick={handleMoveRight}
//         className="arrow arrow-right"
//       />
//       <span className="circle-indicators">
//         {images && images.length
//           ? images.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setCurrSlide(index)}
//                 className={
//                   currSlide === index
//                     ? "current-indicator"
//                     : "current-indicator inactive-indicator"
//                 }
//               ></button>
//             ))
//           : null}
//       </span>
//     </div>
//   );
// };

export const ImgSlider = () => {
  const[images, setImages] = useState([])
  const [loading,setLoading] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [currSlide, setCurrSlide] =useState(0)

  const url = "https://picsum.photos/v2/list";
  const limit = 10;

  const fetchImages = async()=>{
    try{
      setLoading(true)
      const response = await fetch(`${url}?limit=${limit}`)
    const data = await response.json()
    console.log(data);
    setImages(data)
    }catch(error){
      setErrorMsg(error.message)
    }finally{
      setLoading(false)
    }
  }

  const handleLeft =()=>{
    setCurrSlide(currSlide===0? images.length-1 : currSlide-1)
  }
  const handleRight = ()=>{
    setCurrSlide(currSlide===images.length-1? 0 : currSlide+1 )
  }
  useEffect(()=>{
    if(url !=='') fetchImages(url)
  },[url])
 
  if(loading){
    return <h3>Loading...!</h3>
  }
  if(errorMsg !== null){
    return <h3>Something went wrong, Error is : {errorMsg}</h3>
  }

  return (
    <div className="container">
      {/* ImgSlider */}
      <BsArrowLeftCircleFill
       onClick={handleLeft}
        className="arrow arrow-left"
      />
{images && images.length ? images.map((image,index)=>(
  <img
  key={index}
  src={image.download_url}
  alt={image.download_url}
className={currSlide=== index ?"current-image" : "current-image hide-current-img"}
  />
)): null}
     
      <BsArrowRightCircleFill
        onClick ={handleRight}
        className="arrow arrow-right"
      />
      <span className="circle-indicators">
      {images && images.length ? images.map((_,index)=>(
      
      <button key={index} onClick={()=>setCurrSlide(index)} className={currSlide=== index?'current-indicator' : 'current-indicator inactive-indicator'}></button>
       
      )):null}
      </span>
    </div>
  );
};
