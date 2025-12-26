import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
// export const StarRating = () => {
//   const stars = 5;
//   const [rating, setRating] = useState(0);
//   const [hover, setHover] = useState(0);

//   const handleClick =(getIndex)=>{
//     console.log(getIndex);
//     setRating(getIndex)
//   }
//   const handleLeave=(getIndex)=>{
//     console.log(getIndex);
//     setHover(getIndex)
//   }
//   const handleMove=()=>{

//     setHover(0)
//   }
//   return (
//     <div className="flex m-5 p-4 gap-5" >

//       {[...Array(stars)].map((_, index) => {
//         index += 1;
//         return <FaStar className={index <= (hover||rating)? 'active': 'inactive'}
//         key={index}
//         onClick={()=>handleClick(index)}
//         onMouseMove={()=>handleMove()}
//         onMouseLeave={()=>handleLeave(index)}
//         size={40}
//         />;
//       })}
//     </div>
//   );
// };

export const StarRating = () => {
  const stars = 5;
  const [rating, setRatings] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div className="flex m-5 p-4 gap-5">
      {[...Array(stars)].map((_, index) => {
        index += 1;
        return (
          <FaStar key={index}
            className={index <= (hover || rating )? "active" : "inactive"}
            onClick={() => {
              if (index === 1 && rating === 1) {
                setRatings(0);
              } else {
                setRatings(index);
              }
            }}
            onMouseEnter={()=>setHover(index)}
             onMouseLeave={()=>setHover(0)}
          />
        );
      })}
    </div>
  );
};
