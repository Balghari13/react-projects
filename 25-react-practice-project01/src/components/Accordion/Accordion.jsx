import React, { useState } from "react";
import data from "./data";
import "./style.css";
// const Accordion = () => {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelect, setEnableMultiSelect] = useState(false);
//   const [multipleSelect, setMultipleSelect] = useState([]);

//   const handleSingleSelection = (getCurrentId) => {

//    setSelected(getCurrentId !== selected ? getCurrentId : null);
//   };

//   const handleMultipleSelection = (getCurrentId) => {
//     let copyMultiple = [...multipleSelect]
//     const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId)
//      if(findIndexOfCurrentId === -1) copyMultiple.push(getCurrentId)
//       else copyMultiple.splice(findIndexOfCurrentId,1)
//     setMultipleSelect(copyMultiple)
//   };

//   return (
//     <div className="wrapper">
//       <div className="accordion">
//         <h1 className="text-center">Accordion</h1>
//         <button
//           onClick={() =>  {
//             setEnableMultiSelect(!enableMultiSelect)
//             console.log('click', enableMultiSelect);

//           } }
//           className="bg-blue-700 text-white px-3 py-1 shadow rounded-2xl m-5 block mx-auto cursor-pointer"
//         >
//           Select Multiple
//         </button>

//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div
//               onClick={

//                 enableMultiSelect
//                   ? () => handleMultipleSelection(dataItem.id)
//                   : () => handleSingleSelection(dataItem.id)

//               }
//               className="item"
//             >

//               <div className="title">
//                 <h3>Question: {dataItem.question}</h3> <span>+</span>
//               </div>
//               {selected === dataItem.id || multipleSelect.indexOf(dataItem.id) !== -1 ? (
//                 <div className="content">Answer: {dataItem.answer}</div>
//               ) : null}
//             </div>
//           ))
//         ) : (
//           <div>Data Not Found!</div>
//         )}
//       </div>
//     </div>
//   );
// };

const Accordion = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelect, setEnableMultiSelect] = useState(false)
  const [multipleSelect,setMultipleSelect] = useState([]);

  const handleSingleClick =(getId)=>{
       
    setSelected(getId !=selected ? getId : null)
  }

  const handleMultiClick =(getId)=>{
    let copyMultiple = [...multipleSelect]
    const findIndexOfCurrentId = copyMultiple.indexOf(getId);
    if(findIndexOfCurrentId===-1)copyMultiple.push(getId)
      else copyMultiple.splice(findIndexOfCurrentId,1)

    setMultipleSelect(copyMultiple)

  }

  return (
    <div className="wrapper">
      <div className="accordion">
        <h1 className="text-center">Accordion</h1>
        <button onClick={()=>setEnableMultiSelect(!enableMultiSelect)}className="bg-blue-700 text-white px-3 py-1 shadow rounded-2xl m-5 block mx-auto cursor-pointer">
          Select Multiple
        </button>

        {data.map((item)=><div className="item">
          <h3 onClick={
            enableMultiSelect?
            ()=>handleMultiClick(item.id):
            ()=>handleSingleClick(item.id)}

            className="title">{item.question} <span>+</span></h3>
             {selected === item.id || multipleSelect.includes(item.id)
            //  multipleSelect.indexOf(item.id) !==-1 
             ? <div className="content">{item.answer}</div>:null}
        </div>)}

       
      </div>
    </div>
  );
};

export default Accordion;
